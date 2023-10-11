import type { DeleteMoveMutationVariables, FindMoves } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/Move/MovesCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_MOVE_MUTATION = gql`
  mutation DeleteMoveMutation($id: String!) {
    deleteMove(id: $id) {
      id
    }
  }
`

const MovesList = ({ moves }: FindMoves) => {
  const [deleteMove] = useMutation(DELETE_MOVE_MUTATION, {
    onCompleted: () => {
      toast.success('Move deleted')
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

  const onDeleteClick = (id: DeleteMoveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete move ' + id + '?')) {
      deleteMove({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Target</th>
            <th>Detail</th>
            <th>Name</th>
            <th>Type id</th>
            <th>Attack type id</th>
            <th>Power</th>
            <th>Accuracy</th>
            <th>Pp</th>
            <th>Is touchable</th>
            <th>Enable protect</th>
            <th>Battle index</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move) => (
            <tr key={move.id}>
              <td>{truncate(move.id)}</td>
              <td>{truncate(move.target)}</td>
              <td>{truncate(move.detail)}</td>
              <td>{truncate(move.name)}</td>
              <td>{truncate(move.typeId)}</td>
              <td>{truncate(move.attackTypeId)}</td>
              <td>{truncate(move.power)}</td>
              <td>{truncate(move.accuracy)}</td>
              <td>{truncate(move.pp)}</td>
              <td>{checkboxInputTag(move.isTouchable)}</td>
              <td>{checkboxInputTag(move.enableProtect)}</td>
              <td>{truncate(move.battleIndex)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.move({ id: move.id })}
                    title={'Show move ' + move.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMove({ id: move.id })}
                    title={'Edit move ' + move.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete move ' + move.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(move.id)}
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

export default MovesList
