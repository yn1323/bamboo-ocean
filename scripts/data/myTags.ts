import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export const insertMyTags = async () => {
  try {
    const user = await db.user.findFirst()
    if (!user || !user.id) return

    const partyTags: Prisma.MyPartyTagCreateArgs['data'][] = [
      {
        userId: user.id,
        // user: { connect: { id: user.id } },
        favorite: false,
        memo: '',
        name: '仮想敵',
        teamId: '1222',
      },
      {
        userId: user.id,
        // user: { connect: { id: user.id } },
        favorite: false,
        memo: 'いつもの！',
        name: 'いつもの',
        teamId: '1',
      },
    ]

    const pokemonTags: Prisma.MyPokemonTagCreateArgs['data'][] = [
      {
        userId: user.id,
        // user: { connect: { id: user.id } },
        favorite: false,
        memo: '',
        name: '仮想敵',
      },
      {
        userId: user.id,
        // user: { connect: { id: user.id } },
        favorite: false,
        memo: 'いつもの！',
        name: 'いつもの',
      },
    ]
    console.log('Seeding my tags...')

    await Promise.all(
      [
        async () => await db.myPartyTag.createMany({ data: partyTags }),
        async () => await db.myPokemonTag.createMany({ data: pokemonTags }),
      ].map((fn) => fn())
    )

    console.log('tags done.')
  } catch (error) {
    console.error(error)
  }
}
