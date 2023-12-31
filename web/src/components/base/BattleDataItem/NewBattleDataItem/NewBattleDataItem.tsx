import type { CreateBattleDataItemInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataItemForm from 'src/components/base/BattleDataItem/BattleDataItemForm'

const CREATE_BATTLE_DATA_ITEM_MUTATION = gql`
  mutation CreateBattleDataItemMutation($input: CreateBattleDataItemInput!) {
    createBattleDataItem(input: $input) {
      id
    }
  }
`

const NewBattleDataItem = () => {
  const [createBattleDataItem, { loading, error }] = useMutation(
    CREATE_BATTLE_DATA_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataItem created')
        navigate(routes.battleDataItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleDataItemInput) => {
    createBattleDataItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BattleDataItem</h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBattleDataItem
