import type { EditFormById, UpdateFormInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormForm = NonNullable<EditFormById['form']>

interface FormFormProps {
  form?: EditFormById['form']
  onSave: (data: UpdateFormInput, id?: FormForm['id']) => void
  error: RWGqlError
  loading: boolean
}

const FormForm = (props: FormFormProps) => {
  const onSubmit = (data: FormForm) => {
    props.onSave(data, props?.form?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormForm> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="no"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          No
        </Label>

        <TextField
          name="no"
          defaultValue={props.form?.no}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="no" className="rw-field-error" />

        <Label
          name="formType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Form type
        </Label>

        <TextField
          name="formType"
          defaultValue={props.form?.formType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="formType" className="rw-field-error" />

        <Label
          name="formType2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Form type2
        </Label>

        <TextField
          name="formType2"
          defaultValue={props.form?.formType2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="formType2" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.form?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FormForm
