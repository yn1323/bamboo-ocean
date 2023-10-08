import EditTypeRelationCell from 'src/components/base/TypeRelation/EditTypeRelationCell'

type TypeRelationPageProps = {
  id: string
}

const EditTypeRelationPage = ({ id }: TypeRelationPageProps) => {
  return <EditTypeRelationCell id={id} />
}

export default EditTypeRelationPage
