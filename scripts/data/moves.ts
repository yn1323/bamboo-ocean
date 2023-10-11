import console from 'console'

import type { Prisma } from '@prisma/client'
import { getAllMoves } from 'api/src/external/api/coconut/sv/getAllMoves'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

export const insertMove = async () => {
  try {
    const { moves: assetMoves } = await getAssetNames()
    const moves = await getAllMoves()
    const types = await db.type.findMany()
    const attackTypes = await db.attackType.findMany()

    const formatted: Prisma.MoveCreateArgs['data'][] = moves.map((move) => {
      const attackTypeId =
        attackTypes.find((attackType) => attackType.name === move.attackType)
          ?.id ?? ''
      const typeId = types.find((type) => type.name === move.type)?.id ?? ''
      const battleIndex =
        assetMoves.find((assetMove) => assetMove.name === move.name)?.id ?? ''

      return {
        detail: move.text,
        name: move.name,
        typeId,
        attackTypeId,
        power: move.power,
        accuracy: move.accuracy,
        pp: move.pp,
        isContact: move.isContact,
        isQuick: move.isQuick,
        isDelay: move.isDelay,
        isChangeable: move.isChangeable,
        isMultipleAttack: move.isMultipleAttack,
        isMustCritical: move.isMustCritical,
        isPunch: move.isPunch,
        isSound: move.isSound,
        isPowder: move.isPowder,
        isWave: move.isWave,
        isJaw: move.isJaw,
        isBullet: move.isBullet,
        isDance: move.isDance,
        isWind: move.isWind,
        isCut: move.isCut,

        battleIndex,
      }
    })

    console.log('Seeding move...')

    const result = await db.move.createMany({ data: formatted })

    console.log('move done.', result)
  } catch (error) {
    console.error(error)
  }
}
