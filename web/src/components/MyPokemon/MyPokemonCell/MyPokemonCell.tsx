import type { FindMyPokemonById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MyPokemon from 'src/components/MyPokemon/MyPokemon'

export const QUERY = gql`
  query FindMyPokemonById($id: String!) {
    myPokemon: myPokemon(id: $id) {
      id
      name
      favorite
      evH
      evA
      evB
      evC
      evD
      evS
      memo
      pokemonId
      itemId
      abilityId
      natureId
      terastalId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MyPokemon not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myPokemon }: CellSuccessProps<FindMyPokemonById>) => {
  return <MyPokemon myPokemon={myPokemon} />
}
