import EditFormCell from 'src/components/Form/EditFormCell'

type FormPageProps = {
  id: string
}

const EditFormPage = ({ id }: FormPageProps) => {
  return <EditFormCell id={id} />
}

export default EditFormPage
