import type {
  DeleteBattleDataNatureMutationVariables,
  FindBattleDataNatureById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_BATTLE_DATA_NATURE_MUTATION = gql`
  mutation DeleteBattleDataNatureMutation($id: String!) {
    deleteBattleDataNature(id: $id) {
      id
    }
  }
`

interface Props {
  battleDataNature: NonNullable<FindBattleDataNatureById['battleDataNature']>
}

const BattleDataNature = ({ battleDataNature }: Props) => {
  const [deleteBattleDataNature] = useMutation(
    DELETE_BATTLE_DATA_NATURE_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleDataNature deleted')
        navigate(routes.battleDataNatures())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteBattleDataNatureMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete battleDataNature ' + id + '?')
    ) {
      deleteBattleDataNature({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BattleDataNature {battleDataNature.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{battleDataNature.id}</td>
            </tr>
            <tr>
              <th>Nature id</th>
              <td>{battleDataNature.natureId}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{battleDataNature.rate}</td>
            </tr>
            <tr>
              <th>Battle data id</th>
              <td>{battleDataNature.battleDataId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBattleDataNature({ id: battleDataNature.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(battleDataNature.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BattleDataNature
