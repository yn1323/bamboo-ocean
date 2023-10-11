import type { CreateMyPokemonTagInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPokemonTagForm from 'src/components/base/MyPokemonTag/MyPokemonTagForm'

const CREATE_MY_POKEMON_TAG_MUTATION = gql`
  mutation CreateMyPokemonTagMutation($input: CreateMyPokemonTagInput!) {
    createMyPokemonTag(input: $input) {
      id
    }
  }
`

const NewMyPokemonTag = () => {
  const [createMyPokemonTag, { loading, error }] = useMutation(
    CREATE_MY_POKEMON_TAG_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyPokemonTag created')
        navigate(routes.myPokemonTags())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateMyPokemonTagInput) => {
    createMyPokemonTag({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MyPokemonTag</h2>
      </header>
      <div className="rw-segment-main">
        <MyPokemonTagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMyPokemonTag
