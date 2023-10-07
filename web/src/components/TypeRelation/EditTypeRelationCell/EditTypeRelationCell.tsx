import type {
  EditTypeRelationById,
  UpdateTypeRelationInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TypeRelationForm from 'src/components/TypeRelation/TypeRelationForm'

export const QUERY = gql`
  query EditTypeRelationById($id: String!) {
    typeRelation: typeRelation(id: $id) {
      id
      fromId
      toId
      rate
    }
  }
`
const UPDATE_TYPE_RELATION_MUTATION = gql`
  mutation UpdateTypeRelationMutation(
    $id: String!
    $input: UpdateTypeRelationInput!
  ) {
    updateTypeRelation(id: $id, input: $input) {
      id
      fromId
      toId
      rate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  typeRelation,
}: CellSuccessProps<EditTypeRelationById>) => {
  const [updateTypeRelation, { loading, error }] = useMutation(
    UPDATE_TYPE_RELATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('TypeRelation updated')
        navigate(routes.typeRelations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTypeRelationInput,
    id: EditTypeRelationById['typeRelation']['id']
  ) => {
    updateTypeRelation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TypeRelation {typeRelation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TypeRelationForm
          typeRelation={typeRelation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
