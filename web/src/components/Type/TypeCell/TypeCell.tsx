import type { FindTypeById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Type from 'src/components/Type/Type'

export const QUERY = gql`
  query FindTypeById($id: String!) {
    type: type(id: $id) {
      id
      name
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Type not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ type }: CellSuccessProps<FindTypeById>) => {
  return <Type type={type} />
}
