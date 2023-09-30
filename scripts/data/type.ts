import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const types: Prisma.TypeCreateArgs['data'][] = [
  { name: 'ノーマル', dataIndex: '0' },
  { name: 'ほのお', dataIndex: '9' },
  { name: 'みず', dataIndex: '10' },
  { name: 'でんき', dataIndex: '12' },
  { name: 'くさ', dataIndex: '11' },
  { name: 'こおり', dataIndex: '14' },
  { name: 'かくとう', dataIndex: '1' },
  { name: 'どく', dataIndex: '3' },
  { name: 'じめん', dataIndex: '4' },
  { name: 'ひこう', dataIndex: '2' },
  { name: 'エスパー', dataIndex: '13' },
  { name: 'むし', dataIndex: '6' },
  { name: 'いわ', dataIndex: '5' },
  { name: 'ゴースト', dataIndex: '7' },
  { name: 'ドラゴン', dataIndex: '15' },
  { name: 'あく', dataIndex: '16' },
  { name: 'はがね', dataIndex: '8' },
  { name: 'フェアリー', dataIndex: '17' },
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
