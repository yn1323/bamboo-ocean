import type { FindBattleDataAbilityById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataAbility from 'src/components/BattleDataAbility/BattleDataAbility'

export const QUERY = gql`
  query FindBattleDataAbilityById($id: String!) {
    battleDataAbility: battleDataAbility(id: $id) {
      id
      abilityId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BattleDataAbility not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataAbility,
}: CellSuccessProps<FindBattleDataAbilityById>) => {
  return <BattleDataAbility battleDataAbility={battleDataAbility} />
}
