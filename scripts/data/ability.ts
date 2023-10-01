import type { Prisma } from '@prisma/client'
import { getAllAbilities } from 'api/src/external/api/coconut/sv/getAllAbilities'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

export const insertAbility = async () => {
  try {
    const { abilities: assetAbilities } = await getAssetNames()
    const abilities = await getAllAbilities()

    const formattedItems: Prisma.AbilityCreateArgs['data'][] =
      assetAbilities.map((ability) => ({
        battleIndex: ability.id,
        name: ability.name,
        detail: abilities.find((i) => i.name === ability.name)?.detail ?? '',
      }))

    console.log('Seeding ability...')

    const result = await db.ability.createMany({ data: formattedItems })

    console.log('Done.', result)
  } catch (error) {
    console.error(error)
  }
}
