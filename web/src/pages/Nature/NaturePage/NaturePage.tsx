import NatureCell from 'src/components/Nature/NatureCell'

type NaturePageProps = {
  id: string
}

const NaturePage = ({ id }: NaturePageProps) => {
  return <NatureCell id={id} />
}

export default NaturePage
