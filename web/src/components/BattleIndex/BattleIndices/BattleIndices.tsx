import type {
  DeleteBattleIndexMutationVariables,
  FindBattleIndices,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/BattleIndex/BattleIndicesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_BATTLE_INDEX_MUTATION = gql`
  mutation DeleteBattleIndexMutation($id: String!) {
    deleteBattleIndex(id: $id) {
      id
    }
  }
`

const BattleIndicesList = ({ battleIndices }: FindBattleIndices) => {
  const [deleteBattleIndex] = useMutation(DELETE_BATTLE_INDEX_MUTATION, {
    onCompleted: () => {
      toast.success('BattleIndex deleted')
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

  const onDeleteClick = (id: DeleteBattleIndexMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleIndex ' + id + '?')) {
      deleteBattleIndex({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Captured at</th>
            <th>Start at</th>
            <th>End at</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleIndices.map((battleIndex) => (
            <tr key={battleIndex.id}>
              <td>{truncate(battleIndex.id)}</td>
              <td>{timeTag(battleIndex.capturedAt)}</td>
              <td>{timeTag(battleIndex.startAt)}</td>
              <td>{timeTag(battleIndex.endAt)}</td>
              <td>{truncate(battleIndex.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleIndex({ id: battleIndex.id })}
                    title={'Show battleIndex ' + battleIndex.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleIndex({ id: battleIndex.id })}
                    title={'Edit battleIndex ' + battleIndex.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleIndex ' + battleIndex.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleIndex.id)}
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

export default BattleIndicesList
