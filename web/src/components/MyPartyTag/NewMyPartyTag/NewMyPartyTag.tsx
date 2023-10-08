import type { CreateMyPartyTagInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPartyTagForm from 'src/components/MyPartyTag/MyPartyTagForm'

const CREATE_MY_PARTY_TAG_MUTATION = gql`
  mutation CreateMyPartyTagMutation($input: CreateMyPartyTagInput!) {
    createMyPartyTag(input: $input) {
      id
    }
  }
`

const NewMyPartyTag = () => {
  const [createMyPartyTag, { loading, error }] = useMutation(
    CREATE_MY_PARTY_TAG_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyPartyTag created')
        navigate(routes.myPartyTags())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateMyPartyTagInput) => {
    createMyPartyTag({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MyPartyTag</h2>
      </header>
      <div className="rw-segment-main">
        <MyPartyTagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMyPartyTag
