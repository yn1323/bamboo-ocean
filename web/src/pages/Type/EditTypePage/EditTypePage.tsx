import EditTypeCell from 'src/components/Type/EditTypeCell'

type TypePageProps = {
  id: string
}

const EditTypePage = ({ id }: TypePageProps) => {
  return <EditTypeCell id={id} />
}

export default EditTypePage
