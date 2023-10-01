import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const attackType: Prisma.AttackTypeCreateArgs['data'][] = [
  { name: '物理' },
  { name: '特殊' },
  { name: '変化' },
]

export const insertAttackType = async () => {
  try {
    const data = attackType

    console.log('Seeding attack type...')

    const result = await db.attackType.createMany({ data })

    console.log('Done.', result)
  } catch (error) {
    console.error(error)
  }
}
