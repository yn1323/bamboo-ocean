import type { FindBattleDataMoveById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataMove from 'src/components/BattleDataMove/BattleDataMove'

export const QUERY = gql`
  query FindBattleDataMoveById($id: String!) {
    battleDataMove: battleDataMove(id: $id) {
      id
      moveId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleDataMove not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataMove,
}: CellSuccessProps<FindBattleDataMoveById>) => {
  return <BattleDataMove battleDataMove={battleDataMove} />
}
