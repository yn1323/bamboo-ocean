import type { EditMyPokemonById, UpdateMyPokemonInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormMyPokemon = NonNullable<EditMyPokemonById['myPokemon']>

interface MyPokemonFormProps {
  myPokemon?: EditMyPokemonById['myPokemon']
  onSave: (data: UpdateMyPokemonInput, id?: FormMyPokemon['id']) => void
  error: RWGqlError
  loading: boolean
}

const MyPokemonForm = (props: MyPokemonFormProps) => {
  const onSubmit = (data: FormMyPokemon) => {
    props.onSave(data, props?.myPokemon?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMyPokemon> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.myPokemon?.name}
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
          defaultChecked={props.myPokemon?.favorite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="favorite" className="rw-field-error" />

        <Label
          name="evH"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ev h
        </Label>

        <NumberField
          name="evH"
          defaultValue={props.myPokemon?.evH}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="evH" className="rw-field-error" />

        <Label
          name="evA"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ev a
        </Label>

        <NumberField
          name="evA"
          defaultValue={props.myPokemon?.evA}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="evA" className="rw-field-error" />

        <Label
          name="evB"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ev b
        </Label>

        <NumberField
          name="evB"
          defaultValue={props.myPokemon?.evB}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="evB" className="rw-field-error" />

        <Label
          name="evC"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ev c
        </Label>

        <NumberField
          name="evC"
          defaultValue={props.myPokemon?.evC}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="evC" className="rw-field-error" />

        <Label
          name="evD"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ev d
        </Label>

        <NumberField
          name="evD"
          defaultValue={props.myPokemon?.evD}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="evD" className="rw-field-error" />

        <Label
          name="evS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ev s
        </Label>

        <NumberField
          name="evS"
          defaultValue={props.myPokemon?.evS}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="evS" className="rw-field-error" />

        <Label
          name="memo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Memo
        </Label>

        <TextField
          name="memo"
          defaultValue={props.myPokemon?.memo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="memo" className="rw-field-error" />

        <Label
          name="pokemonId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pokemon id
        </Label>

        <TextField
          name="pokemonId"
          defaultValue={props.myPokemon?.pokemonId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pokemonId" className="rw-field-error" />

        <Label
          name="itemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item id
        </Label>

        <TextField
          name="itemId"
          defaultValue={props.myPokemon?.itemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="itemId" className="rw-field-error" />

        <Label
          name="abilityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ability id
        </Label>

        <TextField
          name="abilityId"
          defaultValue={props.myPokemon?.abilityId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="abilityId" className="rw-field-error" />

        <Label
          name="natureId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nature id
        </Label>

        <TextField
          name="natureId"
          defaultValue={props.myPokemon?.natureId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="natureId" className="rw-field-error" />

        <Label
          name="terastalId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Terastal id
        </Label>

        <TextField
          name="terastalId"
          defaultValue={props.myPokemon?.terastalId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="terastalId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.myPokemon?.userId}
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

export default MyPokemonForm
