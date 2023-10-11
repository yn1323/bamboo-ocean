import type {
  DeleteBattleDataItemMutationVariables,
  FindBattleDataItems,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/BattleDataItem/BattleDataItemsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BATTLE_DATA_ITEM_MUTATION = gql`
  mutation DeleteBattleDataItemMutation($id: String!) {
    deleteBattleDataItem(id: $id) {
      id
    }
  }
`

const BattleDataItemsList = ({ battleDataItems }: FindBattleDataItems) => {
  const [deleteBattleDataItem] = useMutation(DELETE_BATTLE_DATA_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('BattleDataItem deleted')
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

  const onDeleteClick = (id: DeleteBattleDataItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleDataItem ' + id + '?')) {
      deleteBattleDataItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Item id</th>
            <th>Rate</th>
            <th>Battle data id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleDataItems.map((battleDataItem) => (
            <tr key={battleDataItem.id}>
              <td>{truncate(battleDataItem.id)}</td>
              <td>{truncate(battleDataItem.itemId)}</td>
              <td>{truncate(battleDataItem.rate)}</td>
              <td>{truncate(battleDataItem.battleDataId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleDataItem({ id: battleDataItem.id })}
                    title={
                      'Show battleDataItem ' + battleDataItem.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleDataItem({ id: battleDataItem.id })}
                    title={'Edit battleDataItem ' + battleDataItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleDataItem ' + battleDataItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleDataItem.id)}
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

export default BattleDataItemsList
