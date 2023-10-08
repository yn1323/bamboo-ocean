import type {
  DeleteMyPokemonTagMutationVariables,
  FindMyPokemonTags,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/MyPokemonTag/MyPokemonTagsCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_MY_POKEMON_TAG_MUTATION = gql`
  mutation DeleteMyPokemonTagMutation($id: String!) {
    deleteMyPokemonTag(id: $id) {
      id
    }
  }
`

const MyPokemonTagsList = ({ myPokemonTags }: FindMyPokemonTags) => {
  const [deleteMyPokemonTag] = useMutation(DELETE_MY_POKEMON_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('MyPokemonTag deleted')
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

  const onDeleteClick = (id: DeleteMyPokemonTagMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myPokemonTag ' + id + '?')) {
      deleteMyPokemonTag({ variables: { id } })
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
            <th>Memo</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {myPokemonTags.map((myPokemonTag) => (
            <tr key={myPokemonTag.id}>
              <td>{truncate(myPokemonTag.id)}</td>
              <td>{truncate(myPokemonTag.name)}</td>
              <td>{checkboxInputTag(myPokemonTag.favorite)}</td>
              <td>{truncate(myPokemonTag.memo)}</td>
              <td>{truncate(myPokemonTag.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.myPokemonTag({ id: myPokemonTag.id })}
                    title={'Show myPokemonTag ' + myPokemonTag.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMyPokemonTag({ id: myPokemonTag.id })}
                    title={'Edit myPokemonTag ' + myPokemonTag.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete myPokemonTag ' + myPokemonTag.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(myPokemonTag.id)}
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

export default MyPokemonTagsList
