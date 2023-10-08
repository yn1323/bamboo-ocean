import type { FindTypeRelationById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import TypeRelation from 'src/components/base/TypeRelation/TypeRelation'

export const QUERY = gql`
  query FindTypeRelationById($id: String!) {
    typeRelation: typeRelation(id: $id) {
      id
      fromId
      toId
      rate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TypeRelation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  typeRelation,
}: CellSuccessProps<FindTypeRelationById>) => {
  return <TypeRelation typeRelation={typeRelation} />
}
