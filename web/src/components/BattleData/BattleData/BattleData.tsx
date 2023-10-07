import type {
  DeleteBattleDataMutationVariables,
  FindBattleDataById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_BATTLE_DATA_MUTATION = gql`
  mutation DeleteBattleDataMutation($id: String!) {
    deleteBattleData(id: $id) {
      id
    }
  }
`

interface Props {
  battleData: NonNullable<FindBattleDataById['battleData']>
}

const BattleData = ({ battleData }: Props) => {
  const [deleteBattleData] = useMutation(DELETE_BATTLE_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('BattleData deleted')
      navigate(routes.battleDatas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBattleDataMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete battleData ' + id + '?')) {
      deleteBattleData({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleData {battleData.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleData.id}</td>
            </tr>
            <tr>
              <th>Battle index id</th>
              <td>{battleData.battleIndexId}</td>
            </tr>
            <tr>
              <th>Pokemon id</th>
              <td>{battleData.pokemonId}</td>
            </tr>
            <tr>
              <th>No</th>
              <td>{battleData.no}</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>{battleData.rank}</td>
            </tr>
            <tr>
              <th>Form id</th>
              <td>{battleData.formId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleData({ id: battleData.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleData.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleData
