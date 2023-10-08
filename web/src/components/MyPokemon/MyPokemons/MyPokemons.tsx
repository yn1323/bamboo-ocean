import type {
  DeleteMyPokemonMutationVariables,
  FindMyPokemons,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/MyPokemon/MyPokemonsCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_MY_POKEMON_MUTATION = gql`
  mutation DeleteMyPokemonMutation($id: String!) {
    deleteMyPokemon(id: $id) {
      id
    }
  }
`

const MyPokemonsList = ({ myPokemons }: FindMyPokemons) => {
  const [deleteMyPokemon] = useMutation(DELETE_MY_POKEMON_MUTATION, {
    onCompleted: () => {
      toast.success('MyPokemon deleted')
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

  const onDeleteClick = (id: DeleteMyPokemonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myPokemon ' + id + '?')) {
      deleteMyPokemon({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Favorite</th>
            <th>Ev h</th>
            <th>Ev a</th>
            <th>Ev b</th>
            <th>Ev c</th>
            <th>Ev d</th>
            <th>Ev s</th>
            <th>Memo</th>
            <th>Pokemon id</th>
            <th>Item id</th>
            <th>Ability id</th>
            <th>Nature id</th>
            <th>Terastal id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {myPokemons.map((myPokemon) => (
            <tr key={myPokemon.id}>
              <td>{truncate(myPokemon.id)}</td>
              <td>{truncate(myPokemon.name)}</td>
              <td>{checkboxInputTag(myPokemon.favorite)}</td>
              <td>{truncate(myPokemon.evH)}</td>
              <td>{truncate(myPokemon.evA)}</td>
              <td>{truncate(myPokemon.evB)}</td>
              <td>{truncate(myPokemon.evC)}</td>
              <td>{truncate(myPokemon.evD)}</td>
              <td>{truncate(myPokemon.evS)}</td>
              <td>{truncate(myPokemon.memo)}</td>
              <td>{truncate(myPokemon.pokemonId)}</td>
              <td>{truncate(myPokemon.itemId)}</td>
              <td>{truncate(myPokemon.abilityId)}</td>
              <td>{truncate(myPokemon.natureId)}</td>
              <td>{truncate(myPokemon.terastalId)}</td>
              <td>{truncate(myPokemon.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.myPokemon({ id: myPokemon.id })}
                    title={'Show myPokemon ' + myPokemon.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMyPokemon({ id: myPokemon.id })}
                    title={'Edit myPokemon ' + myPokemon.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete myPokemon ' + myPokemon.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(myPokemon.id)}
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

export default MyPokemonsList
