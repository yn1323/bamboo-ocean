import EditBattleDataTerastalCell from 'src/components/BattleDataTerastal/EditBattleDataTerastalCell'

type BattleDataTerastalPageProps = {
  id: string
}

const EditBattleDataTerastalPage = ({ id }: BattleDataTerastalPageProps) => {
  return <EditBattleDataTerastalCell id={id} />
}

export default EditBattleDataTerastalPage
