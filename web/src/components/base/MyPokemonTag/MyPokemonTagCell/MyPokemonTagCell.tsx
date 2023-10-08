import type { FindMyPokemonTagById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import MyPokemonTag from 'src/components/base/MyPokemonTag/MyPokemonTag'

export const QUERY = gql`
  query FindMyPokemonTagById($id: String!) {
    myPokemonTag: myPokemonTag(id: $id) {
      id
      name
      favorite
      memo
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MyPokemonTag not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  myPokemonTag,
}: CellSuccessProps<FindMyPokemonTagById>) => {
  return <MyPokemonTag myPokemonTag={myPokemonTag} />
}
