import EditBattleDataMoveCell from 'src/components/base/BattleDataMove/EditBattleDataMoveCell'

type BattleDataMovePageProps = {
  id: string
}

const EditBattleDataMovePage = ({ id }: BattleDataMovePageProps) => {
  return <EditBattleDataMoveCell id={id} />
}

export default EditBattleDataMovePage
