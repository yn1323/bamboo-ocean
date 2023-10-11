import type {
  DeleteMyPartyTagMutationVariables,
  FindMyPartyTags,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/MyPartyTag/MyPartyTagsCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_MY_PARTY_TAG_MUTATION = gql`
  mutation DeleteMyPartyTagMutation($id: String!) {
    deleteMyPartyTag(id: $id) {
      id
    }
  }
`

const MyPartyTagsList = ({ myPartyTags }: FindMyPartyTags) => {
  const [deleteMyPartyTag] = useMutation(DELETE_MY_PARTY_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('MyPartyTag deleted')
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

  const onDeleteClick = (id: DeleteMyPartyTagMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myPartyTag ' + id + '?')) {
      deleteMyPartyTag({ variables: { id } })
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
          {myPartyTags.map((myPartyTag) => (
            <tr key={myPartyTag.id}>
              <td>{truncate(myPartyTag.id)}</td>
              <td>{truncate(myPartyTag.name)}</td>
              <td>{checkboxInputTag(myPartyTag.favorite)}</td>
              <td>{truncate(myPartyTag.memo)}</td>
              <td>{truncate(myPartyTag.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.myPartyTag({ id: myPartyTag.id })}
                    title={'Show myPartyTag ' + myPartyTag.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMyPartyTag({ id: myPartyTag.id })}
                    title={'Edit myPartyTag ' + myPartyTag.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete myPartyTag ' + myPartyTag.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(myPartyTag.id)}
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

export default MyPartyTagsList
