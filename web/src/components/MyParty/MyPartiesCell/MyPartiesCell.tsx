import type { FindMyParties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MyParties from 'src/components/MyParty/MyParties'

export const QUERY = gql`
  query FindMyParties {
    myParties {
      id
      name
      favorite
      memo
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No myParties yet. '}
      <Link to={routes.newMyParty()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myParties }: CellSuccessProps<FindMyParties>) => {
  return <MyParties myParties={myParties} />
}
