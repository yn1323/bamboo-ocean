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
            <th>isContact</th>
            <th>isQuick</th>
            <th>isDelay</th>
            <th>isChangeable</th>
            <th>isMultipleAttack</th>
            <th>isMustCritical</th>
            <th>isPunch</th>
            <th>isSound</th>
            <th>isPowder</th>
            <th>isWave</th>
            <th>isJaw</th>
            <th>isBullet</th>
            <th>isDance</th>
            <th>isWind</th>
            <th>isCut</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move) => (
            <tr key={move.id}>
              <td>{truncate(move.id)}</td>
              <td>{truncate(move.detail)}</td>
              <td>{truncate(move.name)}</td>
              <td>{truncate(move.typeId)}</td>
              <td>{truncate(move.attackTypeId)}</td>
              <td>{truncate(move.power)}</td>
              <td>{truncate(move.accuracy)}</td>
              <td>{truncate(move.pp)}</td>
              <td>{checkboxInputTag(move.isContact)}</td>
              <td>{checkboxInputTag(move.isQuick)}</td>
              <td>{checkboxInputTag(move.isDelay)}</td>
              <td>{checkboxInputTag(move.isChangeable)}</td>
              <td>{checkboxInputTag(move.isMultipleAttack)}</td>
              <td>{checkboxInputTag(move.isMustCritical)}</td>
              <td>{checkboxInputTag(move.isPunch)}</td>
              <td>{checkboxInputTag(move.isSound)}</td>
              <td>{checkboxInputTag(move.isPowder)}</td>
              <td>{checkboxInputTag(move.isWave)}</td>
              <td>{checkboxInputTag(move.isJaw)}</td>
              <td>{checkboxInputTag(move.isBullet)}</td>
              <td>{checkboxInputTag(move.isDance)}</td>
              <td>{checkboxInputTag(move.isWind)}</td>
              <td>{checkboxInputTag(move.isCut)}</td>
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
