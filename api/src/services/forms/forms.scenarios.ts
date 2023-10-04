import type { Form, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FormCreateArgs>({
  form: {
    one: {
      data: {
        no: 'String',
        formType: 'String',
        formType2: 'String',
        name: 'String',
      },
    },
    two: {
      data: {
        no: 'String',
        formType: 'String',
        formType2: 'String',
        name: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Form, 'form'>
