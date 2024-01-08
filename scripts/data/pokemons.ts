import type { Prisma } from '@prisma/client'
import { getAllPokemons } from 'api/src/external/api/coconut/sv/getAllPokemons'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

import { readImage } from './helpers/read'

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

const convertToOfficialFormName = ({
  form,
  name,
}: {
  form: string
  name: string
}) => {
  if (name === 'ザマゼンタ') {
    return 'たてのおう'
  } else if (name === 'ザシアン') {
    return 'けんのおう'
  }
  return (
    formDictionary.find((dictionary) => dictionary.name === form)?.official ??
    form
  )
}

const convertToOfficialName = (name: string) => {
  if (name === 'ポリゴン2') return 'ポリゴン２'
  if (name === 'ポリゴンZ') return 'ポリゴンＺ'
  return name
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

    const pokemonIdMemo: {
      name: string
      id: string
      evolutionFrom: string[]
      evolutionTo: string[]
    }[] = []

    await Promise.all(
      pokemons.map(async (pokemon) => {
        if (!pokemon.no) {
          console.log('Maybe undefined  pokemon found')
          return
        }
        try {
          const fixedForm = convertToOfficialFormName({
            form: pokemon.form,
            name: pokemon.name,
          })

          const typeIds = pokemon.types.map(
            (type) => baseTypes.find((t) => t.name === type)?.id ?? ''
          )

          const abilityIds = pokemon.abilities
            .map(
              (ability) =>
                baseAbilities.find((a) => a.name === ability)?.id ?? ''
            )
            // 誤って過去作の技も取得しているため
            .filter((e) => e !== '')

          const moveIds = pokemon.moves
            .map((move) => baseMoves.find((m) => m.name === move)?.id ?? '')
            // 誤って過去作の技も取得しているため
            .filter((e) => e !== '')

          const battleIndex =
            assetPokemons.find(
              (p) => p.name === convertToOfficialName(pokemon.name)
            )?.id ?? ''

          const battleFormData = baseForms
            .filter((form) => form.no === pokemon.no)
            .find((form) => form.name.includes(fixedForm) && pokemon.form)
          let battleFormIndex = ''
          if (battleFormData) {
            battleFormIndex = battleFormData.formType2
              ? `${battleFormData.no}_${battleFormData.formType}_${battleFormData.formType2}`
              : `${battleFormData.no}_${battleFormData.formType}`
          }

          const fileName = battleFormIndex
            ? `pokemon${battleFormIndex}.png`
            : `pokemon${pokemon.no}.png`
          const base64Image = await readImage(
            `../../assets/pokemons/${fileName}`,
            { showLog: true }
          )

          const data: Prisma.PokemonCreateArgs['data'] = {
            name: convertToOfficialName(pokemon.name),
            form: fixedForm,
            no: parseInt(pokemon.no),
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
            base64Image,
            imageUrl: base64Image
              ? `${process.env.BUCKET_URL}/pokemon/sv/pokemons/128/${fileName}`
              : '',
            imageSmallUrl: base64Image
              ? `${process.env.BUCKET_URL}/pokemon/sv/pokemons/64/${fileName}`
              : '',
            imageLargeUrl: base64Image
              ? `${process.env.BUCKET_URL}/pokemon/sv/pokemons/256/${fileName}`
              : '',
            url: pokemon.url,
            battleIndex,
            battleFormIndex,
          }
          const r = await db.pokemon.create({ data })
          pokemonIdMemo.push({
            name: pokemon.name,
            id: r.id,
            // 難しい進化は複雑になる可能性があるため重複を削除
            evolutionFrom: Array.from(
              new Set(
                pokemon.evolutionFrom.map((e) => convertToOfficialName(e))
              )
            ),
            evolutionTo: Array.from(
              new Set(pokemon.evolutionTo.map((e) => convertToOfficialName(e)))
            ),
          })
        } catch (e) {
          console.log(`error: [${pokemon.no}] ${pokemon.name}`)
          console.log(e)
        }
      })
    )

    console.log('pokemon Done.', pokemons.length)

    const evolutionResult = await Promise.all(
      pokemonIdMemo.map(async (p) => {
        if (p.evolutionFrom.length === 0 && p.evolutionTo.length === 0) {
          return
        }
        const data: Prisma.EvolutionCreateArgs['data'] = {
          pokemonId: p.id,
          // なぜか逆
          to: {
            connect: p.evolutionFrom.map((from) => ({
              id: pokemonIdMemo.find((p) => p.name === from)?.id ?? '',
            })),
          },
          from: {
            connect: p.evolutionTo.map((to) => ({
              id: pokemonIdMemo.find((p) => p.name === to)?.id ?? '',
            })),
          },
        }

        await db.evolution.create({ data })
      })
    )

    console.log('Evolution Done.', evolutionResult.length)
  } catch (error) {
    console.error(error)
  }
}
