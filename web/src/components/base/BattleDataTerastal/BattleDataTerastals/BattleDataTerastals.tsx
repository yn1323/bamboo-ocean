import type {
  DeleteBattleDataTerastalMutationVariables,
  FindBattleDataTerastals,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/BattleDataTerastal/BattleDataTerastalsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BATTLE_DATA_TERASTAL_MUTATION = gql`
  mutation DeleteBattleDataTerastalMutation($id: String!) {
    deleteBattleDataTerastal(id: $id) {
      id
    }
  }
`

const BattleDataTerastalsList = ({
  battleDataTerastals,
}: FindBattleDataTerastals) => {
  const [deleteBattleDataTerastal] = useMutation(
    DELETE_BATTLE_DATA_TERASTAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataTerastal deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (
    id: DeleteBattleDataTerastalMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete battleDataTerastal ' + id + '?')
    ) {
      deleteBattleDataTerastal({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type id</th>
            <th>Rate</th>
            <th>Battle data id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleDataTerastals.map((battleDataTerastal) => (
            <tr key={battleDataTerastal.id}>
              <td>{truncate(battleDataTerastal.id)}</td>
              <td>{truncate(battleDataTerastal.typeId)}</td>
              <td>{truncate(battleDataTerastal.rate)}</td>
              <td>{truncate(battleDataTerastal.battleDataId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleDataTerastal({
                      id: battleDataTerastal.id,
                    })}
                    title={
                      'Show battleDataTerastal ' +
                      battleDataTerastal.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleDataTerastal({
                      id: battleDataTerastal.id,
                    })}
                    title={'Edit battleDataTerastal ' + battleDataTerastal.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleDataTerastal ' + battleDataTerastal.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleDataTerastal.id)}
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

export default BattleDataTerastalsList
