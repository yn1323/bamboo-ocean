import type { FindFormById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Form from 'src/components/Form/Form'

export const QUERY = gql`
  query FindFormById($id: String!) {
    form: form(id: $id) {
      id
      no
      formType
      formType2
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Form not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ form }: CellSuccessProps<FindFormById>) => {
  return <Form form={form} />
}
