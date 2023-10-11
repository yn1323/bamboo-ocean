import EditNatureCell from 'src/components/base/Nature/EditNatureCell'

type NaturePageProps = {
  id: string
}

const EditNaturePage = ({ id }: NaturePageProps) => {
  return <EditNatureCell id={id} />
}

export default EditNaturePage
