import type {
  DeleteBattleIndexMutationVariables,
  FindBattleIndexById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_BATTLE_INDEX_MUTATION = gql`
  mutation DeleteBattleIndexMutation($id: String!) {
    deleteBattleIndex(id: $id) {
      id
    }
  }
`

interface Props {
  battleIndex: NonNullable<FindBattleIndexById['battleIndex']>
}

const BattleIndex = ({ battleIndex }: Props) => {
  const [deleteBattleIndex] = useMutation(DELETE_BATTLE_INDEX_MUTATION, {
    onCompleted: () => {
      toast.success('BattleIndex deleted')
      navigate(routes.battleIndices())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBattleIndexMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleIndex ' + id + '?')) {
      deleteBattleIndex({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleIndex {battleIndex.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleIndex.id}</td>
            </tr>
            <tr>
              <th>Captured at</th>
              <td>{timeTag(battleIndex.capturedAt)}</td>
            </tr>
            <tr>
              <th>Start at</th>
              <td>{timeTag(battleIndex.startAt)}</td>
            </tr>
            <tr>
              <th>End at</th>
              <td>{timeTag(battleIndex.endAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{battleIndex.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleIndex({ id: battleIndex.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleIndex.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleIndex
