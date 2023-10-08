import type { FindMyPokemons } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MyPokemons from 'src/components/MyPokemon/MyPokemons'

export const QUERY = gql`
  query FindMyPokemons {
    myPokemons {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No myPokemons yet. '}
      <Link to={routes.newMyPokemon()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myPokemons }: CellSuccessProps<FindMyPokemons>) => {
  return <MyPokemons myPokemons={myPokemons} />
}
