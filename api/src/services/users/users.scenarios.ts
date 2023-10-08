import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String',
        createdUserAt: '2023-10-08T08:41:54.871Z',
        updatedUserAt: '2023-10-08T08:41:54.871Z',
      },
    },
    two: {
      data: {
        name: 'String',
        createdUserAt: '2023-10-08T08:41:54.871Z',
        updatedUserAt: '2023-10-08T08:41:54.871Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
