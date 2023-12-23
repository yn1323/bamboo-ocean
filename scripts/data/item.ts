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
      assetItems.map(async (item) => {
        const fileName = `item${item.id.padStart(4, '0')}.png`
        const base64Image = await readImage(`../../assets/items/${fileName}`)
        const itemInfo = items.find((i) => i.name === item.name)

        return {
          battleIndex: item.id,
          name: item.name,
          detail: itemInfo?.detail ?? '',
          type: itemInfo?.type ?? '',
          order: itemInfo?.order ?? '',
          base64Image,
          imageUrl: base64Image
            ? `${process.env.BUCKET_URL}/pokemon/sv/items/128/${fileName}`
            : '',
          imageSmallUrl: base64Image
            ? `${process.env.BUCKET_URL}/pokemon/sv/items/64/${fileName}`
            : '',
          imageLargeUrl: base64Image
            ? `${process.env.BUCKET_URL}/pokemon/sv/items/256/${fileName}`
            : '',
        }
      })
    )

    console.log('Seeding item...')

    // 画像のないアイテムは除外
    const result = await db.item.createMany({
      data: formattedItems.filter((item) => item.type),
    })

    console.log('item done.', result)
  } catch (error) {
    console.error(error)
  }
}
