import MoveCell from 'src/components/base/Move/MoveCell'

type MovePageProps = {
  id: string
}

const MovePage = ({ id }: MovePageProps) => {
  return <MoveCell id={id} />
}

export default MovePage
