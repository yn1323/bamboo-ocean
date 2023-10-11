import type { EditBattleIndexById, UpdateBattleIndexInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleIndexForm from 'src/components/base/BattleIndex/BattleIndexForm'

export const QUERY = gql`
  query EditBattleIndexById($id: String!) {
    battleIndex: battleIndex(id: $id) {
      id
      capturedAt
      startAt
      endAt
      name
    }
  }
`
const UPDATE_BATTLE_INDEX_MUTATION = gql`
  mutation UpdateBattleIndexMutation(
    $id: String!
    $input: UpdateBattleIndexInput!
  ) {
    updateBattleIndex(id: $id, input: $input) {
      id
      capturedAt
      startAt
      endAt
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleIndex,
}: CellSuccessProps<EditBattleIndexById>) => {
  const [updateBattleIndex, { loading, error }] = useMutation(
    UPDATE_BATTLE_INDEX_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleIndex updated')
        navigate(routes.battleIndices())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleIndexInput,
    id: EditBattleIndexById['battleIndex']['id']
  ) => {
    updateBattleIndex({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleIndex {battleIndex?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleIndexForm
          battleIndex={battleIndex}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
