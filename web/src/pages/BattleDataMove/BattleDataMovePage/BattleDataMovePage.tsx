import BattleDataMoveCell from 'src/components/BattleDataMove/BattleDataMoveCell'

type BattleDataMovePageProps = {
  id: string
}

const BattleDataMovePage = ({ id }: BattleDataMovePageProps) => {
  return <BattleDataMoveCell id={id} />
}

export default BattleDataMovePage
