import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const types: Prisma.TypeCreateArgs['data'][] = [
  {
    name: 'ノーマル',
    battleIndex: '0',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/normal.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/normal_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/normal_tera.png`,
  },
  {
    name: 'ほのお',
    battleIndex: '9',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fire.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fire_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fire_tera.png`,
  },
  {
    name: 'みず',
    battleIndex: '10',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/water.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/water_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/water_tera.png`,
  },
  {
    name: 'でんき',
    battleIndex: '12',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/electric.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/electric_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/electric_tera.png`,
  },
  {
    name: 'くさ',
    battleIndex: '11',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/grass.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/grass_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/grass_tera.png`,
  },
  {
    name: 'こおり',
    battleIndex: '14',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ice.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ice_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ice_tera.png`,
  },
  {
    name: 'かくとう',
    battleIndex: '1',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fighting.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fighting_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fighting_tera.png`,
  },
  {
    name: 'どく',
    battleIndex: '3',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/poison.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/poison_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/poison_tera.png`,
  },
  {
    name: 'じめん',
    battleIndex: '4',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ground.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ground_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ground_tera.png`,
  },
  {
    name: 'ひこう',
    battleIndex: '2',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/flying.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/flying_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/flying_tera.png`,
  },
  {
    name: 'エスパー',
    battleIndex: '13',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/psychic.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/psychic_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/psychic_tera.png`,
  },
  {
    name: 'むし',
    battleIndex: '6',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/bug.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/bug_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/bug_tera.png`,
  },
  {
    name: 'いわ',
    battleIndex: '5',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/rock.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/rock_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/rock_tera.png`,
  },
  {
    name: 'ゴースト',
    battleIndex: '7',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ghost.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ghost_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/ghost_tera.png`,
  },
  {
    name: 'ドラゴン',
    battleIndex: '15',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/dragon.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/dragon_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/dragon_tera.png`,
  },
  {
    name: 'あく',
    battleIndex: '16',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/dark.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/dark_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/dark_tera.png`,
  },
  {
    name: 'はがね',
    battleIndex: '8',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/steel.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/steel_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/steel_tera.png`,
  },
  {
    name: 'フェアリー',
    battleIndex: '17',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fairy.png`,
    textImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fairy_text.png`,
    terastalImageUrl: `${process.env.BUCKET_URL}/pokemon/sv/types/fairy_tera.png`,
  },
]

export const insertType = async () => {
  try {
    const data = types

    console.log('Seeding type...')

    const result = await db.type.createMany({ data })

    console.log('type done.', result)
  } catch (error) {
    console.error(error)
  }
}
