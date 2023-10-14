import type {
  DeleteAttackTypeMutationVariables,
  FindAttackTypes,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/AttackType/AttackTypesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_ATTACK_TYPE_MUTATION = gql`
  mutation DeleteAttackTypeMutation($id: String!) {
    deleteAttackType(id: $id) {
      id
    }
  }
`

const AttackTypesList = ({ attackTypes }: FindAttackTypes) => {
  const [deleteAttackType] = useMutation(DELETE_ATTACK_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('AttackType deleted')
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

  const onDeleteClick = (id: DeleteAttackTypeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete attackType ' + id + '?')) {
      deleteAttackType({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {attackTypes.map((attackType) => (
            <tr key={attackType.id}>
              <td>{truncate(attackType.id)}</td>
              <td>{truncate(attackType.name)}</td>
              <td style={{ background: 'gray' }}>
                <img src={attackType.imageUrl} alt={attackType.name} />
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.attackType({ id: attackType.id })}
                    title={'Show attackType ' + attackType.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAttackType({ id: attackType.id })}
                    title={'Edit attackType ' + attackType.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete attackType ' + attackType.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(attackType.id)}
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

export default AttackTypesList
