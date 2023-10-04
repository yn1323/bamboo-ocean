import type { CreateBattleIndexInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleIndexForm from 'src/components/BattleIndex/BattleIndexForm'

const CREATE_BATTLE_INDEX_MUTATION = gql`
  mutation CreateBattleIndexMutation($input: CreateBattleIndexInput!) {
    createBattleIndex(input: $input) {
      id
    }
  }
`

const NewBattleIndex = () => {
  const [createBattleIndex, { loading, error }] = useMutation(
    CREATE_BATTLE_INDEX_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleIndex created')
        navigate(routes.battleIndices())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleIndexInput) => {
    createBattleIndex({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BattleIndex</h2>
      </header>
      <div className="rw-segment-main">
        <BattleIndexForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBattleIndex
