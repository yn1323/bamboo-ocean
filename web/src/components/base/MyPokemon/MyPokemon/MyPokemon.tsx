import type {
  DeleteMyPokemonMutationVariables,
  FindMyPokemonById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_MY_POKEMON_MUTATION = gql`
  mutation DeleteMyPokemonMutation($id: String!) {
    deleteMyPokemon(id: $id) {
      id
    }
  }
`

interface Props {
  myPokemon: NonNullable<FindMyPokemonById['myPokemon']>
}

const MyPokemon = ({ myPokemon }: Props) => {
  const [deleteMyPokemon] = useMutation(DELETE_MY_POKEMON_MUTATION, {
    onCompleted: () => {
      toast.success('MyPokemon deleted')
      navigate(routes.myPokemons())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMyPokemonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myPokemon ' + id + '?')) {
      deleteMyPokemon({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MyPokemon {myPokemon.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{myPokemon.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{myPokemon.name}</td>
            </tr>
            <tr>
              <th>Favorite</th>
              <td>{checkboxInputTag(myPokemon.favorite)}</td>
            </tr>
            <tr>
              <th>Ev h</th>
              <td>{myPokemon.evH}</td>
            </tr>
            <tr>
              <th>Ev a</th>
              <td>{myPokemon.evA}</td>
            </tr>
            <tr>
              <th>Ev b</th>
              <td>{myPokemon.evB}</td>
            </tr>
            <tr>
              <th>Ev c</th>
              <td>{myPokemon.evC}</td>
            </tr>
            <tr>
              <th>Ev d</th>
              <td>{myPokemon.evD}</td>
            </tr>
            <tr>
              <th>Ev s</th>
              <td>{myPokemon.evS}</td>
            </tr>
            <tr>
              <th>Memo</th>
              <td>{myPokemon.memo}</td>
            </tr>
            <tr>
              <th>Pokemon id</th>
              <td>{myPokemon.pokemonId}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{myPokemon.itemId}</td>
            </tr>
            <tr>
              <th>Ability id</th>
              <td>{myPokemon.abilityId}</td>
            </tr>
            <tr>
              <th>Nature id</th>
              <td>{myPokemon.natureId}</td>
            </tr>
            <tr>
              <th>Terastal id</th>
              <td>{myPokemon.terastalId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{myPokemon.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMyPokemon({ id: myPokemon.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(myPokemon.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MyPokemon
