import type { CreateTypeRelationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TypeRelationForm from 'src/components/base/TypeRelation/TypeRelationForm'

const CREATE_TYPE_RELATION_MUTATION = gql`
  mutation CreateTypeRelationMutation($input: CreateTypeRelationInput!) {
    createTypeRelation(input: $input) {
      id
    }
  }
`

const NewTypeRelation = () => {
  const [createTypeRelation, { loading, error }] = useMutation(
    CREATE_TYPE_RELATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('TypeRelation created')
        navigate(routes.typeRelations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTypeRelationInput) => {
    createTypeRelation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TypeRelation</h2>
      </header>
      <div className="rw-segment-main">
        <TypeRelationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTypeRelation
