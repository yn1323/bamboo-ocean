import type {
  EditBattleDataAbilityById,
  UpdateBattleDataAbilityInput,
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

type FormBattleDataAbility = NonNullable<
  EditBattleDataAbilityById['battleDataAbility']
>

interface BattleDataAbilityFormProps {
  battleDataAbility?: EditBattleDataAbilityById['battleDataAbility']
  onSave: (
    data: UpdateBattleDataAbilityInput,
    id?: FormBattleDataAbility['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const BattleDataAbilityForm = (props: BattleDataAbilityFormProps) => {
  const onSubmit = (data: FormBattleDataAbility) => {
    props.onSave(data, props?.battleDataAbility?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBattleDataAbility> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="abilityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ability id
        </Label>

        <TextField
          name="abilityId"
          defaultValue={props.battleDataAbility?.abilityId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="abilityId" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.battleDataAbility?.rate}
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
          defaultValue={props.battleDataAbility?.battleDataId}
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

export default BattleDataAbilityForm
