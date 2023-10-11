import type { EditMyPartyById, UpdateMyPartyInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPartyForm from 'src/components/base/MyParty/MyPartyForm'

export const QUERY = gql`
  query EditMyPartyById($id: String!) {
    myParty: myParty(id: $id) {
      id
      name
      favorite
      memo
      userId
    }
  }
`
const UPDATE_MY_PARTY_MUTATION = gql`
  mutation UpdateMyPartyMutation($id: String!, $input: UpdateMyPartyInput!) {
    updateMyParty(id: $id, input: $input) {
      id
      name
      favorite
      memo
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myParty }: CellSuccessProps<EditMyPartyById>) => {
  const [updateMyParty, { loading, error }] = useMutation(
    UPDATE_MY_PARTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyParty updated')
        navigate(routes.myParties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateMyPartyInput,
    id: EditMyPartyById['myParty']['id']
  ) => {
    updateMyParty({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MyParty {myParty?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MyPartyForm
          myParty={myParty}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
