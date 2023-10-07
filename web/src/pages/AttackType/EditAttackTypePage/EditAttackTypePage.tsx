import EditAttackTypeCell from 'src/components/AttackType/EditAttackTypeCell'

type AttackTypePageProps = {
  id: string
}

const EditAttackTypePage = ({ id }: AttackTypePageProps) => {
  return <EditAttackTypeCell id={id} />
}

export default EditAttackTypePage
