import type { FindUsers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Users from 'src/components/base/User/Users'

export const QUERY = gql`
  query FindUsers {
    users {
      id
      name
      createdUserAt
      updatedUserAt
      deletedUserAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.newUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ users }: CellSuccessProps<FindUsers>) => {
  return <Users users={users} />
}
