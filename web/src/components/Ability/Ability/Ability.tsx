import type {
  DeleteAbilityMutationVariables,
  FindAbilityById,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ABILITY_MUTATION = gql`
  mutation DeleteAbilityMutation($id: String!) {
    deleteAbility(id: $id) {
      id
    }
  }
`

interface Props {
  ability: NonNullable<FindAbilityById['ability']>
}

const Ability = ({ ability }: Props) => {
  const [deleteAbility] = useMutation(DELETE_ABILITY_MUTATION, {
    onCompleted: () => {
      toast.success('Ability deleted')
      navigate(routes.abilities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAbilityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete ability ' + id + '?')) {
      deleteAbility({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Ability {ability.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{ability.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{ability.name}</td>
            </tr>
            <tr>
              <th>Detail</th>
              <td>{ability.detail}</td>
            </tr>
            <tr>
              <th>Battle index</th>
              <td>{ability.battleIndex}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAbility({ id: ability.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(ability.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Ability
