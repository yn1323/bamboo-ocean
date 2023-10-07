import type { DeleteFormMutationVariables, FindFormById } from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_FORM_MUTATION = gql`
  mutation DeleteFormMutation($id: String!) {
    deleteForm(id: $id) {
      id
    }
  }
`

interface Props {
  form: NonNullable<FindFormById['form']>
}

const Form = ({ form }: Props) => {
  const [deleteForm] = useMutation(DELETE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form deleted')
      navigate(routes.forms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteFormMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete form ' + id + '?')) {
      deleteForm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Form {form.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{form.id}</td>
            </tr>
            <tr>
              <th>No</th>
              <td>{form.no}</td>
            </tr>
            <tr>
              <th>Form type</th>
              <td>{form.formType}</td>
            </tr>
            <tr>
              <th>Form type2</th>
              <td>{form.formType2}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{form.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editForm({ id: form.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(form.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Form
