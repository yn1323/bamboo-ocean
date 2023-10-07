import type { CreateMoveInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MoveForm from 'src/components/Move/MoveForm'

const CREATE_MOVE_MUTATION = gql`
  mutation CreateMoveMutation($input: CreateMoveInput!) {
    createMove(input: $input) {
      id
    }
  }
`

const NewMove = () => {
  const [createMove, { loading, error }] = useMutation(CREATE_MOVE_MUTATION, {
    onCompleted: () => {
      toast.success('Move created')
      navigate(routes.moves())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateMoveInput) => {
    createMove({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Move</h2>
      </header>
      <div className="rw-segment-main">
        <MoveForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMove
