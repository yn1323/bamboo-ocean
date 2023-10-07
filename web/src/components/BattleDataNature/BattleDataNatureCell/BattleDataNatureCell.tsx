import type { FindBattleDataNatureById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataNature from 'src/components/BattleDataNature/BattleDataNature'

export const QUERY = gql`
  query FindBattleDataNatureById($id: String!) {
    battleDataNature: battleDataNature(id: $id) {
      id
      natureId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleDataNature not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataNature,
}: CellSuccessProps<FindBattleDataNatureById>) => {
  return <BattleDataNature battleDataNature={battleDataNature} />
}
