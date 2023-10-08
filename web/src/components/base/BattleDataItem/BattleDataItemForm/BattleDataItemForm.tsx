import type {
  EditBattleDataItemById,
  UpdateBattleDataItemInput,
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

type FormBattleDataItem = NonNullable<EditBattleDataItemById['battleDataItem']>

interface BattleDataItemFormProps {
  battleDataItem?: EditBattleDataItemById['battleDataItem']
  onSave: (
    data: UpdateBattleDataItemInput,
    id?: FormBattleDataItem['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const BattleDataItemForm = (props: BattleDataItemFormProps) => {
  const onSubmit = (data: FormBattleDataItem) => {
    props.onSave(data, props?.battleDataItem?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleDataItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="itemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item id
        </Label>

        <TextField
          name="itemId"
          defaultValue={props.battleDataItem?.itemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="itemId" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.battleDataItem?.rate}
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
          defaultValue={props.battleDataItem?.battleDataId}
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

export default BattleDataItemForm
