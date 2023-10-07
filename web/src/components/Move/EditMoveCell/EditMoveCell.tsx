import type { EditMoveById, UpdateMoveInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MoveForm from 'src/components/Move/MoveForm'

export const QUERY = gql`
  query EditMoveById($id: String!) {
    move: move(id: $id) {
      id
      target
      detail
      name
      typeId
      attackTypeId
      power
      accuracy
      pp
      isTouchable
      enableProtect
      battleIndex
    }
  }
`
const UPDATE_MOVE_MUTATION = gql`
  mutation UpdateMoveMutation($id: String!, $input: UpdateMoveInput!) {
    updateMove(id: $id, input: $input) {
      id
      target
      detail
      name
      typeId
      attackTypeId
      power
      accuracy
      pp
      isTouchable
      enableProtect
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ move }: CellSuccessProps<EditMoveById>) => {
  const [updateMove, { loading, error }] = useMutation(UPDATE_MOVE_MUTATION, {
    onCompleted: () => {
      toast.success('Move updated')
      navigate(routes.moves())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateMoveInput, id: EditMoveById['move']['id']) => {
    updateMove({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Move {move?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MoveForm move={move} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
