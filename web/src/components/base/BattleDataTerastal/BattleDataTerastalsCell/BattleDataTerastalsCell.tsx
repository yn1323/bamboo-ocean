import type { FindBattleDataTerastals } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataTerastals from 'src/components/base/BattleDataTerastal/BattleDataTerastals'

export const QUERY = gql`
  query FindBattleDataTerastals {
    battleDataTerastals {
      id
      typeId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleDataTerastals yet. '}
      <Link to={routes.newBattleDataTerastal()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataTerastals,
}: CellSuccessProps<FindBattleDataTerastals>) => {
  return <BattleDataTerastals battleDataTerastals={battleDataTerastals} />
}
