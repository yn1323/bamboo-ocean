import type { FindPokemons } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Pokemons from 'src/components/base/Pokemon/Pokemons'

export const QUERY = gql`
  query FindPokemons {
    pokemons {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pokemons yet. '}
      <Link to={routes.newPokemon()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pokemons }: CellSuccessProps<FindPokemons>) => {
  return <Pokemons pokemons={pokemons} />
}
