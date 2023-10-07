import type {
  DeletePokemonMutationVariables,
  FindPokemonById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_POKEMON_MUTATION = gql`
  mutation DeletePokemonMutation($id: String!) {
    deletePokemon(id: $id) {
      id
    }
  }
`

interface Props {
  pokemon: NonNullable<FindPokemonById['pokemon']>
}

const Pokemon = ({ pokemon }: Props) => {
  const [deletePokemon] = useMutation(DELETE_POKEMON_MUTATION, {
    onCompleted: () => {
      toast.success('Pokemon deleted')
      navigate(routes.pokemons())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePokemonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pokemon ' + id + '?')) {
      deletePokemon({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Pokemon {pokemon.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pokemon.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{pokemon.name}</td>
            </tr>
            <tr>
              <th>Form</th>
              <td>{pokemon.form}</td>
            </tr>
            <tr>
              <th>No</th>
              <td>{pokemon.no}</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{pokemon.height}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{pokemon.weight}</td>
            </tr>
            <tr>
              <th>Status h</th>
              <td>{pokemon.statusH}</td>
            </tr>
            <tr>
              <th>Status a</th>
              <td>{pokemon.statusA}</td>
            </tr>
            <tr>
              <th>Status b</th>
              <td>{pokemon.statusB}</td>
            </tr>
            <tr>
              <th>Status c</th>
              <td>{pokemon.statusC}</td>
            </tr>
            <tr>
              <th>Status d</th>
              <td>{pokemon.statusD}</td>
            </tr>
            <tr>
              <th>Status s</th>
              <td>{pokemon.statusS}</td>
            </tr>
            <tr>
              <th>Base64 image</th>
              <td>
                <img
                  alt="img"
                  src={`data:image/png;base64,  ${pokemon.base64Image}`}
                />
              </td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{pokemon.url}</td>
            </tr>
            <tr>
              <th>Battle index</th>
              <td>{pokemon.battleIndex}</td>
            </tr>
            <tr>
              <th>Battle form index</th>
              <td>{pokemon.battleFormIndex}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPokemon({ id: pokemon.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pokemon.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Pokemon
