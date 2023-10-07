import type { FindAttackTypeById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import AttackType from 'src/components/AttackType/AttackType'

export const QUERY = gql`
  query FindAttackTypeById($id: String!) {
    attackType: attackType(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AttackType not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  attackType,
}: CellSuccessProps<FindAttackTypeById>) => {
  return <AttackType attackType={attackType} />
}
