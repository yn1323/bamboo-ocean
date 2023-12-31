import EditBattleIndexCell from 'src/components/base/BattleIndex/EditBattleIndexCell'

type BattleIndexPageProps = {
  id: string
}

const EditBattleIndexPage = ({ id }: BattleIndexPageProps) => {
  return <EditBattleIndexCell id={id} />
}

export default EditBattleIndexPage
