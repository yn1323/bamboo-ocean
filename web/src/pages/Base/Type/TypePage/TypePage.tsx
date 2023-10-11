import TypeCell from 'src/components/base/Type/TypeCell'

type TypePageProps = {
  id: string
}

const TypePage = ({ id }: TypePageProps) => {
  return <TypeCell id={id} />
}

export default TypePage
