import type { CreateBattleDataAbilityInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataAbilityForm from 'src/components/base/BattleDataAbility/BattleDataAbilityForm'

const CREATE_BATTLE_DATA_ABILITY_MUTATION = gql`
  mutation CreateBattleDataAbilityMutation(
    $input: CreateBattleDataAbilityInput!
  ) {
    createBattleDataAbility(input: $input) {
      id
    }
  }
`

const NewBattleDataAbility = () => {
  const [createBattleDataAbility, { loading, error }] = useMutation(
    CREATE_BATTLE_DATA_ABILITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataAbility created')
        navigate(routes.battleDataAbilities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleDataAbilityInput) => {
    createBattleDataAbility({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New BattleDataAbility
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataAbilityForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewBattleDataAbility
