import type {
  EditBattleDataTerastalById,
  UpdateBattleDataTerastalInput,
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

type FormBattleDataTerastal = NonNullable<
  EditBattleDataTerastalById['battleDataTerastal']
>

interface BattleDataTerastalFormProps {
  battleDataTerastal?: EditBattleDataTerastalById['battleDataTerastal']
  onSave: (
    data: UpdateBattleDataTerastalInput,
    id?: FormBattleDataTerastal['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const BattleDataTerastalForm = (props: BattleDataTerastalFormProps) => {
  const onSubmit = (data: FormBattleDataTerastal) => {
    props.onSave(data, props?.battleDataTerastal?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleDataTerastal> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="typeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type id
        </Label>

        <TextField
          name="typeId"
          defaultValue={props.battleDataTerastal?.typeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="typeId" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.battleDataTerastal?.rate}
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
          defaultValue={props.battleDataTerastal?.battleDataId}
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

export default BattleDataTerastalForm
