import type { EditAttackTypeById, UpdateAttackTypeInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormAttackType = NonNullable<EditAttackTypeById['attackType']>

interface AttackTypeFormProps {
  attackType?: EditAttackTypeById['attackType']
  onSave: (data: UpdateAttackTypeInput, id?: FormAttackType['id']) => void
  error: RWGqlError
  loading: boolean
}

const AttackTypeForm = (props: AttackTypeFormProps) => {
  const onSubmit = (data: FormAttackType) => {
    props.onSave(data, props?.attackType?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAttackType> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.attackType?.name}
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

export default AttackTypeForm
