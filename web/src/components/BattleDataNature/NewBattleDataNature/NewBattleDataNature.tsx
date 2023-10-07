import type { CreateBattleDataNatureInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataNatureForm from 'src/components/BattleDataNature/BattleDataNatureForm'

const CREATE_BATTLE_DATA_NATURE_MUTATION = gql`
  mutation CreateBattleDataNatureMutation(
    $input: CreateBattleDataNatureInput!
  ) {
    createBattleDataNature(input: $input) {
      id
    }
  }
`

const NewBattleDataNature = () => {
  const [createBattleDataNature, { loading, error }] = useMutation(
    CREATE_BATTLE_DATA_NATURE_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataNature created')
        navigate(routes.battleDataNatures())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBattleDataNatureInput) => {
    createBattleDataNature({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New BattleDataNature
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataNatureForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBattleDataNature
