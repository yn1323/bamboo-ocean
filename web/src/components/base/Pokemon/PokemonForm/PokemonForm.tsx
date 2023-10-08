import type { EditPokemonById, UpdatePokemonInput } from 'types/graphql'

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

type FormPokemon = NonNullable<EditPokemonById['pokemon']>

interface PokemonFormProps {
  pokemon?: EditPokemonById['pokemon']
  onSave: (data: UpdatePokemonInput, id?: FormPokemon['id']) => void
  error: RWGqlError
  loading: boolean
}

const PokemonForm = (props: PokemonFormProps) => {
  const onSubmit = (data: FormPokemon) => {
    props.onSave(data, props?.pokemon?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPokemon> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.pokemon?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="form"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Form
        </Label>

        <TextField
          name="form"
          defaultValue={props.pokemon?.form}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="form" className="rw-field-error" />

        <Label
          name="no"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          No
        </Label>

        <TextField
          name="no"
          defaultValue={props.pokemon?.no}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="no" className="rw-field-error" />

        <Label
          name="height"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Height
        </Label>

        <TextField
          name="height"
          defaultValue={props.pokemon?.height}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="height" className="rw-field-error" />

        <Label
          name="weight"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Weight
        </Label>

        <TextField
          name="weight"
          defaultValue={props.pokemon?.weight}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="weight" className="rw-field-error" />

        <Label
          name="statusH"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status h
        </Label>

        <NumberField
          name="statusH"
          defaultValue={props.pokemon?.statusH}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="statusH" className="rw-field-error" />

        <Label
          name="statusA"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status a
        </Label>

        <NumberField
          name="statusA"
          defaultValue={props.pokemon?.statusA}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="statusA" className="rw-field-error" />

        <Label
          name="statusB"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status b
        </Label>

        <NumberField
          name="statusB"
          defaultValue={props.pokemon?.statusB}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="statusB" className="rw-field-error" />

        <Label
          name="statusC"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status c
        </Label>

        <NumberField
          name="statusC"
          defaultValue={props.pokemon?.statusC}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="statusC" className="rw-field-error" />

        <Label
          name="statusD"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status d
        </Label>

        <NumberField
          name="statusD"
          defaultValue={props.pokemon?.statusD}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="statusD" className="rw-field-error" />

        <Label
          name="statusS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status s
        </Label>

        <NumberField
          name="statusS"
          defaultValue={props.pokemon?.statusS}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="statusS" className="rw-field-error" />

        <Label
          name="base64Image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Base64 image
        </Label>

        <TextField
          name="base64Image"
          defaultValue={props.pokemon?.base64Image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="base64Image" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.pokemon?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="battleIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle index
        </Label>

        <TextField
          name="battleIndex"
          defaultValue={props.pokemon?.battleIndex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="battleIndex" className="rw-field-error" />

        <Label
          name="battleFormIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Battle form index
        </Label>

        <TextField
          name="battleFormIndex"
          defaultValue={props.pokemon?.battleFormIndex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="battleFormIndex" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PokemonForm
