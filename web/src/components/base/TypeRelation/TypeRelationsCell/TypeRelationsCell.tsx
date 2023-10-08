import type { FindTypeRelations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import TypeRelations from 'src/components/base/TypeRelation/TypeRelations'

export const QUERY = gql`
  query FindTypeRelations {
    typeRelations {
      id
      fromId
      toId
      rate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No typeRelations yet. '}
      <Link to={routes.newTypeRelation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  typeRelations,
}: CellSuccessProps<FindTypeRelations>) => {
  return <TypeRelations typeRelations={typeRelations} />
}
