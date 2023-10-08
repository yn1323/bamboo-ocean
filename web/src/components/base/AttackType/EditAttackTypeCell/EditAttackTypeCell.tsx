import type { EditAttackTypeById, UpdateAttackTypeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AttackTypeForm from 'src/components/base/AttackType/AttackTypeForm'

export const QUERY = gql`
  query EditAttackTypeById($id: String!) {
    attackType: attackType(id: $id) {
      id
      name
    }
  }
`
const UPDATE_ATTACK_TYPE_MUTATION = gql`
  mutation UpdateAttackTypeMutation(
    $id: String!
    $input: UpdateAttackTypeInput!
  ) {
    updateAttackType(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  attackType,
}: CellSuccessProps<EditAttackTypeById>) => {
  const [updateAttackType, { loading, error }] = useMutation(
    UPDATE_ATTACK_TYPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AttackType updated')
        navigate(routes.attackTypes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAttackTypeInput,
    id: EditAttackTypeById['attackType']['id']
  ) => {
    updateAttackType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AttackType {attackType?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AttackTypeForm
          attackType={attackType}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
