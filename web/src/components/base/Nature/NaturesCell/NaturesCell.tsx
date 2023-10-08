import type { FindNatures } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Natures from 'src/components/base/Nature/Natures'

export const QUERY = gql`
  query FindNatures {
    natures {
      id
      name
      battleIndex
      increase
      decrease
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No natures yet. '}
      <Link to={routes.newNature()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ natures }: CellSuccessProps<FindNatures>) => {
  return <Natures natures={natures} />
}
