import type {
  DeleteAbilityMutationVariables,
  FindAbilities,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/Ability/AbilitiesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_ABILITY_MUTATION = gql`
  mutation DeleteAbilityMutation($id: String!) {
    deleteAbility(id: $id) {
      id
    }
  }
`

const AbilitiesList = ({ abilities }: FindAbilities) => {
  const [deleteAbility] = useMutation(DELETE_ABILITY_MUTATION, {
    onCompleted: () => {
      toast.success('Ability deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAbilityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete ability ' + id + '?')) {
      deleteAbility({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
            <th>Battle index</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {abilities.map((ability) => (
            <tr key={ability.id}>
              <td>{truncate(ability.id)}</td>
              <td>{truncate(ability.name)}</td>
              <td>{truncate(ability.detail)}</td>
              <td>{truncate(ability.battleIndex)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.ability({ id: ability.id })}
                    title={'Show ability ' + ability.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAbility({ id: ability.id })}
                    title={'Edit ability ' + ability.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete ability ' + ability.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(ability.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AbilitiesList
