import type { EditMoveById, UpdateMoveInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormMove = NonNullable<EditMoveById['move']>

interface MoveFormProps {
  move?: EditMoveById['move']
  onSave: (data: UpdateMoveInput, id?: FormMove['id']) => void
  error: RWGqlError
  loading: boolean
}

const MoveForm = (props: MoveFormProps) => {
  const onSubmit = (data: FormMove) => {
    props.onSave(data, props?.move?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMove> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="target"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target
        </Label>

        <TextField
          name="target"
          defaultValue={props.move?.target}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="target" className="rw-field-error" />

        <Label
          name="detail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Detail
        </Label>

        <TextField
          name="detail"
          defaultValue={props.move?.detail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="detail" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.move?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="typeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type id
        </Label>

        <TextField
          name="typeId"
          defaultValue={props.move?.typeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="typeId" className="rw-field-error" />

        <Label
          name="attackTypeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Attack type id
        </Label>

        <TextField
          name="attackTypeId"
          defaultValue={props.move?.attackTypeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="attackTypeId" className="rw-field-error" />

        <Label
          name="power"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Power
        </Label>

        <NumberField
          name="power"
          defaultValue={props.move?.power}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="power" className="rw-field-error" />

        <Label
          name="accuracy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Accuracy
        </Label>

        <NumberField
          name="accuracy"
          defaultValue={props.move?.accuracy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="accuracy" className="rw-field-error" />

        <Label
          name="pp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pp
        </Label>

        <NumberField
          name="pp"
          defaultValue={props.move?.pp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pp" className="rw-field-error" />

        <Label
          name="isTouchable"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is touchable
        </Label>

        <CheckboxField
          name="isTouchable"
          defaultChecked={props.move?.isTouchable}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isTouchable" className="rw-field-error" />

        <Label
          name="enableProtect"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Enable protect
        </Label>

        <CheckboxField
          name="enableProtect"
          defaultChecked={props.move?.enableProtect}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="enableProtect" className="rw-field-error" />

        <Label
          name="battleIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle index
        </Label>

        <TextField
          name="battleIndex"
          defaultValue={props.move?.battleIndex}
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

export default MoveForm
