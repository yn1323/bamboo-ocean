import type { EditNatureById, UpdateNatureInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NatureForm from 'src/components/base/Nature/NatureForm'

export const QUERY = gql`
  query EditNatureById($id: String!) {
    nature: nature(id: $id) {
      id
      name
      battleIndex
      increase
      decrease
    }
  }
`
const UPDATE_NATURE_MUTATION = gql`
  mutation UpdateNatureMutation($id: String!, $input: UpdateNatureInput!) {
    updateNature(id: $id, input: $input) {
      id
      name
      battleIndex
      increase
      decrease
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nature }: CellSuccessProps<EditNatureById>) => {
  const [updateNature, { loading, error }] = useMutation(
    UPDATE_NATURE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Nature updated')
        navigate(routes.natures())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateNatureInput,
    id: EditNatureById['nature']['id']
  ) => {
    updateNature({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Nature {nature?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <NatureForm
          nature={nature}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
