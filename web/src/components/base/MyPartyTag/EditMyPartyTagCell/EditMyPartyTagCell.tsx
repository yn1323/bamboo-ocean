import type { EditMyPartyTagById, UpdateMyPartyTagInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPartyTagForm from 'src/components/base/MyPartyTag/MyPartyTagForm'

export const QUERY = gql`
  query EditMyPartyTagById($id: String!) {
    myPartyTag: myPartyTag(id: $id) {
      id
      name
      favorite
      memo
      userId
    }
  }
`
const UPDATE_MY_PARTY_TAG_MUTATION = gql`
  mutation UpdateMyPartyTagMutation(
    $id: String!
    $input: UpdateMyPartyTagInput!
  ) {
    updateMyPartyTag(id: $id, input: $input) {
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

export const Success = ({
  myPartyTag,
}: CellSuccessProps<EditMyPartyTagById>) => {
  const [updateMyPartyTag, { loading, error }] = useMutation(
    UPDATE_MY_PARTY_TAG_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyPartyTag updated')
        navigate(routes.myPartyTags())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateMyPartyTagInput,
    id: EditMyPartyTagById['myPartyTag']['id']
  ) => {
    updateMyPartyTag({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MyPartyTag {myPartyTag?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MyPartyTagForm
          myPartyTag={myPartyTag}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
