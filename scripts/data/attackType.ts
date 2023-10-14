import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const attackType: Prisma.AttackTypeCreateArgs['data'][] = [
  {
    name: '物理',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/attackTypes/physic_sv.png`,
  },
  {
    name: '特殊',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/attackTypes/special_sv.png`,
  },
  {
    name: '変化',
    imageUrl: `${process.env.BUCKET_URL}/pokemon/sv/attackTypes/status_sv.png`,
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
