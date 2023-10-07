import type { DeleteTypeMutationVariables, FindTypeById } from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_TYPE_MUTATION = gql`
  mutation DeleteTypeMutation($id: String!) {
    deleteType(id: $id) {
      id
    }
  }
`

interface Props {
  type: NonNullable<FindTypeById['type']>
}

const Type = ({ type }: Props) => {
  const [deleteType] = useMutation(DELETE_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('Type deleted')
      navigate(routes.types())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTypeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete type ' + id + '?')) {
      deleteType({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Type {type.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{type.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{type.name}</td>
            </tr>
            <tr>
              <th>Battle index</th>
              <td>{type.battleIndex}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editType({ id: type.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(type.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Type
