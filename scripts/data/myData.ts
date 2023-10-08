import console from 'console'

import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export const insertMyData = async () => {
  try {
    const user = await db.user.findFirst()

    const basePartyTags = await db.myPartyTag.findFirst()
    const basePokemonTags = await db.myPokemonTag.findFirst()

    const baseAbility = await db.ability.findFirst()
    const basePokemon = await db.pokemon.findFirst()
    const baseItem = await db.item.findFirst()
    const baseNature = await db.nature.findFirst()
    const baseMoves = await db.move.findMany({
      take: 4,
    })
    const baseType = await db.type.findFirst()

    if (!user || !basePartyTags || !basePokemonTags) return

    console.log('Seeding my data...')

    const myPokemon: Prisma.MyPokemonCreateInput = {
      name: '',
      evH: 0,
      evA: 4,
      evB: 0,
      evC: 252,
      evD: 0,
      evS: 252,
      favorite: false,
      memo: '',
      ability: { connect: { id: baseAbility?.id } },
      item: { connect: { id: baseItem?.id } },
      nature: { connect: { id: baseNature?.id } },
      moves: {
        connect: baseMoves?.map((move) => ({ id: move.id })),
      },
      pokemon: { connect: { id: basePokemon?.id } },
      tag: {
        connect: [{ id: basePokemonTags?.id }],
      },
      terastal: { connect: { id: baseType?.id } },
      user: { connect: { id: user?.id } },
    }

    const poke = await db.myPokemon.create({ data: myPokemon })

    const myParty: Prisma.MyPartyCreateInput = {
      name: 'Party1',
      favorite: false,
      memo: '',
      user: { connect: { id: user?.id } },
      myPokemon: {
        connect: [{ id: poke.id }],
      },
      tag: {
        connect: [{ id: basePartyTags?.id }],
      },
    }

    await db.myParty.create({ data: myParty })

    console.log('my data done.')
  } catch (error) {
    console.error(error)
  }
}
