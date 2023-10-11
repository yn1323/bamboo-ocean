import type { EditBattleIndexById, UpdateBattleIndexInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormBattleIndex = NonNullable<EditBattleIndexById['battleIndex']>

interface BattleIndexFormProps {
  battleIndex?: EditBattleIndexById['battleIndex']
  onSave: (data: UpdateBattleIndexInput, id?: FormBattleIndex['id']) => void
  error: RWGqlError
  loading: boolean
}

const BattleIndexForm = (props: BattleIndexFormProps) => {
  const onSubmit = (data: FormBattleIndex) => {
    props.onSave(data, props?.battleIndex?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleIndex> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="capturedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Captured at
        </Label>

        <DatetimeLocalField
          name="capturedAt"
          defaultValue={formatDatetime(props.battleIndex?.capturedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="capturedAt" className="rw-field-error" />

        <Label
          name="startAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start at
        </Label>

        <DatetimeLocalField
          name="startAt"
          defaultValue={formatDatetime(props.battleIndex?.startAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startAt" className="rw-field-error" />

        <Label
          name="endAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End at
        </Label>

        <DatetimeLocalField
          name="endAt"
          defaultValue={formatDatetime(props.battleIndex?.endAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="endAt" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.battleIndex?.name}
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

export default BattleIndexForm
