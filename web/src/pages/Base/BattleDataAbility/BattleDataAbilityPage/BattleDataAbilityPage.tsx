import BattleDataAbilityCell from 'src/components/base/BattleDataAbility/BattleDataAbilityCell'

type BattleDataAbilityPageProps = {
  id: string
}

const BattleDataAbilityPage = ({ id }: BattleDataAbilityPageProps) => {
  return <BattleDataAbilityCell id={id} />
}

export default BattleDataAbilityPage
