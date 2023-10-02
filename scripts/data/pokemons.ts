import type { Prisma } from '@prisma/client'
import { getAllPokemons } from 'api/src/external/api/coconut/sv/getAllPokemons'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

const formDictionary = [
  { name: '♀', official: 'メス' },
  { name: '♂', official: 'オス' },
  { name: '黒馬', official: 'こくば' },
  { name: '白馬', official: 'はくば' },
  { name: '霊獣', official: 'れいじゅう' },
  { name: '化身', official: 'けしん' },
  { name: 'パルデア単', official: 'コンバット種' },
  { name: 'パルデア水', official: 'ウォーター種' },
  { name: 'パルデア炎', official: 'ブレイズ種' },
] as const

const convertToOfficialFormName = (name: string) => {
  return formDictionary.find((form) => form.name === name)?.official ?? name
}

export const insertPokemon = async () => {
  console.log('Seeding pokemon...')
  try {
    const { pokemons: assetPokemons } = await getAssetNames()
    const pokemons = await getAllPokemons()

    const baseTypes = await db.type.findMany()
    const baseAbilities = await db.ability.findMany()
    const baseMoves = await db.move.findMany()
    const baseForms = await db.form.findMany()

    for (const pokemon of pokemons) {
      const fixedForm = convertToOfficialFormName(pokemon.form)

      const typeIds = pokemon.types.map(
        (type) => baseTypes.find((t) => t.name === type)?.id ?? ''
      )

      const abilityIds = pokemon.abilities
        .map(
          (ability) => baseAbilities.find((a) => a.name === ability)?.id ?? ''
        )
        // 誤って過去作の技も取得しているため
        .filter((e) => e !== '')

      const moveIds = pokemon.moves
        .map((move) => baseMoves.find((m) => m.name === move)?.id ?? '')
        // 誤って過去作の技も取得しているため
        .filter((e) => e !== '')

      const battleIndex =
        assetPokemons.find((p) => p.name === pokemon.name)?.id ?? ''

      const battleFormData = baseForms
        .filter((form) => form.no === pokemon.no)
        .find((form) => form.name.includes(fixedForm) && pokemon.form)
      let battleFormIndex = ''
      if (battleFormData) {
        battleFormIndex = battleFormData.formType2
          ? `${battleFormData.no}_${battleFormData.formType}_${battleFormData.formType2}`
          : `${battleFormData.no}_${battleFormData.formType}`
      }

      const data: Prisma.PokemonCreateArgs['data'] = {
        name: pokemon.name,
        form: fixedForm,
        no: pokemon.no,
        height: parseFloat(pokemon.height.match(/\d+(\.\d+)?/)?.[0] ?? '0'),
        weight: parseFloat(pokemon.weight.match(/\d+(\.\d+)?/)?.[0] ?? '0'),
        statusH: pokemon.baseStats.h,
        statusA: pokemon.baseStats.a,
        statusB: pokemon.baseStats.b,
        statusC: pokemon.baseStats.c,
        statusD: pokemon.baseStats.d,
        statusS: pokemon.baseStats.s,
        types: {
          connect: typeIds.map((id) => ({ id })),
        },
        abilities: {
          connect: abilityIds.map((id) => ({ id })),
        },
        moves: {
          connect: moveIds.map((id) => ({ id })),
        },
        imageUrl: pokemon.imageUrl,
        base64Image: pokemon.image,
        url: pokemon.url,
        battleIndex,
        battleFormIndex,
      }

      await db.pokemon.create({ data })
    }

    console.log('Done.', pokemons.length)
  } catch (error) {
    // console.error(error)
  }
}

// const formatted: Prisma.PokemonCreateArgs['data'][] = await Promise.all(
//   pokemons.map(async (pokemon) => {
//     const abilities = await db.ability.findMany({
//       where: { name: { in: pokemon.abilities } },
//     })

//     const moves = await db.move.findMany({
//       where: { name: { in: pokemon.moves } },
//     })

//     const battleIndex =
//       assetPokemons.find((p) => p.name === pokemon.name)?.id ?? ''

//     return {
//       name: pokemon.name,
//       form: pokemon.form,
//       no: pokemon.no,
//       height: parseFloat(pokemon.height.match(/\d+(\.\d+)?/)?.[0] ?? '0'),
//       weight: parseFloat(pokemon.weight.match(/\d+(\.\d+)?/)?.[0] ?? '0'),

//       statusH: pokemon.baseStats.h,
//       statusA: pokemon.baseStats.a,
//       statusB: pokemon.baseStats.b,
//       statusC: pokemon.baseStats.c,
//       statusD: pokemon.baseStats.d,
//       statusS: pokemon.baseStats.s,

//       types: {
//         connectOrCreate: [{ where: { name: 'ほのお' } }],
//       },
//       abilities: abilities,
//       moves: moves,

//       imageUrl: pokemon.imageUrl,
//       base64Image: pokemon.image,
//       url: pokemon.url,
//       battleIndex,
//     }
//   })
// )
