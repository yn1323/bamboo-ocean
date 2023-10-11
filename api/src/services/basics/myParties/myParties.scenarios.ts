import type { MyParty, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MyPartyCreateArgs>({
  myParty: {
    one: {
      data: {
        name: 'String',
        favorite: true,
        memo: 'String',
        user: {
          create: {
            name: 'String',
            createdUserAt: '2023-10-08T08:42:06.990Z',
            updatedUserAt: '2023-10-08T08:42:06.990Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        favorite: true,
        memo: 'String',
        user: {
          create: {
            name: 'String',
            createdUserAt: '2023-10-08T08:42:06.991Z',
            updatedUserAt: '2023-10-08T08:42:06.991Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<MyParty, 'myParty'>
