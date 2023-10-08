import type { FindBattleDataTerastalById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataTerastal from 'src/components/base/BattleDataTerastal/BattleDataTerastal'

export const QUERY = gql`
  query FindBattleDataTerastalById($id: String!) {
    battleDataTerastal: battleDataTerastal(id: $id) {
      id
      typeId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleDataTerastal not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataTerastal,
}: CellSuccessProps<FindBattleDataTerastalById>) => {
  return <BattleDataTerastal battleDataTerastal={battleDataTerastal} />
}
