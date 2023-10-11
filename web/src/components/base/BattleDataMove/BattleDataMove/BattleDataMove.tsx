import type {
  DeleteBattleDataMoveMutationVariables,
  FindBattleDataMoveById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_BATTLE_DATA_MOVE_MUTATION = gql`
  mutation DeleteBattleDataMoveMutation($id: String!) {
    deleteBattleDataMove(id: $id) {
      id
    }
  }
`

interface Props {
  battleDataMove: NonNullable<FindBattleDataMoveById['battleDataMove']>
}

const BattleDataMove = ({ battleDataMove }: Props) => {
  const [deleteBattleDataMove] = useMutation(DELETE_BATTLE_DATA_MOVE_MUTATION, {
    onCompleted: () => {
      toast.success('BattleDataMove deleted')
      navigate(routes.battleDataMoves())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBattleDataMoveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleDataMove ' + id + '?')) {
      deleteBattleDataMove({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleDataMove {battleDataMove.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleDataMove.id}</td>
            </tr>
            <tr>
              <th>Move id</th>
              <td>{battleDataMove.moveId}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{battleDataMove.rate}</td>
            </tr>
            <tr>
              <th>Battle data id</th>
              <td>{battleDataMove.battleDataId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleDataMove({ id: battleDataMove.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleDataMove.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleDataMove
