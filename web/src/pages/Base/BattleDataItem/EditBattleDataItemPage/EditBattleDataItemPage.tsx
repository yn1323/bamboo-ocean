import EditBattleDataItemCell from 'src/components/base/BattleDataItem/EditBattleDataItemCell'

type BattleDataItemPageProps = {
  id: string
}

const EditBattleDataItemPage = ({ id }: BattleDataItemPageProps) => {
  return <EditBattleDataItemCell id={id} />
}

export default EditBattleDataItemPage
