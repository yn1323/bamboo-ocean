import type { FindBattleDataMoves } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataMoves from 'src/components/BattleDataMove/BattleDataMoves'

export const QUERY = gql`
  query FindBattleDataMoves {
    battleDataMoves {
      id
      moveId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleDataMoves yet. '}
      <Link to={routes.newBattleDataMove()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataMoves,
}: CellSuccessProps<FindBattleDataMoves>) => {
  return <BattleDataMoves battleDataMoves={battleDataMoves} />
}
