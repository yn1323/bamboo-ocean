import type { EditNatureById, UpdateNatureInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormNature = NonNullable<EditNatureById['nature']>

interface NatureFormProps {
  nature?: EditNatureById['nature']
  onSave: (data: UpdateNatureInput, id?: FormNature['id']) => void
  error: RWGqlError
  loading: boolean
}

const NatureForm = (props: NatureFormProps) => {
  const onSubmit = (data: FormNature) => {
    props.onSave(data, props?.nature?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormNature> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.nature?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="battleIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle index
        </Label>

        <TextField
          name="battleIndex"
          defaultValue={props.nature?.battleIndex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="battleIndex" className="rw-field-error" />

        <Label
          name="increase"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Increase
        </Label>

        <TextField
          name="increase"
          defaultValue={props.nature?.increase}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="increase" className="rw-field-error" />

        <Label
          name="decrease"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Decrease
        </Label>

        <TextField
          name="decrease"
          defaultValue={props.nature?.decrease}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="decrease" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NatureForm
