import EditItemCell from 'src/components/Item/EditItemCell'

type ItemPageProps = {
  id: string
}

const EditItemPage = ({ id }: ItemPageProps) => {
  return <EditItemCell id={id} />
}

export default EditItemPage
