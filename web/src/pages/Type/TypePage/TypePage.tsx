import TypeCell from 'src/components/Type/TypeCell'

type TypePageProps = {
  id: string
}

const TypePage = ({ id }: TypePageProps) => {
  return <TypeCell id={id} />
}

export default TypePage
