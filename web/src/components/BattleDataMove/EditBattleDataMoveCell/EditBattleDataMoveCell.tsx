import type {
  EditBattleDataMoveById,
  UpdateBattleDataMoveInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataMoveForm from 'src/components/BattleDataMove/BattleDataMoveForm'

export const QUERY = gql`
  query EditBattleDataMoveById($id: String!) {
    battleDataMove: battleDataMove(id: $id) {
      id
      moveId
      rate
      battleDataId
    }
  }
`
const UPDATE_BATTLE_DATA_MOVE_MUTATION = gql`
  mutation UpdateBattleDataMoveMutation(
    $id: String!
    $input: UpdateBattleDataMoveInput!
  ) {
    updateBattleDataMove(id: $id, input: $input) {
      id
      moveId
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
  battleDataMove,
}: CellSuccessProps<EditBattleDataMoveById>) => {
  const [updateBattleDataMove, { loading, error }] = useMutation(
    UPDATE_BATTLE_DATA_MOVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataMove updated')
        navigate(routes.battleDataMoves())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleDataMoveInput,
    id: EditBattleDataMoveById['battleDataMove']['id']
  ) => {
    updateBattleDataMove({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleDataMove {battleDataMove?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataMoveForm
          battleDataMove={battleDataMove}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
