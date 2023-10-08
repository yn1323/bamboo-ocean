import type {
  DeletePokemonMutationVariables,
  FindPokemons,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/Pokemon/PokemonsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_POKEMON_MUTATION = gql`
  mutation DeletePokemonMutation($id: String!) {
    deletePokemon(id: $id) {
      id
    }
  }
`

const PokemonsList = ({ pokemons }: FindPokemons) => {
  const [deletePokemon] = useMutation(DELETE_POKEMON_MUTATION, {
    onCompleted: () => {
      toast.success('Pokemon deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePokemonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pokemon ' + id + '?')) {
      deletePokemon({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Form</th>
            <th>No</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Status h</th>
            <th>Status a</th>
            <th>Status b</th>
            <th>Status c</th>
            <th>Status d</th>
            <th>Status s</th>
            <th>Base64 image</th>
            <th>Url</th>
            <th>Battle index</th>
            <th>Battle form index</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{truncate(pokemon.id)}</td>
              <td>{truncate(pokemon.name)}</td>
              <td>{truncate(pokemon.form)}</td>
              <td>{truncate(pokemon.no)}</td>
              <td>{truncate(pokemon.height)}</td>
              <td>{truncate(pokemon.weight)}</td>
              <td>{truncate(pokemon.statusH)}</td>
              <td>{truncate(pokemon.statusA)}</td>
              <td>{truncate(pokemon.statusB)}</td>
              <td>{truncate(pokemon.statusC)}</td>
              <td>{truncate(pokemon.statusD)}</td>
              <td>{truncate(pokemon.statusS)}</td>
              <td>
                <img
                  alt="img"
                  src={`data:image/png;base64,  ${pokemon.base64Image}`}
                />
              </td>
              <td>{truncate(pokemon.url)}</td>
              <td>{truncate(pokemon.battleIndex)}</td>
              <td>{truncate(pokemon.battleFormIndex)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.pokemon({ id: pokemon.id })}
                    title={'Show pokemon ' + pokemon.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPokemon({ id: pokemon.id })}
                    title={'Edit pokemon ' + pokemon.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete pokemon ' + pokemon.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(pokemon.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonsList
