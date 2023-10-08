import type { MyPartyTag, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MyPartyTagCreateArgs>({
  myPartyTag: {
    one: {
      data: {
        name: 'String',
        favorite: true,
        memo: 'String',
        user: {
          create: {
            name: 'String',
            createdUserAt: '2023-10-08T08:42:09.712Z',
            updatedUserAt: '2023-10-08T08:42:09.712Z',
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
            createdUserAt: '2023-10-08T08:42:09.712Z',
            updatedUserAt: '2023-10-08T08:42:09.712Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<MyPartyTag, 'myPartyTag'>
