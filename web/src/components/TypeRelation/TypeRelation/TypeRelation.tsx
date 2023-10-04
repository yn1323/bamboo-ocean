import type {
  DeleteTypeRelationMutationVariables,
  FindTypeRelationById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_TYPE_RELATION_MUTATION = gql`
  mutation DeleteTypeRelationMutation($id: String!) {
    deleteTypeRelation(id: $id) {
      id
    }
  }
`

interface Props {
  typeRelation: NonNullable<FindTypeRelationById['typeRelation']>
}

const TypeRelation = ({ typeRelation }: Props) => {
  const [deleteTypeRelation] = useMutation(DELETE_TYPE_RELATION_MUTATION, {
    onCompleted: () => {
      toast.success('TypeRelation deleted')
      navigate(routes.typeRelations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTypeRelationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete typeRelation ' + id + '?')) {
      deleteTypeRelation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TypeRelation {typeRelation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{typeRelation.id}</td>
            </tr>
            <tr>
              <th>From id</th>
              <td>{typeRelation.fromId}</td>
            </tr>
            <tr>
              <th>To id</th>
              <td>{typeRelation.toId}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{typeRelation.rate}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTypeRelation({ id: typeRelation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(typeRelation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TypeRelation
