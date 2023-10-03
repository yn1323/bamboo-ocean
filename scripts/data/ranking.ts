import console from 'console'

import type { Prisma } from '@prisma/client'
import { getBattleData } from 'api/src/external/api/coconut/sv/getBattleData'
import { getBattleRanking } from 'api/src/external/api/coconut/sv/getBattleRanking'
import { db } from 'api/src/lib/db'
import { jaDateTime } from 'api/src/lib/time'

// Formはあるが全部同じ扱いにしたい
const formException = [
  '550', // バスラオ
  '666', // ビビヨン
  '978', // シャリタツ
  '931', // イキリンコ
]

const getFormId = (no: string, form: string) => {
  if (form === '0') return ''
  if (formException.includes(no)) return ''

  return `${no}_${form.padStart(3, '0')}`
}

export const insertRanking = async () => {
  try {
    const createdAt = new Date()
    const battleRanking = await getBattleRanking()
    const battleData = await getBattleData()

    const baseForms = await db.form.findMany()
    const baseMoves = await db.move.findMany()
    const baseAbilities = await db.ability.findMany()
    const baseNature = await db.nature.findMany()
    const baseItem = await db.item.findMany()
    const baseTypes = await db.type.findMany()

    const basePokemons = await db.pokemon.findMany()

    // add 9 hours
    new Date().setHours(new Date().getHours() + 9)

    const { id: battleIndexId } = await db.battleIndex.create({
      data: {
        createdAt,
        startAt: jaDateTime(new Date(battleRanking.start)),
        endAt: jaDateTime(new Date(battleRanking.end)),
        name: battleRanking.name,
      },
    })

    console.log('seeding battle ranking...')

    const resultRank = await Promise.all(
      battleRanking.rank.map(async ({ id, form }, i) => {
        const pokemonId =
          form !== '0'
            ? basePokemons.find((poke) =>
                poke.battleFormIndex.includes(`${id}_${form.padStart(3, '0')}`)
              )?.id
            : basePokemons.find((poke) => poke.battleIndex === id)?.id

        if (!pokemonId) {
          console.error(`targetPokemonId is not found.[${id}]`)
          return
        }

        const data = {
          battleIndexId,
          pokemonId,
          rank: i + 1,
        }

        await db.battleRanking.create({ data })
      })
    )

    console.log('Done', resultRank.length)

    console.log('seeding battle data...')

    const resultBattleData = await Promise.all(
      battleData.data.map(async (pokemon) => {
        try {
          const { abilities, form, items, moves, natures, no, terastals } =
            pokemon
          const pokeModelFormId = getFormId(no, form)
          const formId = baseForms.find((f) => f.id === pokeModelFormId)?.id
          const pokemonId =
            basePokemons.find((poke) =>
              poke.battleFormIndex.includes(`${no}_${form.padStart(3, '0')}`)
            )?.id ??
            basePokemons.find((poke) => poke.battleIndex === no)?.id ??
            ''
          const battleDataMove = moves
            .map((move) => ({
              moveId:
                baseMoves.find(({ battleIndex }) => battleIndex === move.id)
                  ?.id ?? '',
              rate: move.rate,
            }))
            .filter(({ moveId }) => moveId)
          const battleDataAbility = abilities
            .map((ability) => ({
              abilityId:
                baseAbilities.find(
                  ({ battleIndex }) => battleIndex === ability.id
                )?.id ?? '',
              rate: ability.rate,
            }))
            .filter(({ abilityId }) => abilityId)
          const battleDataNature = natures
            .map((nature) => ({
              natureId:
                baseNature.find(({ battleIndex }) => battleIndex === nature.id)
                  ?.id ?? '',
              rate: nature.rate,
            }))
            .filter(({ natureId }) => natureId)
          const battleDataItem = items
            .map((item) => ({
              itemId:
                baseItem.find(({ battleIndex }) => battleIndex === item.id)
                  ?.id ?? '',
              rate: item.rate,
            }))
            .filter(({ itemId }) => itemId)
          const battleDataTerastal = terastals.map((terastal) => ({
            typeId:
              baseTypes.find(({ battleIndex }) => battleIndex === terastal.id)
                ?.id ?? '',
            rate: terastal.rate,
          }))

          const data: Prisma.BattleDataCreateArgs['data'] = {
            battleIndexId,
            pokemonId,
            no,
            formId: formId,
            rank:
              battleRanking.rank.findIndex(
                (rank) => rank.id === no && rank.form === form
              ) + 1,
          }

          const { id: battleDataId } = await db.battleData.create({ data })

          await Promise.all(
            [
              async () =>
                await db.battleDataMove.createMany({
                  data: battleDataMove.map((e) => ({
                    ...e,
                    battleDataId,
                  })),
                }),
              async () =>
                await db.battleDataAbility.createMany({
                  data: battleDataAbility.map((e) => ({
                    ...e,
                    battleDataId,
                  })),
                }),
              async () =>
                await db.battleDataNature.createMany({
                  data: battleDataNature.map((e) => ({
                    ...e,
                    battleDataId,
                  })),
                }),
              async () =>
                await db.battleDataItem.createMany({
                  data: battleDataItem.map((e) => ({
                    ...e,
                    battleDataId,
                  })),
                }),
              async () =>
                await db.battleDataTerastal.createMany({
                  data: battleDataTerastal.map((e) => ({
                    ...e,
                    battleDataId,
                  })),
                }),
            ].map((fn) => fn())
          )
        } catch (e) {
          console.log(e)
          console.log('Error', pokemon)
        }
      })
    )
    console.log('Done', resultBattleData.length)
  } catch (error) {
    console.error(error)
  }
}
