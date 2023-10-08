import type { CreateNatureInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NatureForm from 'src/components/base/Nature/NatureForm'

const CREATE_NATURE_MUTATION = gql`
  mutation CreateNatureMutation($input: CreateNatureInput!) {
    createNature(input: $input) {
      id
    }
  }
`

const NewNature = () => {
  const [createNature, { loading, error }] = useMutation(
    CREATE_NATURE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Nature created')
        navigate(routes.natures())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateNatureInput) => {
    createNature({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Nature</h2>
      </header>
      <div className="rw-segment-main">
        <NatureForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNature
