import type { EditFormById, UpdateFormInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FormForm from 'src/components/base/Form/FormForm'

export const QUERY = gql`
  query EditFormById($id: String!) {
    form: form(id: $id) {
      id
      no
      formType
      formType2
      name
    }
  }
`
const UPDATE_FORM_MUTATION = gql`
  mutation UpdateFormMutation($id: String!, $input: UpdateFormInput!) {
    updateForm(id: $id, input: $input) {
      id
      no
      formType
      formType2
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ form }: CellSuccessProps<EditFormById>) => {
  const [updateForm, { loading, error }] = useMutation(UPDATE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form updated')
      navigate(routes.forms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateFormInput, id: EditFormById['form']['id']) => {
    updateForm({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Form {form?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FormForm form={form} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
