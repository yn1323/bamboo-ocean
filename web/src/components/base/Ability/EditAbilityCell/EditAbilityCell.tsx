import type { EditAbilityById, UpdateAbilityInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AbilityForm from 'src/components/base/Ability/AbilityForm'

export const QUERY = gql`
  query EditAbilityById($id: String!) {
    ability: ability(id: $id) {
      id
      name
      detail
      battleIndex
    }
  }
`
const UPDATE_ABILITY_MUTATION = gql`
  mutation UpdateAbilityMutation($id: String!, $input: UpdateAbilityInput!) {
    updateAbility(id: $id, input: $input) {
      id
      name
      detail
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ ability }: CellSuccessProps<EditAbilityById>) => {
  const [updateAbility, { loading, error }] = useMutation(
    UPDATE_ABILITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Ability updated')
        navigate(routes.abilities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAbilityInput,
    id: EditAbilityById['ability']['id']
  ) => {
    updateAbility({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Ability {ability?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AbilityForm
          ability={ability}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
