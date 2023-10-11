import type { FindBattleDataAbilities } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataAbilities from 'src/components/base/BattleDataAbility/BattleDataAbilities'

export const QUERY = gql`
  query FindBattleDataAbilities {
    battleDataAbilities {
      id
      abilityId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleDataAbilities yet. '}
      <Link to={routes.newBattleDataAbility()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataAbilities,
}: CellSuccessProps<FindBattleDataAbilities>) => {
  return <BattleDataAbilities battleDataAbilities={battleDataAbilities} />
}
