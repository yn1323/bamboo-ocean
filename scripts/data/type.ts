import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const types: Prisma.TypeCreateArgs['data'][] = [
  { name: 'ノーマル' },
  { name: 'ほのお' },
  { name: 'みず' },
  { name: 'でんき' },
  { name: 'くさ' },
  { name: 'こおり' },
  { name: 'かくとう' },
  { name: 'どく' },
  { name: 'じめん' },
  { name: 'ひこう' },
  { name: 'エスパー' },
  { name: 'むし' },
  { name: 'いわ' },
  { name: 'ゴースト' },
  { name: 'ドラゴン' },
  { name: 'あく' },
  { name: 'はがね' },
  { name: 'フェアリー' },
]

export const insertType = async () => {
  try {
    const data = types

    console.log('Seeding type...')

    const result = await db.type.createMany({ data })

    console.log('Done.', result)
  } catch (error) {
    console.error(error)
  }
}
