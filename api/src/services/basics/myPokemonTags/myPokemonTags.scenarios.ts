import type { MyPokemonTag, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MyPokemonTagCreateArgs>({
  myPokemonTag: {
    one: {
      data: {
        name: 'String',
        favorite: true,
        memo: 'String',
        user: {
          create: {
            name: 'String',
            createdUserAt: '2023-10-08T08:42:12.506Z',
            updatedUserAt: '2023-10-08T08:42:12.506Z',
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
            createdUserAt: '2023-10-08T08:42:12.506Z',
            updatedUserAt: '2023-10-08T08:42:12.506Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<MyPokemonTag, 'myPokemonTag'>
