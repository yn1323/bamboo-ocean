import FormCell from 'src/components/Form/FormCell'

type FormPageProps = {
  id: string
}

const FormPage = ({ id }: FormPageProps) => {
  return <FormCell id={id} />
}

export default FormPage
