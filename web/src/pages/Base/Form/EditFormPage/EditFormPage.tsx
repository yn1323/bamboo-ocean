import EditFormCell from 'src/components/base/Form/EditFormCell'

type FormPageProps = {
  id: string
}

const EditFormPage = ({ id }: FormPageProps) => {
  return <EditFormCell id={id} />
}

export default EditFormPage
