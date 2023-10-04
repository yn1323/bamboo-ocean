import EditAbilityCell from 'src/components/Ability/EditAbilityCell'

type AbilityPageProps = {
  id: string
}

const EditAbilityPage = ({ id }: AbilityPageProps) => {
  return <EditAbilityCell id={id} />
}

export default EditAbilityPage
