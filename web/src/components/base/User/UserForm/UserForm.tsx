import type { EditUserById, UpdateUserInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: FormUser) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="createdUserAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created user at
        </Label>

        <DatetimeLocalField
          name="createdUserAt"
          defaultValue={formatDatetime(props.user?.createdUserAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="createdUserAt" className="rw-field-error" />

        <Label
          name="updatedUserAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated user at
        </Label>

        <DatetimeLocalField
          name="updatedUserAt"
          defaultValue={formatDatetime(props.user?.updatedUserAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="updatedUserAt" className="rw-field-error" />

        <Label
          name="deletedUserAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted user at
        </Label>

        <DatetimeLocalField
          name="deletedUserAt"
          defaultValue={formatDatetime(props.user?.deletedUserAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deletedUserAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
