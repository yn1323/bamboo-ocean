import type { DeleteFormMutationVariables, FindForms } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/base/Form/FormsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_FORM_MUTATION = gql`
  mutation DeleteFormMutation($id: String!) {
    deleteForm(id: $id) {
      id
    }
  }
`

const FormsList = ({ forms }: FindForms) => {
  const [deleteForm] = useMutation(DELETE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form deleted')
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

  const onDeleteClick = (id: DeleteFormMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete form ' + id + '?')) {
      deleteForm({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>No</th>
            <th>Form type</th>
            <th>Form type2</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>{truncate(form.id)}</td>
              <td>{truncate(form.no)}</td>
              <td>{truncate(form.formType)}</td>
              <td>{truncate(form.formType2)}</td>
              <td>{truncate(form.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.form({ id: form.id })}
                    title={'Show form ' + form.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editForm({ id: form.id })}
                    title={'Edit form ' + form.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete form ' + form.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(form.id)}
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

export default FormsList
