import type { FindTypes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Types from 'src/components/base/Type/Types'

export const QUERY = gql`
  query FindTypes {
    types {
      id
      name
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No types yet. '}
      <Link to={routes.newType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ types }: CellSuccessProps<FindTypes>) => {
  return <Types types={types} />
}
