import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export const insertUser = async () => {
  try {
    const user: Prisma.UserCreateArgs['data'] = {
      createdUserAt: new Date(),
      updatedUserAt: new Date(),
      name: 'Trainer',
    }

    console.log('Seeding user...')

    const result = await db.user.create({ data: user })

    console.log('user done.', result.id)
  } catch (error) {
    console.error(error)
  }
}
