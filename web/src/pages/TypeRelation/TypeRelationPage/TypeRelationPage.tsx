import TypeRelationCell from 'src/components/TypeRelation/TypeRelationCell'

type TypeRelationPageProps = {
  id: string
}

const TypeRelationPage = ({ id }: TypeRelationPageProps) => {
  return <TypeRelationCell id={id} />
}

export default TypeRelationPage
