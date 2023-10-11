import type {
  DeleteBattleDataMutationVariables,
  FindBattleDatas,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/BattleData/BattleDatasCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BATTLE_DATA_MUTATION = gql`
  mutation DeleteBattleDataMutation($id: String!) {
    deleteBattleData(id: $id) {
      id
    }
  }
`

const BattleDatasList = ({ battleDatas }: FindBattleDatas) => {
  const [deleteBattleData] = useMutation(DELETE_BATTLE_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('BattleData deleted')
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

  const onDeleteClick = (id: DeleteBattleDataMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleData ' + id + '?')) {
      deleteBattleData({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Battle index id</th>
            <th>Pokemon id</th>
            <th>No</th>
            <th>Rank</th>
            <th>Form id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleDatas.map((battleData) => (
            <tr key={battleData.id}>
              <td>{truncate(battleData.id)}</td>
              <td>{truncate(battleData.battleIndexId)}</td>
              <td>{truncate(battleData.pokemonId)}</td>
              <td>{truncate(battleData.no)}</td>
              <td>{truncate(battleData.rank)}</td>
              <td>{truncate(battleData.formId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleData({ id: battleData.id })}
                    title={'Show battleData ' + battleData.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleData({ id: battleData.id })}
                    title={'Edit battleData ' + battleData.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleData ' + battleData.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleData.id)}
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

export default BattleDatasList
