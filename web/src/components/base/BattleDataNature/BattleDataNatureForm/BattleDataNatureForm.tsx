import type {
  EditBattleDataNatureById,
  UpdateBattleDataNatureInput,
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

type FormBattleDataNature = NonNullable<
  EditBattleDataNatureById['battleDataNature']
>

interface BattleDataNatureFormProps {
  battleDataNature?: EditBattleDataNatureById['battleDataNature']
  onSave: (
    data: UpdateBattleDataNatureInput,
    id?: FormBattleDataNature['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const BattleDataNatureForm = (props: BattleDataNatureFormProps) => {
  const onSubmit = (data: FormBattleDataNature) => {
    props.onSave(data, props?.battleDataNature?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleDataNature> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="natureId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nature id
        </Label>

        <TextField
          name="natureId"
          defaultValue={props.battleDataNature?.natureId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="natureId" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.battleDataNature?.rate}
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
          defaultValue={props.battleDataNature?.battleDataId}
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

export default BattleDataNatureForm
