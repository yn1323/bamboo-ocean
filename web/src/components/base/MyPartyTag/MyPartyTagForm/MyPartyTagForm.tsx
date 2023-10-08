import type { EditMyPartyTagById, UpdateMyPartyTagInput } from 'types/graphql'

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

type FormMyPartyTag = NonNullable<EditMyPartyTagById['myPartyTag']>

interface MyPartyTagFormProps {
  myPartyTag?: EditMyPartyTagById['myPartyTag']
  onSave: (data: UpdateMyPartyTagInput, id?: FormMyPartyTag['id']) => void
  error: RWGqlError
  loading: boolean
}

const MyPartyTagForm = (props: MyPartyTagFormProps) => {
  const onSubmit = (data: FormMyPartyTag) => {
    props.onSave(data, props?.myPartyTag?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMyPartyTag> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.myPartyTag?.name}
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
          defaultChecked={props.myPartyTag?.favorite}
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
          defaultValue={props.myPartyTag?.memo}
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
          defaultValue={props.myPartyTag?.userId}
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

export default MyPartyTagForm
