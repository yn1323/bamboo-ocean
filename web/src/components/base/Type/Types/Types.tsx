import type { DeleteTypeMutationVariables, FindTypes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/Type/TypesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_TYPE_MUTATION = gql`
  mutation DeleteTypeMutation($id: String!) {
    deleteType(id: $id) {
      id
    }
  }
`

const TypesList = ({ types }: FindTypes) => {
  const [deleteType] = useMutation(DELETE_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('Type deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteTypeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete type ' + id + '?')) {
      deleteType({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Battle index</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr key={type.id}>
              <td>{truncate(type.id)}</td>
              <td>{truncate(type.name)}</td>
              <td>{truncate(type.battleIndex)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.type({ id: type.id })}
                    title={'Show type ' + type.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editType({ id: type.id })}
                    title={'Edit type ' + type.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete type ' + type.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(type.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TypesList
