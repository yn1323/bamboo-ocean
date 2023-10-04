import type { EditPokemonById, UpdatePokemonInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PokemonForm from 'src/components/Pokemon/PokemonForm'

export const QUERY = gql`
  query EditPokemonById($id: String!) {
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
const UPDATE_POKEMON_MUTATION = gql`
  mutation UpdatePokemonMutation($id: String!, $input: UpdatePokemonInput!) {
    updatePokemon(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pokemon }: CellSuccessProps<EditPokemonById>) => {
  const [updatePokemon, { loading, error }] = useMutation(
    UPDATE_POKEMON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Pokemon updated')
        navigate(routes.pokemons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePokemonInput,
    id: EditPokemonById['pokemon']['id']
  ) => {
    updatePokemon({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Pokemon {pokemon?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PokemonForm
          pokemon={pokemon}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
