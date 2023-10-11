import AttackTypeCell from 'src/components/base/AttackType/AttackTypeCell'

type AttackTypePageProps = {
  id: string
}

const AttackTypePage = ({ id }: AttackTypePageProps) => {
  return <AttackTypeCell id={id} />
}

export default AttackTypePage
