import type {
  DeleteBattleDataNatureMutationVariables,
  FindBattleDataNatures,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/BattleDataNature/BattleDataNaturesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BATTLE_DATA_NATURE_MUTATION = gql`
  mutation DeleteBattleDataNatureMutation($id: String!) {
    deleteBattleDataNature(id: $id) {
      id
    }
  }
`

const BattleDataNaturesList = ({
  battleDataNatures,
}: FindBattleDataNatures) => {
  const [deleteBattleDataNature] = useMutation(
    DELETE_BATTLE_DATA_NATURE_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataNature deleted')
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

  const onDeleteClick = (id: DeleteBattleDataNatureMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete battleDataNature ' + id + '?')
    ) {
      deleteBattleDataNature({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nature id</th>
            <th>Rate</th>
            <th>Battle data id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleDataNatures.map((battleDataNature) => (
            <tr key={battleDataNature.id}>
              <td>{truncate(battleDataNature.id)}</td>
              <td>{truncate(battleDataNature.natureId)}</td>
              <td>{truncate(battleDataNature.rate)}</td>
              <td>{truncate(battleDataNature.battleDataId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleDataNature({ id: battleDataNature.id })}
                    title={
                      'Show battleDataNature ' + battleDataNature.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleDataNature({
                      id: battleDataNature.id,
                    })}
                    title={'Edit battleDataNature ' + battleDataNature.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleDataNature ' + battleDataNature.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleDataNature.id)}
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

export default BattleDataNaturesList
