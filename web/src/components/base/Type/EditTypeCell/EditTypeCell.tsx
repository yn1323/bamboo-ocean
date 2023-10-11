import type { EditTypeById, UpdateTypeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TypeForm from 'src/components/base/Type/TypeForm'

export const QUERY = gql`
  query EditTypeById($id: String!) {
    type: type(id: $id) {
      id
      name
      battleIndex
    }
  }
`
const UPDATE_TYPE_MUTATION = gql`
  mutation UpdateTypeMutation($id: String!, $input: UpdateTypeInput!) {
    updateType(id: $id, input: $input) {
      id
      name
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ type }: CellSuccessProps<EditTypeById>) => {
  const [updateType, { loading, error }] = useMutation(UPDATE_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('Type updated')
      navigate(routes.types())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateTypeInput, id: EditTypeById['type']['id']) => {
    updateType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Type {type?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TypeForm type={type} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
