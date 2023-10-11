import type { MyPokemon, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MyPokemonCreateArgs>({
  myPokemon: {
    one: {
      data: {
        name: 'String',
        favorite: true,
        evH: 2391308,
        evA: 1809193,
        evB: 416294,
        evC: 532226,
        evD: 1892220,
        evS: 4500747,
        memo: 'String',
        pokemon: {
          create: {
            name: 'String',
            form: 'String',
            no: 3731436,
            height: 250713.63736237,
            weight: 8829112.83152,
            statusH: 2559517,
            statusA: 6865035,
            statusB: 6302026,
            statusC: 2418492,
            statusD: 8079459,
            statusS: 8322125,
            base64Image: 'String',
            imageUrl: 'String',
            url: 'String',
            battleIndex: 'String',
            battleFormIndex: 'String',
          },
        },
        nature: {
          create: {
            name: 'String',
            battleIndex: 'String',
            increase: 'String',
            decrease: 'String',
          },
        },
        user: {
          create: {
            name: 'String',
            createdUserAt: '2023-10-08T08:42:04.361Z',
            updatedUserAt: '2023-10-08T08:42:04.361Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        favorite: true,
        evH: 4179982,
        evA: 7307867,
        evB: 5356103,
        evC: 3829027,
        evD: 3138144,
        evS: 6302087,
        memo: 'String',
        pokemon: {
          create: {
            name: 'String',
            form: 'String',
            no: 830751,
            height: 1400214.5780112,
            weight: 2791468.109531,
            statusH: 8537809,
            statusA: 2255419,
            statusB: 8368218,
            statusC: 9255851,
            statusD: 6788840,
            statusS: 8714666,
            base64Image: 'String',
            imageUrl: 'String',
            url: 'String',
            battleIndex: 'String',
            battleFormIndex: 'String',
          },
        },
        nature: {
          create: {
            name: 'String',
            battleIndex: 'String',
            increase: 'String',
            decrease: 'String',
          },
        },
        user: {
          create: {
            name: 'String',
            createdUserAt: '2023-10-08T08:42:04.361Z',
            updatedUserAt: '2023-10-08T08:42:04.361Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<MyPokemon, 'myPokemon'>
