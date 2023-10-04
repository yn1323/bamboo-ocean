import type {
  DeleteAttackTypeMutationVariables,
  FindAttackTypeById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ATTACK_TYPE_MUTATION = gql`
  mutation DeleteAttackTypeMutation($id: String!) {
    deleteAttackType(id: $id) {
      id
    }
  }
`

interface Props {
  attackType: NonNullable<FindAttackTypeById['attackType']>
}

const AttackType = ({ attackType }: Props) => {
  const [deleteAttackType] = useMutation(DELETE_ATTACK_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('AttackType deleted')
      navigate(routes.attackTypes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAttackTypeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete attackType ' + id + '?')) {
      deleteAttackType({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AttackType {attackType.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{attackType.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{attackType.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAttackType({ id: attackType.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(attackType.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AttackType
