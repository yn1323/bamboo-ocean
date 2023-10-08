import type { CreateBattleDataInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataForm from 'src/components/base/BattleData/BattleDataForm'

const CREATE_BATTLE_DATA_MUTATION = gql`
  mutation CreateBattleDataMutation($input: CreateBattleDataInput!) {
    createBattleData(input: $input) {
      id
    }
  }
`

const NewBattleData = () => {
  const [createBattleData, { loading, error }] = useMutation(
    CREATE_BATTLE_DATA_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleData created')
        navigate(routes.battleDatas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleDataInput) => {
    createBattleData({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BattleData</h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBattleData
