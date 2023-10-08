import type {
  EditBattleDataAbilityById,
  UpdateBattleDataAbilityInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataAbilityForm from 'src/components/base/BattleDataAbility/BattleDataAbilityForm'

export const QUERY = gql`
  query EditBattleDataAbilityById($id: String!) {
    battleDataAbility: battleDataAbility(id: $id) {
      id
      abilityId
      rate
      battleDataId
    }
  }
`
const UPDATE_BATTLE_DATA_ABILITY_MUTATION = gql`
  mutation UpdateBattleDataAbilityMutation(
    $id: String!
    $input: UpdateBattleDataAbilityInput!
  ) {
    updateBattleDataAbility(id: $id, input: $input) {
      id
      abilityId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataAbility,
}: CellSuccessProps<EditBattleDataAbilityById>) => {
  const [updateBattleDataAbility, { loading, error }] = useMutation(
    UPDATE_BATTLE_DATA_ABILITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataAbility updated')
        navigate(routes.battleDataAbilities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleDataAbilityInput,
    id: EditBattleDataAbilityById['battleDataAbility']['id']
  ) => {
    updateBattleDataAbility({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleDataAbility {battleDataAbility?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataAbilityForm
          battleDataAbility={battleDataAbility}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
