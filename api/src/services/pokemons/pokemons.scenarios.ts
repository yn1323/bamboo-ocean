import type { Prisma, Pokemon } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PokemonCreateArgs>({
  pokemon: {
    one: {
      data: {
        name: 'String',
        form: 'String',
        no: 8820845,
        height: 2059814.5390699974,
        weight: 5489831.085427399,
        statusH: 8453712,
        statusA: 5821332,
        statusB: 1795124,
        statusC: 80842,
        statusD: 1828236,
        statusS: 1521372,
        imageUrl: 'String',
        base64Image: 'String',
        url: 'String',
        battleIndex: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        form: 'String',
        no: 6965647,
        height: 7235969.999986489,
        weight: 5280526.584520138,
        statusH: 7326598,
        statusA: 1086122,
        statusB: 1716774,
        statusC: 7842446,
        statusD: 7611373,
        statusS: 6004655,
        imageUrl: 'String',
        base64Image: 'String',
        url: 'String',
        battleIndex: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pokemon, 'pokemon'>
