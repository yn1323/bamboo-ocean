import type { DeleteMoveMutationVariables, FindMoveById } from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_MOVE_MUTATION = gql`
  mutation DeleteMoveMutation($id: String!) {
    deleteMove(id: $id) {
      id
    }
  }
`

interface Props {
  move: NonNullable<FindMoveById['move']>
}

const Move = ({ move }: Props) => {
  const [deleteMove] = useMutation(DELETE_MOVE_MUTATION, {
    onCompleted: () => {
      toast.success('Move deleted')
      navigate(routes.moves())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMoveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete move ' + id + '?')) {
      deleteMove({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Move {move.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{move.id}</td>
            </tr>
            <tr>
              <th>Target</th>
              <td>{move.target}</td>
            </tr>
            <tr>
              <th>Detail</th>
              <td>{move.detail}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{move.name}</td>
            </tr>
            <tr>
              <th>Type id</th>
              <td>{move.typeId}</td>
            </tr>
            <tr>
              <th>Attack type id</th>
              <td>{move.attackTypeId}</td>
            </tr>
            <tr>
              <th>Power</th>
              <td>{move.power}</td>
            </tr>
            <tr>
              <th>Accuracy</th>
              <td>{move.accuracy}</td>
            </tr>
            <tr>
              <th>Pp</th>
              <td>{move.pp}</td>
            </tr>

            <tr>
              <th>Battle index</th>
              <td>{move.battleIndex}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMove({ id: move.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(move.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Move
