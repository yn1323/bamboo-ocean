import type { FindAttackTypes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import AttackTypes from 'src/components/base/AttackType/AttackTypes'

export const QUERY = gql`
  query FindAttackTypes {
    attackTypes {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No attackTypes yet. '}
      <Link to={routes.newAttackType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ attackTypes }: CellSuccessProps<FindAttackTypes>) => {
  return <AttackTypes attackTypes={attackTypes} />
}
