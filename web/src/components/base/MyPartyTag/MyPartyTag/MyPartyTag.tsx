import type {
  DeleteMyPartyTagMutationVariables,
  FindMyPartyTagById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_MY_PARTY_TAG_MUTATION = gql`
  mutation DeleteMyPartyTagMutation($id: String!) {
    deleteMyPartyTag(id: $id) {
      id
    }
  }
`

interface Props {
  myPartyTag: NonNullable<FindMyPartyTagById['myPartyTag']>
}

const MyPartyTag = ({ myPartyTag }: Props) => {
  const [deleteMyPartyTag] = useMutation(DELETE_MY_PARTY_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('MyPartyTag deleted')
      navigate(routes.myPartyTags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMyPartyTagMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myPartyTag ' + id + '?')) {
      deleteMyPartyTag({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MyPartyTag {myPartyTag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{myPartyTag.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{myPartyTag.name}</td>
            </tr>
            <tr>
              <th>Favorite</th>
              <td>{checkboxInputTag(myPartyTag.favorite)}</td>
            </tr>
            <tr>
              <th>Memo</th>
              <td>{myPartyTag.memo}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{myPartyTag.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMyPartyTag({ id: myPartyTag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(myPartyTag.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MyPartyTag
