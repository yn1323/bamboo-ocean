import console from 'console'

import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export const insertMyCalc = async () => {
  try {
    const user = await db.user.findFirst()

    const basePartyTags = await db.myPartyTag.findFirst()
    const basePokemonTags = await db.myPokemonTag.findFirst()

    const baseAbility = await db.ability.findFirst()
    const basePokemon = await db.pokemon.findFirst()
    const baseItem = await db.item.findFirst()
    const baseNature = await db.nature.findFirst()
    const baseMoves = await db.move.findMany({
      take: 10,
    })
    const baseType = await db.type.findFirst()

    if (!user || !basePartyTags || !basePokemonTags) return

    console.log('Seeding my calculation...')

    const myCalc: Prisma.MyDamageCalcCreateInput = {
      evH: 0,
      evA: 4,
      evB: 0,
      evC: 252,
      evD: 0,
      evS: 252,
      ivH: 31,
      ivA: 31,
      ivB: 31,
      ivC: 31,
      ivD: 31,
      ivS: 31,
      rankA: 0,
      rankB: 0,
      rankC: 0,
      rankD: 0,
      rankS: 0,
      side: 'attack',
      order: 0,
      clientId: 'clientId',

      ability: { connect: { id: baseAbility?.id } },
      item: { connect: { id: baseItem?.id } },
      nature: { connect: { id: baseNature?.id } },
      moves: {
        connect: baseMoves
          ?.filter((move) => move.power > 0)
          .filter((_, i) => i < 4)
          .map((move) => ({ id: move.id })),
      },
      pokemon: { connect: { id: basePokemon?.id } },
      terastal: { connect: { id: baseType?.id } },
    }

    const calc = await db.myDamageCalc.create({ data: myCalc })

    const myDamageCalcIndex: Prisma.MyDamageCalcIndexCreateInput = {
      title: 'Calc1',
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      memo: 'memo',
      user: { connect: { id: user?.id } },
      myDamageCalc: {
        connect: [{ id: calc.id }],
      },
    }

    await db.myDamageCalcIndex.create({ data: myDamageCalcIndex })

    console.log('my data calc.')
  } catch (error) {
    console.error(error)
  }
}
