import type { Pokemon, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PokemonCreateArgs>({
  pokemon: {
    one: {
      data: {
        name: 'String',
        form: 'String',
        no: 11,
        height: 8240167.193972,
        weight: 458565.1080388,
        statusH: 5165747,
        statusA: 1871847,
        statusB: 1978200,
        statusC: 3321428,
        statusD: 3887213,
        statusS: 9968797,
        base64Image: 'String',
        url: 'String',
        battleIndex: 'String',
        battleFormIndex: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        form: 'String',
        no: 11,
        height: 3179554.550467,
        weight: 6890120.58084,
        statusH: 9817567,
        statusA: 8555023,
        statusB: 2400406,
        statusC: 9651200,
        statusD: 7281831,
        statusS: 184708,
        base64Image: 'String',
        url: 'String',
        battleIndex: 'String',
        battleFormIndex: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pokemon, 'pokemon'>
