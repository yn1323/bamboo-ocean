import type { FindBattleIndexById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleIndex from 'src/components/base/BattleIndex/BattleIndex'

export const QUERY = gql`
  query FindBattleIndexById($id: String!) {
    battleIndex: battleIndex(id: $id) {
      id
      capturedAt
      startAt
      endAt
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleIndex not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleIndex,
}: CellSuccessProps<FindBattleIndexById>) => {
  return <BattleIndex battleIndex={battleIndex} />
}
