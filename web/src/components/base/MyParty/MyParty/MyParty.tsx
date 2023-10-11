import type {
  DeleteMyPartyMutationVariables,
  FindMyPartyById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_MY_PARTY_MUTATION = gql`
  mutation DeleteMyPartyMutation($id: String!) {
    deleteMyParty(id: $id) {
      id
    }
  }
`

interface Props {
  myParty: NonNullable<FindMyPartyById['myParty']>
}

const MyParty = ({ myParty }: Props) => {
  const [deleteMyParty] = useMutation(DELETE_MY_PARTY_MUTATION, {
    onCompleted: () => {
      toast.success('MyParty deleted')
      navigate(routes.myParties())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMyPartyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete myParty ' + id + '?')) {
      deleteMyParty({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MyParty {myParty.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{myParty.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{myParty.name}</td>
            </tr>
            <tr>
              <th>Favorite</th>
              <td>{checkboxInputTag(myParty.favorite)}</td>
            </tr>
            <tr>
              <th>Memo</th>
              <td>{myParty.memo}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{myParty.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMyParty({ id: myParty.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(myParty.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MyParty
