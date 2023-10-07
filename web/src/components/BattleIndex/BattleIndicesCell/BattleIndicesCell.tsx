import type { FindBattleIndices } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BattleIndices from 'src/components/BattleIndex/BattleIndices'

export const QUERY = gql`
  query FindBattleIndices {
    battleIndices {
      id
      capturedAt
      startAt
      endAt
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleIndices yet. '}
      <Link to={routes.newBattleIndex()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleIndices,
}: CellSuccessProps<FindBattleIndices>) => {
  return <BattleIndices battleIndices={battleIndices} />
}
