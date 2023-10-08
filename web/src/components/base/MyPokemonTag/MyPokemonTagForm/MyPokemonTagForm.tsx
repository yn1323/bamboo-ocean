import type {
  EditMyPokemonTagById,
  UpdateMyPokemonTagInput,
} from 'types/graphql'

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

type FormMyPokemonTag = NonNullable<EditMyPokemonTagById['myPokemonTag']>

interface MyPokemonTagFormProps {
  myPokemonTag?: EditMyPokemonTagById['myPokemonTag']
  onSave: (data: UpdateMyPokemonTagInput, id?: FormMyPokemonTag['id']) => void
  error: RWGqlError
  loading: boolean
}

const MyPokemonTagForm = (props: MyPokemonTagFormProps) => {
  const onSubmit = (data: FormMyPokemonTag) => {
    props.onSave(data, props?.myPokemonTag?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMyPokemonTag> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.myPokemonTag?.name}
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
          defaultChecked={props.myPokemonTag?.favorite}
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
          defaultValue={props.myPokemonTag?.memo}
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
          defaultValue={props.myPokemonTag?.userId}
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

export default MyPokemonTagForm
