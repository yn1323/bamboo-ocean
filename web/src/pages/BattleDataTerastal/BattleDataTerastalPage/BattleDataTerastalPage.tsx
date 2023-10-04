import BattleDataTerastalCell from 'src/components/BattleDataTerastal/BattleDataTerastalCell'

type BattleDataTerastalPageProps = {
  id: string
}

const BattleDataTerastalPage = ({ id }: BattleDataTerastalPageProps) => {
  return <BattleDataTerastalCell id={id} />
}

export default BattleDataTerastalPage
