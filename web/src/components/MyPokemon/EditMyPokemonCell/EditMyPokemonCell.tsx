import type { EditMyPokemonById, UpdateMyPokemonInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPokemonForm from 'src/components/MyPokemon/MyPokemonForm'

export const QUERY = gql`
  query EditMyPokemonById($id: String!) {
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
const UPDATE_MY_POKEMON_MUTATION = gql`
  mutation UpdateMyPokemonMutation(
    $id: String!
    $input: UpdateMyPokemonInput!
  ) {
    updateMyPokemon(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myPokemon }: CellSuccessProps<EditMyPokemonById>) => {
  const [updateMyPokemon, { loading, error }] = useMutation(
    UPDATE_MY_POKEMON_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyPokemon updated')
        navigate(routes.myPokemons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateMyPokemonInput,
    id: EditMyPokemonById['myPokemon']['id']
  ) => {
    updateMyPokemon({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MyPokemon {myPokemon?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MyPokemonForm
          myPokemon={myPokemon}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
