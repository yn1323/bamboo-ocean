import EditMoveCell from 'src/components/Move/EditMoveCell'

type MovePageProps = {
  id: string
}

const EditMovePage = ({ id }: MovePageProps) => {
  return <EditMoveCell id={id} />
}

export default EditMovePage
