import type { FindMoves } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Moves from 'src/components/Move/Moves'

export const QUERY = gql`
  query FindMoves {
    moves {
      id
      target
      detail
      name
      typeId
      attackTypeId
      power
      accuracy
      pp
      isTouchable
      enableProtect
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No moves yet. '}
      <Link to={routes.newMove()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ moves }: CellSuccessProps<FindMoves>) => {
  return <Moves moves={moves} />
}
