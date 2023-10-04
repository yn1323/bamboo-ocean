import BattleDataItemCell from 'src/components/BattleDataItem/BattleDataItemCell'

type BattleDataItemPageProps = {
  id: string
}

const BattleDataItemPage = ({ id }: BattleDataItemPageProps) => {
  return <BattleDataItemCell id={id} />
}

export default BattleDataItemPage
