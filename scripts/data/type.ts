import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const types: Prisma.TypeCreateArgs['data'][] = [
  { name: 'ノーマル', battleIndex: '0' },
  { name: 'ほのお', battleIndex: '9' },
  { name: 'みず', battleIndex: '10' },
  { name: 'でんき', battleIndex: '12' },
  { name: 'くさ', battleIndex: '11' },
  { name: 'こおり', battleIndex: '14' },
  { name: 'かくとう', battleIndex: '1' },
  { name: 'どく', battleIndex: '3' },
  { name: 'じめん', battleIndex: '4' },
  { name: 'ひこう', battleIndex: '2' },
  { name: 'エスパー', battleIndex: '13' },
  { name: 'むし', battleIndex: '6' },
  { name: 'いわ', battleIndex: '5' },
  { name: 'ゴースト', battleIndex: '7' },
  { name: 'ドラゴン', battleIndex: '15' },
  { name: 'あく', battleIndex: '16' },
  { name: 'はがね', battleIndex: '8' },
  { name: 'フェアリー', battleIndex: '17' },
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
