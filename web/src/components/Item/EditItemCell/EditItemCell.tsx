import type { EditItemById, UpdateItemInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ItemForm from 'src/components/Item/ItemForm'

export const QUERY = gql`
  query EditItemById($id: String!) {
    item: item(id: $id) {
      id
      name
      detail
      battleIndex
      base64Image
    }
  }
`
const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItemMutation($id: String!, $input: UpdateItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      name
      detail
      battleIndex
      base64Image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ item }: CellSuccessProps<EditItemById>) => {
  const [updateItem, { loading, error }] = useMutation(UPDATE_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('Item updated')
      navigate(routes.items())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateItemInput, id: EditItemById['item']['id']) => {
    updateItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Item {item?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ItemForm item={item} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
