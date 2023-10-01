import type { Prisma } from '@prisma/client'
import { getAllItems } from 'api/src/external/api/coconut/sv/getAllItems'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

export const insertItem = async () => {
  try {
    const { items: assetItems } = await getAssetNames()
    const items = await getAllItems()

    const formattedItems: Prisma.ItemCreateArgs['data'][] = assetItems.map(
      (item) => ({
        battleIndex: item.id,
        name: item.name,
        detail: items.find((i) => i.name === item.name)?.detail ?? '',
      })
    )

    console.log('Seeding item...')

    const result = await db.item.createMany({ data: formattedItems })

    console.log('Done.', result)
  } catch (error) {
    console.error(error)
  }
}
