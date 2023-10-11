import type { CreateAbilityInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AbilityForm from 'src/components/base/Ability/AbilityForm'

const CREATE_ABILITY_MUTATION = gql`
  mutation CreateAbilityMutation($input: CreateAbilityInput!) {
    createAbility(input: $input) {
      id
    }
  }
`

const NewAbility = () => {
  const [createAbility, { loading, error }] = useMutation(
    CREATE_ABILITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Ability created')
        navigate(routes.abilities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAbilityInput) => {
    createAbility({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Ability</h2>
      </header>
      <div className="rw-segment-main">
        <AbilityForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAbility
