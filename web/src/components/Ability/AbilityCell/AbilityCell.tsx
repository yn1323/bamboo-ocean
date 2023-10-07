import type { FindAbilityById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Ability from 'src/components/Ability/Ability'

export const QUERY = gql`
  query FindAbilityById($id: String!) {
    ability: ability(id: $id) {
      id
      name
      detail
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Ability not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ ability }: CellSuccessProps<FindAbilityById>) => {
  return <Ability ability={ability} />
}
