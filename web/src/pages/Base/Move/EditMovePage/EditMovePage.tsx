import EditMoveCell from 'src/components/base/Move/EditMoveCell'

type MovePageProps = {
  id: string
}

const EditMovePage = ({ id }: MovePageProps) => {
  return <EditMoveCell id={id} />
}

export default EditMovePage
