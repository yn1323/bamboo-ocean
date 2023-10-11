import EditBattleDataCell from 'src/components/base/BattleData/EditBattleDataCell'

type BattleDataPageProps = {
  id: string
}

const EditBattleDataPage = ({ id }: BattleDataPageProps) => {
  return <EditBattleDataCell id={id} />
}

export default EditBattleDataPage
