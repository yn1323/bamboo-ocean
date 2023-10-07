import BattleIndexCell from 'src/components/BattleIndex/BattleIndexCell'

type BattleIndexPageProps = {
  id: string
}

const BattleIndexPage = ({ id }: BattleIndexPageProps) => {
  return <BattleIndexCell id={id} />
}

export default BattleIndexPage
