import type {
  DeleteBattleDataItemMutationVariables,
  FindBattleDataItemById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_BATTLE_DATA_ITEM_MUTATION = gql`
  mutation DeleteBattleDataItemMutation($id: String!) {
    deleteBattleDataItem(id: $id) {
      id
    }
  }
`

interface Props {
  battleDataItem: NonNullable<FindBattleDataItemById['battleDataItem']>
}

const BattleDataItem = ({ battleDataItem }: Props) => {
  const [deleteBattleDataItem] = useMutation(DELETE_BATTLE_DATA_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('BattleDataItem deleted')
      navigate(routes.battleDataItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBattleDataItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleDataItem ' + id + '?')) {
      deleteBattleDataItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleDataItem {battleDataItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleDataItem.id}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{battleDataItem.itemId}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{battleDataItem.rate}</td>
            </tr>
            <tr>
              <th>Battle data id</th>
              <td>{battleDataItem.battleDataId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleDataItem({ id: battleDataItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleDataItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleDataItem
