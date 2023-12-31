import type { FindMoveById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Move from 'src/components/base/Move/Move'

export const QUERY = gql`
  query FindMoveById($id: String!) {
    move: move(id: $id) {
      id
      detail
      name
      typeId
      attackTypeId
      power
      accuracy
      pp
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Move not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ move }: CellSuccessProps<FindMoveById>) => {
  return <Move move={move} />
}
