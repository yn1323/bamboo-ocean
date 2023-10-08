import type {
  EditBattleDataTerastalById,
  UpdateBattleDataTerastalInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataTerastalForm from 'src/components/base/BattleDataTerastal/BattleDataTerastalForm'

export const QUERY = gql`
  query EditBattleDataTerastalById($id: String!) {
    battleDataTerastal: battleDataTerastal(id: $id) {
      id
      typeId
      rate
      battleDataId
    }
  }
`
const UPDATE_BATTLE_DATA_TERASTAL_MUTATION = gql`
  mutation UpdateBattleDataTerastalMutation(
    $id: String!
    $input: UpdateBattleDataTerastalInput!
  ) {
    updateBattleDataTerastal(id: $id, input: $input) {
      id
      typeId
      rate
      battleDataId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleDataTerastal,
}: CellSuccessProps<EditBattleDataTerastalById>) => {
  const [updateBattleDataTerastal, { loading, error }] = useMutation(
    UPDATE_BATTLE_DATA_TERASTAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataTerastal updated')
        navigate(routes.battleDataTerastals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleDataTerastalInput,
    id: EditBattleDataTerastalById['battleDataTerastal']['id']
  ) => {
    updateBattleDataTerastal({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleDataTerastal {battleDataTerastal?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataTerastalForm
          battleDataTerastal={battleDataTerastal}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
