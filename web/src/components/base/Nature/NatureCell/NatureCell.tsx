import type { FindNatureById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Nature from 'src/components/base/Nature/Nature'

export const QUERY = gql`
  query FindNatureById($id: String!) {
    nature: nature(id: $id) {
      id
      name
      battleIndex
      increase
      decrease
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Nature not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nature }: CellSuccessProps<FindNatureById>) => {
  return <Nature nature={nature} />
}
