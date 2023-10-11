import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const attackType: Prisma.AttackTypeCreateArgs['data'][] = [
  {
    name: '物理',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/attackTypes/physic.png`,
  },
  {
    name: '特殊',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/attackTypes/special.png`,
  },
  {
    name: '変化',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/attackTypes/status.png`,
  },
]

export const insertAttackType = async () => {
  try {
    const data = attackType

    console.log('Seeding attack type...')

    const result = await db.attackType.createMany({ data })

    console.log('atack type done.', result)
  } catch (error) {
    console.error(error)
  }
}
