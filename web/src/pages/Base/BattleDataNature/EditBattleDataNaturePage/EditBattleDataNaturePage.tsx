import EditBattleDataNatureCell from 'src/components/base/BattleDataNature/EditBattleDataNatureCell'

type BattleDataNaturePageProps = {
  id: string
}

const EditBattleDataNaturePage = ({ id }: BattleDataNaturePageProps) => {
  return <EditBattleDataNatureCell id={id} />
}

export default EditBattleDataNaturePage
