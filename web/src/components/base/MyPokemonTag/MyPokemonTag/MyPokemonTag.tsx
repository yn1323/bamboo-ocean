import type {
  DeleteMyPokemonTagMutationVariables,
  FindMyPokemonTagById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_MY_POKEMON_TAG_MUTATION = gql`
  mutation DeleteMyPokemonTagMutation($id: String!) {
    deleteMyPokemonTag(id: $id) {
      id
    }
  }
`

interface Props {
  myPokemonTag: NonNullable<FindMyPokemonTagById['myPokemonTag']>
}

const MyPokemonTag = ({ myPokemonTag }: Props) => {
  const [deleteMyPokemonTag] = useMutation(DELETE_MY_POKEMON_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('MyPokemonTag deleted')
      navigate(routes.myPokemonTags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMyPokemonTagMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myPokemonTag ' + id + '?')) {
      deleteMyPokemonTag({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MyPokemonTag {myPokemonTag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{myPokemonTag.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{myPokemonTag.name}</td>
            </tr>
            <tr>
              <th>Favorite</th>
              <td>{checkboxInputTag(myPokemonTag.favorite)}</td>
            </tr>
            <tr>
              <th>Memo</th>
              <td>{myPokemonTag.memo}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{myPokemonTag.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMyPokemonTag({ id: myPokemonTag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(myPokemonTag.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MyPokemonTag
