import type { CreateBattleDataTerastalInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataTerastalForm from 'src/components/BattleDataTerastal/BattleDataTerastalForm'

const CREATE_BATTLE_DATA_TERASTAL_MUTATION = gql`
  mutation CreateBattleDataTerastalMutation(
    $input: CreateBattleDataTerastalInput!
  ) {
    createBattleDataTerastal(input: $input) {
      id
    }
  }
`

const NewBattleDataTerastal = () => {
  const [createBattleDataTerastal, { loading, error }] = useMutation(
    CREATE_BATTLE_DATA_TERASTAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataTerastal created')
        navigate(routes.battleDataTerastals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleDataTerastalInput) => {
    createBattleDataTerastal({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New BattleDataTerastal
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataTerastalForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewBattleDataTerastal
