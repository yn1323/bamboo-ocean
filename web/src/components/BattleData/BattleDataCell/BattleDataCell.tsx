import type { FindBattleDataById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleData from 'src/components/BattleData/BattleData'

export const QUERY = gql`
  query FindBattleDataById($id: String!) {
    battleData: battleData(id: $id) {
      id
      battleIndexId
      pokemonId
      no
      rank
      formId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleData not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleData,
}: CellSuccessProps<FindBattleDataById>) => {
  return <BattleData battleData={battleData} />
}
