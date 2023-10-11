import BattleDataTerastalCell from 'src/components/base/BattleDataTerastal/BattleDataTerastalCell'

type BattleDataTerastalPageProps = {
  id: string
}

const BattleDataTerastalPage = ({ id }: BattleDataTerastalPageProps) => {
  return <BattleDataTerastalCell id={id} />
}

export default BattleDataTerastalPage
