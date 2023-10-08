import type { FindMyPartyTags } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import MyPartyTags from 'src/components/base/MyPartyTag/MyPartyTags'

export const QUERY = gql`
  query FindMyPartyTags {
    myPartyTags {
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
      {'No myPartyTags yet. '}
      <Link to={routes.newMyPartyTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myPartyTags }: CellSuccessProps<FindMyPartyTags>) => {
  return <MyPartyTags myPartyTags={myPartyTags} />
}
