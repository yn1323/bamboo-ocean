import EditBattleDataAbilityCell from 'src/components/BattleDataAbility/EditBattleDataAbilityCell'

type BattleDataAbilityPageProps = {
  id: string
}

const EditBattleDataAbilityPage = ({ id }: BattleDataAbilityPageProps) => {
  return <EditBattleDataAbilityCell id={id} />
}

export default EditBattleDataAbilityPage
