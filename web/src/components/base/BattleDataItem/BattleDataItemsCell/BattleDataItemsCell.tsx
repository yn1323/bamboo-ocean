import type { FindBattleDataItems } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDataItems from 'src/components/base/BattleDataItem/BattleDataItems'

export const QUERY = gql`
  query FindBattleDataItems {
    battleDataItems {
      id
      itemId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleDataItems yet. '}
      <Link to={routes.newBattleDataItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataItems,
}: CellSuccessProps<FindBattleDataItems>) => {
  return <BattleDataItems battleDataItems={battleDataItems} />
}
