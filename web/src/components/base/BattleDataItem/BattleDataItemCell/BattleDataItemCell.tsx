import type { FindBattleDataItemById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataItem from 'src/components/base/BattleDataItem/BattleDataItem'

export const QUERY = gql`
  query FindBattleDataItemById($id: String!) {
    battleDataItem: battleDataItem(id: $id) {
      id
      itemId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleDataItem not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataItem,
}: CellSuccessProps<FindBattleDataItemById>) => {
  return <BattleDataItem battleDataItem={battleDataItem} />
}
