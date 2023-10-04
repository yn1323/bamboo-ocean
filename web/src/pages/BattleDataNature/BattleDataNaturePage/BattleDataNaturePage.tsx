import BattleDataNatureCell from 'src/components/BattleDataNature/BattleDataNatureCell'

type BattleDataNaturePageProps = {
  id: string
}

const BattleDataNaturePage = ({ id }: BattleDataNaturePageProps) => {
  return <BattleDataNatureCell id={id} />
}

export default BattleDataNaturePage
