import type { FindPokemonById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Pokemon from 'src/components/base/Pokemon/Pokemon'

export const QUERY = gql`
  query FindPokemonById($id: String!) {
    pokemon: pokemon(id: $id) {
      id
      name
      form
      no
      height
      weight
      statusH
      statusA
      statusB
      statusC
      statusD
      statusS
      base64Image
      url
      battleIndex
      battleFormIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Pokemon not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pokemon }: CellSuccessProps<FindPokemonById>) => {
  return <Pokemon pokemon={pokemon} />
}
