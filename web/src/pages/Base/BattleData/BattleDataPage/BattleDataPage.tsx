import BattleDataCell from 'src/components/base/BattleData/BattleDataCell'

type BattleDataPageProps = {
  id: string
}

const BattleDataPage = ({ id }: BattleDataPageProps) => {
  return <BattleDataCell id={id} />
}

export default BattleDataPage
