import type { EditBattleDataById, UpdateBattleDataInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormBattleData = NonNullable<EditBattleDataById['battleData']>

interface BattleDataFormProps {
  battleData?: EditBattleDataById['battleData']
  onSave: (data: UpdateBattleDataInput, id?: FormBattleData['id']) => void
  error: RWGqlError
  loading: boolean
}

const BattleDataForm = (props: BattleDataFormProps) => {
  const onSubmit = (data: FormBattleData) => {
    props.onSave(data, props?.battleData?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleData> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="battleIndexId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle index id
        </Label>

        <TextField
          name="battleIndexId"
          defaultValue={props.battleData?.battleIndexId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="battleIndexId" className="rw-field-error" />

        <Label
          name="pokemonId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pokemon id
        </Label>

        <TextField
          name="pokemonId"
          defaultValue={props.battleData?.pokemonId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pokemonId" className="rw-field-error" />

        <Label
          name="no"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          No
        </Label>

        <TextField
          name="no"
          defaultValue={props.battleData?.no}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="no" className="rw-field-error" />

        <Label
          name="rank"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rank
        </Label>

        <NumberField
          name="rank"
          defaultValue={props.battleData?.rank}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="rank" className="rw-field-error" />

        <Label
          name="formId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Form id
        </Label>

        <TextField
          name="formId"
          defaultValue={props.battleData?.formId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="formId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BattleDataForm
