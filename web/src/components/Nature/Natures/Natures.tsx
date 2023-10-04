import type { DeleteNatureMutationVariables, FindNatures } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Nature/NaturesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_NATURE_MUTATION = gql`
  mutation DeleteNatureMutation($id: String!) {
    deleteNature(id: $id) {
      id
    }
  }
`

const NaturesList = ({ natures }: FindNatures) => {
  const [deleteNature] = useMutation(DELETE_NATURE_MUTATION, {
    onCompleted: () => {
      toast.success('Nature deleted')
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

  const onDeleteClick = (id: DeleteNatureMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete nature ' + id + '?')) {
      deleteNature({ variables: { id } })
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
            <th>Increase</th>
            <th>Decrease</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {natures.map((nature) => (
            <tr key={nature.id}>
              <td>{truncate(nature.id)}</td>
              <td>{truncate(nature.name)}</td>
              <td>{truncate(nature.battleIndex)}</td>
              <td>{truncate(nature.increase)}</td>
              <td>{truncate(nature.decrease)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.nature({ id: nature.id })}
                    title={'Show nature ' + nature.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNature({ id: nature.id })}
                    title={'Edit nature ' + nature.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete nature ' + nature.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(nature.id)}
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

export default NaturesList
