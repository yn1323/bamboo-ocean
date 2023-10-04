import BattleDataAbilityCell from 'src/components/BattleDataAbility/BattleDataAbilityCell'

type BattleDataAbilityPageProps = {
  id: string
}

const BattleDataAbilityPage = ({ id }: BattleDataAbilityPageProps) => {
  return <BattleDataAbilityCell id={id} />
}

export default BattleDataAbilityPage
