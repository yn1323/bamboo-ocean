import FormCell from 'src/components/base/Form/FormCell'

type FormPageProps = {
  id: string
}

const FormPage = ({ id }: FormPageProps) => {
  return <FormCell id={id} />
}

export default FormPage
