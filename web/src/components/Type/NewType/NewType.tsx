import type { CreateTypeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TypeForm from 'src/components/Type/TypeForm'

const CREATE_TYPE_MUTATION = gql`
  mutation CreateTypeMutation($input: CreateTypeInput!) {
    createType(input: $input) {
      id
    }
  }
`

const NewType = () => {
  const [createType, { loading, error }] = useMutation(CREATE_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('Type created')
      navigate(routes.types())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateTypeInput) => {
    createType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Type</h2>
      </header>
      <div className="rw-segment-main">
        <TypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewType
