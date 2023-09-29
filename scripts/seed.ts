import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const data: Prisma.CountryCreateArgs['data'][] = [
      { name: 'United States', name2: 'USA' },
      { name: 'Canada', name2: 'CAN' },
      { name: 'Mexico', name2: 'MEX' },
    ]

    console.log('Seeding countries ...')

    const countries = await db.country.createMany({ data })

    console.log('Done.', countries)
  } catch (error) {
    console.error(error)
  }
}
