import type { CreateAttackTypeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AttackTypeForm from 'src/components/AttackType/AttackTypeForm'

const CREATE_ATTACK_TYPE_MUTATION = gql`
  mutation CreateAttackTypeMutation($input: CreateAttackTypeInput!) {
    createAttackType(input: $input) {
      id
    }
  }
`

const NewAttackType = () => {
  const [createAttackType, { loading, error }] = useMutation(
    CREATE_ATTACK_TYPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AttackType created')
        navigate(routes.attackTypes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAttackTypeInput) => {
    createAttackType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AttackType</h2>
      </header>
      <div className="rw-segment-main">
        <AttackTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAttackType
