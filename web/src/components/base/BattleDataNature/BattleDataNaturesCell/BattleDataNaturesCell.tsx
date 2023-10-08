import type { FindBattleDataNatures } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataNatures from 'src/components/base/BattleDataNature/BattleDataNatures'

export const QUERY = gql`
  query FindBattleDataNatures {
    battleDataNatures {
      id
      natureId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleDataNatures yet. '}
      <Link to={routes.newBattleDataNature()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataNatures,
}: CellSuccessProps<FindBattleDataNatures>) => {
  return <BattleDataNatures battleDataNatures={battleDataNatures} />
}
