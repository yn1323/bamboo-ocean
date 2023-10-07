import type { CreatePokemonInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PokemonForm from 'src/components/Pokemon/PokemonForm'

const CREATE_POKEMON_MUTATION = gql`
  mutation CreatePokemonMutation($input: CreatePokemonInput!) {
    createPokemon(input: $input) {
      id
    }
  }
`

const NewPokemon = () => {
  const [createPokemon, { loading, error }] = useMutation(
    CREATE_POKEMON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Pokemon created')
        navigate(routes.pokemons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePokemonInput) => {
    createPokemon({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Pokemon</h2>
      </header>
      <div className="rw-segment-main">
        <PokemonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPokemon
