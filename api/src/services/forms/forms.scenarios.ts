import type { Prisma, Form } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FormCreateArgs>({
  form: {
    one: { data: { key: 'String', name: 'String' } },
    two: { data: { key: 'String', name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Form, 'form'>
