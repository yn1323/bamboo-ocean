import type {
  DeleteBattleDataTerastalMutationVariables,
  FindBattleDataTerastalById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_BATTLE_DATA_TERASTAL_MUTATION = gql`
  mutation DeleteBattleDataTerastalMutation($id: String!) {
    deleteBattleDataTerastal(id: $id) {
      id
    }
  }
`

interface Props {
  battleDataTerastal: NonNullable<
    FindBattleDataTerastalById['battleDataTerastal']
  >
}

const BattleDataTerastal = ({ battleDataTerastal }: Props) => {
  const [deleteBattleDataTerastal] = useMutation(
    DELETE_BATTLE_DATA_TERASTAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataTerastal deleted')
        navigate(routes.battleDataTerastals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteBattleDataTerastalMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete battleDataTerastal ' + id + '?')
    ) {
      deleteBattleDataTerastal({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleDataTerastal {battleDataTerastal.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleDataTerastal.id}</td>
            </tr>
            <tr>
              <th>Type id</th>
              <td>{battleDataTerastal.typeId}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{battleDataTerastal.rate}</td>
            </tr>
            <tr>
              <th>Battle data id</th>
              <td>{battleDataTerastal.battleDataId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleDataTerastal({ id: battleDataTerastal.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleDataTerastal.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleDataTerastal
