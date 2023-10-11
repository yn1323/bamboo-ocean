import type {
  DeleteMyPartyMutationVariables,
  FindMyParties,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/MyParty/MyPartiesCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_MY_PARTY_MUTATION = gql`
  mutation DeleteMyPartyMutation($id: String!) {
    deleteMyParty(id: $id) {
      id
    }
  }
`

const MyPartiesList = ({ myParties }: FindMyParties) => {
  const [deleteMyParty] = useMutation(DELETE_MY_PARTY_MUTATION, {
    onCompleted: () => {
      toast.success('MyParty deleted')
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

  const onDeleteClick = (id: DeleteMyPartyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myParty ' + id + '?')) {
      deleteMyParty({ variables: { id } })
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
          {myParties.map((myParty) => (
            <tr key={myParty.id}>
              <td>{truncate(myParty.id)}</td>
              <td>{truncate(myParty.name)}</td>
              <td>{checkboxInputTag(myParty.favorite)}</td>
              <td>{truncate(myParty.memo)}</td>
              <td>{truncate(myParty.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.myParty({ id: myParty.id })}
                    title={'Show myParty ' + myParty.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMyParty({ id: myParty.id })}
                    title={'Edit myParty ' + myParty.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete myParty ' + myParty.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(myParty.id)}
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

export default MyPartiesList
