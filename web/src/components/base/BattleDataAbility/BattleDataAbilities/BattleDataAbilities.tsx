import type {
  DeleteBattleDataAbilityMutationVariables,
  FindBattleDataAbilities,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/BattleDataAbility/BattleDataAbilitiesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BATTLE_DATA_ABILITY_MUTATION = gql`
  mutation DeleteBattleDataAbilityMutation($id: String!) {
    deleteBattleDataAbility(id: $id) {
      id
    }
  }
`

const BattleDataAbilitiesList = ({
  battleDataAbilities,
}: FindBattleDataAbilities) => {
  const [deleteBattleDataAbility] = useMutation(
    DELETE_BATTLE_DATA_ABILITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataAbility deleted')
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
    id: DeleteBattleDataAbilityMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete battleDataAbility ' + id + '?')
    ) {
      deleteBattleDataAbility({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ability id</th>
            <th>Rate</th>
            <th>Battle data id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {battleDataAbilities.map((battleDataAbility) => (
            <tr key={battleDataAbility.id}>
              <td>{truncate(battleDataAbility.id)}</td>
              <td>{truncate(battleDataAbility.abilityId)}</td>
              <td>{truncate(battleDataAbility.rate)}</td>
              <td>{truncate(battleDataAbility.battleDataId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.battleDataAbility({ id: battleDataAbility.id })}
                    title={
                      'Show battleDataAbility ' +
                      battleDataAbility.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBattleDataAbility({
                      id: battleDataAbility.id,
                    })}
                    title={'Edit battleDataAbility ' + battleDataAbility.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete battleDataAbility ' + battleDataAbility.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(battleDataAbility.id)}
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

export default BattleDataAbilitiesList
