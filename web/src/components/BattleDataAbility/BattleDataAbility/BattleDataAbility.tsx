import type {
  DeleteBattleDataAbilityMutationVariables,
  FindBattleDataAbilityById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_BATTLE_DATA_ABILITY_MUTATION = gql`
  mutation DeleteBattleDataAbilityMutation($id: String!) {
    deleteBattleDataAbility(id: $id) {
      id
    }
  }
`

interface Props {
  battleDataAbility: NonNullable<FindBattleDataAbilityById['battleDataAbility']>
}

const BattleDataAbility = ({ battleDataAbility }: Props) => {
  const [deleteBattleDataAbility] = useMutation(
    DELETE_BATTLE_DATA_ABILITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataAbility deleted')
        navigate(routes.battleDataAbilities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleDataAbility {battleDataAbility.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleDataAbility.id}</td>
            </tr>
            <tr>
              <th>Ability id</th>
              <td>{battleDataAbility.abilityId}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{battleDataAbility.rate}</td>
            </tr>
            <tr>
              <th>Battle data id</th>
              <td>{battleDataAbility.battleDataId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleDataAbility({ id: battleDataAbility.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleDataAbility.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleDataAbility
