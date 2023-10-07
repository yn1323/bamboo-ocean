import type {
  DeleteBattleDataMoveMutationVariables,
  FindBattleDataMoves,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/BattleDataMove/BattleDataMovesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BATTLE_DATA_MOVE_MUTATION = gql`
  mutation DeleteBattleDataMoveMutation($id: String!) {
    deleteBattleDataMove(id: $id) {
      id
    }
  }
`

const BattleDataMovesList = ({ battleDataMoves }: FindBattleDataMoves) => {
  const [deleteBattleDataMove] = useMutation(DELETE_BATTLE_DATA_MOVE_MUTATION, {
    onCompleted: () => {
      toast.success('BattleDataMove deleted')
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

  const onDeleteClick = (id: DeleteBattleDataMoveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleDataMove ' + id + '?')) {
      deleteBattleDataMove({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Move id</th>
            <th>Rate</th>
            <th>Battle data id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleDataMoves.map((battleDataMove) => (
            <tr key={battleDataMove.id}>
              <td>{truncate(battleDataMove.id)}</td>
              <td>{truncate(battleDataMove.moveId)}</td>
              <td>{truncate(battleDataMove.rate)}</td>
              <td>{truncate(battleDataMove.battleDataId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleDataMove({ id: battleDataMove.id })}
                    title={
                      'Show battleDataMove ' + battleDataMove.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleDataMove({ id: battleDataMove.id })}
                    title={'Edit battleDataMove ' + battleDataMove.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleDataMove ' + battleDataMove.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleDataMove.id)}
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

export default BattleDataMovesList
