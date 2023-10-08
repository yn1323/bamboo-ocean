import type {
  EditBattleDataNatureById,
  UpdateBattleDataNatureInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataNatureForm from 'src/components/base/BattleDataNature/BattleDataNatureForm'

export const QUERY = gql`
  query EditBattleDataNatureById($id: String!) {
    battleDataNature: battleDataNature(id: $id) {
      id
      natureId
      rate
      battleDataId
    }
  }
`
const UPDATE_BATTLE_DATA_NATURE_MUTATION = gql`
  mutation UpdateBattleDataNatureMutation(
    $id: String!
    $input: UpdateBattleDataNatureInput!
  ) {
    updateBattleDataNature(id: $id, input: $input) {
      id
      natureId
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
  battleDataNature,
}: CellSuccessProps<EditBattleDataNatureById>) => {
  const [updateBattleDataNature, { loading, error }] = useMutation(
    UPDATE_BATTLE_DATA_NATURE_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataNature updated')
        navigate(routes.battleDataNatures())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleDataNatureInput,
    id: EditBattleDataNatureById['battleDataNature']['id']
  ) => {
    updateBattleDataNature({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleDataNature {battleDataNature?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataNatureForm
          battleDataNature={battleDataNature}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
