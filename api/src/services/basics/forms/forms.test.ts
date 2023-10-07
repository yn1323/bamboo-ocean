import type { Form } from '@prisma/client'

import { createForm, deleteForm, form, forms, updateForm } from './forms'
import type { StandardScenario } from './forms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('forms', () => {
  scenario('returns all forms', async (scenario: StandardScenario) => {
    const result = await forms()

    expect(result.length).toEqual(Object.keys(scenario.form).length)
  })

  scenario('returns a single form', async (scenario: StandardScenario) => {
    const result = await form({ id: scenario.form.one.id })

    expect(result).toEqual(scenario.form.one)
  })

  scenario('creates a form', async () => {
    const result = await createForm({
      input: {
        no: 'String',
        formType: 'String',
        formType2: 'String',
        name: 'String',
      },
    })

    expect(result.no).toEqual('String')
    expect(result.formType).toEqual('String')
    expect(result.formType2).toEqual('String')
    expect(result.name).toEqual('String')
  })

  scenario('updates a form', async (scenario: StandardScenario) => {
    const original = (await form({ id: scenario.form.one.id })) as Form
    const result = await updateForm({
      id: original.id,
      input: { no: 'String2' },
    })

    expect(result.no).toEqual('String2')
  })

  scenario('deletes a form', async (scenario: StandardScenario) => {
    const original = (await deleteForm({ id: scenario.form.one.id })) as Form
    const result = await form({ id: original.id })

    expect(result).toEqual(null)
  })
})
