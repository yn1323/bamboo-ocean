import type { CreateBattleDataMoveInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataMoveForm from 'src/components/base/BattleDataMove/BattleDataMoveForm'

const CREATE_BATTLE_DATA_MOVE_MUTATION = gql`
  mutation CreateBattleDataMoveMutation($input: CreateBattleDataMoveInput!) {
    createBattleDataMove(input: $input) {
      id
    }
  }
`

const NewBattleDataMove = () => {
  const [createBattleDataMove, { loading, error }] = useMutation(
    CREATE_BATTLE_DATA_MOVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataMove created')
        navigate(routes.battleDataMoves())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleDataMoveInput) => {
    createBattleDataMove({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BattleDataMove</h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataMoveForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBattleDataMove
