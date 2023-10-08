import type { Prisma } from '@prisma/client'
import { getAllItems } from 'api/src/external/api/coconut/sv/getAllItems'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

import { readImage } from './helpers/read'

export const insertItem = async () => {
  try {
    const { items: assetItems } = await getAssetNames()
    const items = await getAllItems()

    const formattedItems: Prisma.ItemCreateArgs['data'][] = await Promise.all(
      assetItems.map(async (item) => ({
        battleIndex: item.id,
        name: item.name,
        detail: items.find((i) => i.name === item.name)?.detail ?? '',
        base64Image: await readImage(
          `../../assets/items/item_${item.id.padStart(4, '0')}.png`
        ),
      }))
    )

    console.log('Seeding item...')

    const result = await db.item.createMany({ data: formattedItems })

    console.log('item done.', result)
  } catch (error) {
    console.error(error)
  }
}
