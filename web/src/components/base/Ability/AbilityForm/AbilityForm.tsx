import type { EditAbilityById, UpdateAbilityInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormAbility = NonNullable<EditAbilityById['ability']>

interface AbilityFormProps {
  ability?: EditAbilityById['ability']
  onSave: (data: UpdateAbilityInput, id?: FormAbility['id']) => void
  error: RWGqlError
  loading: boolean
}

const AbilityForm = (props: AbilityFormProps) => {
  const onSubmit = (data: FormAbility) => {
    props.onSave(data, props?.ability?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAbility> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.ability?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="detail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Detail
        </Label>

        <TextField
          name="detail"
          defaultValue={props.ability?.detail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="detail" className="rw-field-error" />

        <Label
          name="battleIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle index
        </Label>

        <TextField
          name="battleIndex"
          defaultValue={props.ability?.battleIndex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="battleIndex" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AbilityForm
