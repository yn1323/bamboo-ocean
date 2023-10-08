import BattleDataItemCell from 'src/components/base/BattleDataItem/BattleDataItemCell'

type BattleDataItemPageProps = {
  id: string
}

const BattleDataItemPage = ({ id }: BattleDataItemPageProps) => {
  return <BattleDataItemCell id={id} />
}

export default BattleDataItemPage
