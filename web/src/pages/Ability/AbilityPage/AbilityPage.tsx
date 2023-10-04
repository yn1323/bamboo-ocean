import AbilityCell from 'src/components/Ability/AbilityCell'

type AbilityPageProps = {
  id: string
}

const AbilityPage = ({ id }: AbilityPageProps) => {
  return <AbilityCell id={id} />
}

export default AbilityPage
