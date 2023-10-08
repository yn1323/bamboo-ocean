import type {
  EditMyPokemonTagById,
  UpdateMyPokemonTagInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MyPokemonTagForm from 'src/components/MyPokemonTag/MyPokemonTagForm'

export const QUERY = gql`
  query EditMyPokemonTagById($id: String!) {
    myPokemonTag: myPokemonTag(id: $id) {
      id
      name
      favorite
      memo
      userId
    }
  }
`
const UPDATE_MY_POKEMON_TAG_MUTATION = gql`
  mutation UpdateMyPokemonTagMutation(
    $id: String!
    $input: UpdateMyPokemonTagInput!
  ) {
    updateMyPokemonTag(id: $id, input: $input) {
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
  myPokemonTag,
}: CellSuccessProps<EditMyPokemonTagById>) => {
  const [updateMyPokemonTag, { loading, error }] = useMutation(
    UPDATE_MY_POKEMON_TAG_MUTATION,
    {
      onCompleted: () => {
        toast.success('MyPokemonTag updated')
        navigate(routes.myPokemonTags())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateMyPokemonTagInput,
    id: EditMyPokemonTagById['myPokemonTag']['id']
  ) => {
    updateMyPokemonTag({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MyPokemonTag {myPokemonTag?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MyPokemonTagForm
          myPokemonTag={myPokemonTag}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
