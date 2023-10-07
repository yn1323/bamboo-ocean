import type {
  EditBattleDataItemById,
  UpdateBattleDataItemInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataItemForm from 'src/components/BattleDataItem/BattleDataItemForm'

export const QUERY = gql`
  query EditBattleDataItemById($id: String!) {
    battleDataItem: battleDataItem(id: $id) {
      id
      itemId
      rate
      battleDataId
    }
  }
`
const UPDATE_BATTLE_DATA_ITEM_MUTATION = gql`
  mutation UpdateBattleDataItemMutation(
    $id: String!
    $input: UpdateBattleDataItemInput!
  ) {
    updateBattleDataItem(id: $id, input: $input) {
      id
      itemId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataItem,
}: CellSuccessProps<EditBattleDataItemById>) => {
  const [updateBattleDataItem, { loading, error }] = useMutation(
    UPDATE_BATTLE_DATA_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataItem updated')
        navigate(routes.battleDataItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleDataItemInput,
    id: EditBattleDataItemById['battleDataItem']['id']
  ) => {
    updateBattleDataItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleDataItem {battleDataItem?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataItemForm
          battleDataItem={battleDataItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
