import type { CreateMyPartyInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPartyForm from 'src/components/MyParty/MyPartyForm'

const CREATE_MY_PARTY_MUTATION = gql`
  mutation CreateMyPartyMutation($input: CreateMyPartyInput!) {
    createMyParty(input: $input) {
      id
    }
  }
`

const NewMyParty = () => {
  const [createMyParty, { loading, error }] = useMutation(
    CREATE_MY_PARTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyParty created')
        navigate(routes.myParties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateMyPartyInput) => {
    createMyParty({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MyParty</h2>
      </header>
      <div className="rw-segment-main">
        <MyPartyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMyParty
