import type { EditMyPartyById, UpdateMyPartyInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormMyParty = NonNullable<EditMyPartyById['myParty']>

interface MyPartyFormProps {
  myParty?: EditMyPartyById['myParty']
  onSave: (data: UpdateMyPartyInput, id?: FormMyParty['id']) => void
  error: RWGqlError
  loading: boolean
}

const MyPartyForm = (props: MyPartyFormProps) => {
  const onSubmit = (data: FormMyParty) => {
    props.onSave(data, props?.myParty?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMyParty> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.myParty?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="favorite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Favorite
        </Label>

        <CheckboxField
          name="favorite"
          defaultChecked={props.myParty?.favorite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="favorite" className="rw-field-error" />

        <Label
          name="memo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Memo
        </Label>

        <TextField
          name="memo"
          defaultValue={props.myParty?.memo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="memo" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.myParty?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MyPartyForm
