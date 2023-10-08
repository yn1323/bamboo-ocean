import type {
  DeleteTypeRelationMutationVariables,
  FindTypeRelations,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/TypeRelation/TypeRelationsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_TYPE_RELATION_MUTATION = gql`
  mutation DeleteTypeRelationMutation($id: String!) {
    deleteTypeRelation(id: $id) {
      id
    }
  }
`

const TypeRelationsList = ({ typeRelations }: FindTypeRelations) => {
  const [deleteTypeRelation] = useMutation(DELETE_TYPE_RELATION_MUTATION, {
    onCompleted: () => {
      toast.success('TypeRelation deleted')
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

  const onDeleteClick = (id: DeleteTypeRelationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete typeRelation ' + id + '?')) {
      deleteTypeRelation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>From id</th>
            <th>To id</th>
            <th>Rate</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {typeRelations.map((typeRelation) => (
            <tr key={typeRelation.id}>
              <td>{truncate(typeRelation.id)}</td>
              <td>{truncate(typeRelation.fromId)}</td>
              <td>{truncate(typeRelation.toId)}</td>
              <td>{truncate(typeRelation.rate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.typeRelation({ id: typeRelation.id })}
                    title={'Show typeRelation ' + typeRelation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTypeRelation({ id: typeRelation.id })}
                    title={'Edit typeRelation ' + typeRelation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete typeRelation ' + typeRelation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(typeRelation.id)}
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

export default TypeRelationsList
