import type {
  DeleteNatureMutationVariables,
  FindNatureById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_NATURE_MUTATION = gql`
  mutation DeleteNatureMutation($id: String!) {
    deleteNature(id: $id) {
      id
    }
  }
`

interface Props {
  nature: NonNullable<FindNatureById['nature']>
}

const Nature = ({ nature }: Props) => {
  const [deleteNature] = useMutation(DELETE_NATURE_MUTATION, {
    onCompleted: () => {
      toast.success('Nature deleted')
      navigate(routes.natures())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteNatureMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete nature ' + id + '?')) {
      deleteNature({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Nature {nature.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{nature.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{nature.name}</td>
            </tr>
            <tr>
              <th>Battle index</th>
              <td>{nature.battleIndex}</td>
            </tr>
            <tr>
              <th>Increase</th>
              <td>{nature.increase}</td>
            </tr>
            <tr>
              <th>Decrease</th>
              <td>{nature.decrease}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNature({ id: nature.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(nature.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Nature
