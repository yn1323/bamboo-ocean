import type {
  EditBattleDataMoveById,
  UpdateBattleDataMoveInput,
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

type FormBattleDataMove = NonNullable<EditBattleDataMoveById['battleDataMove']>

interface BattleDataMoveFormProps {
  battleDataMove?: EditBattleDataMoveById['battleDataMove']
  onSave: (
    data: UpdateBattleDataMoveInput,
    id?: FormBattleDataMove['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const BattleDataMoveForm = (props: BattleDataMoveFormProps) => {
  const onSubmit = (data: FormBattleDataMove) => {
    props.onSave(data, props?.battleDataMove?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleDataMove> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="moveId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Move id
        </Label>

        <TextField
          name="moveId"
          defaultValue={props.battleDataMove?.moveId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="moveId" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.battleDataMove?.rate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="rate" className="rw-field-error" />

        <Label
          name="battleDataId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle data id
        </Label>

        <TextField
          name="battleDataId"
          defaultValue={props.battleDataMove?.battleDataId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="battleDataId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BattleDataMoveForm
