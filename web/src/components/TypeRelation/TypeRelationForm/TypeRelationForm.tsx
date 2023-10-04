import type {
  EditTypeRelationById,
  UpdateTypeRelationInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormTypeRelation = NonNullable<EditTypeRelationById['typeRelation']>

interface TypeRelationFormProps {
  typeRelation?: EditTypeRelationById['typeRelation']
  onSave: (data: UpdateTypeRelationInput, id?: FormTypeRelation['id']) => void
  error: RWGqlError
  loading: boolean
}

const TypeRelationForm = (props: TypeRelationFormProps) => {
  const onSubmit = (data: FormTypeRelation) => {
    props.onSave(data, props?.typeRelation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTypeRelation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="fromId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          From id
        </Label>

        <TextField
          name="fromId"
          defaultValue={props.typeRelation?.fromId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fromId" className="rw-field-error" />

        <Label
          name="toId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          To id
        </Label>

        <TextField
          name="toId"
          defaultValue={props.typeRelation?.toId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="toId" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.typeRelation?.rate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="rate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TypeRelationForm
