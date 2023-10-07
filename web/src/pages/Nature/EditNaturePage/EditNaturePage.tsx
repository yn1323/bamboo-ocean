import EditNatureCell from 'src/components/Nature/EditNatureCell'

type NaturePageProps = {
  id: string
}

const EditNaturePage = ({ id }: NaturePageProps) => {
  return <EditNatureCell id={id} />
}

export default EditNaturePage
