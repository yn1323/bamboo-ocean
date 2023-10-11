import type { CreateMyPokemonInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPokemonForm from 'src/components/base/MyPokemon/MyPokemonForm'

const CREATE_MY_POKEMON_MUTATION = gql`
  mutation CreateMyPokemonMutation($input: CreateMyPokemonInput!) {
    createMyPokemon(input: $input) {
      id
    }
  }
`

const NewMyPokemon = () => {
  const [createMyPokemon, { loading, error }] = useMutation(
    CREATE_MY_POKEMON_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyPokemon created')
        navigate(routes.myPokemons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateMyPokemonInput) => {
    createMyPokemon({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MyPokemon</h2>
      </header>
      <div className="rw-segment-main">
        <MyPokemonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMyPokemon
