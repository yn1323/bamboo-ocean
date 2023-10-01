import { db } from 'api/src/lib/db'

type Nature = {
  battleIndex: `${number}`
  name: string
  increase: '' | 'statusA' | 'statusB' | 'statusC' | 'statusD' | 'statusS'
  decrease: '' | 'statusA' | 'statusB' | 'statusC' | 'statusD' | 'statusS'
}

const natures: Nature[] = [
  { battleIndex: '0', name: 'がんばりや', increase: '', decrease: '' },
  {
    battleIndex: '1',
    name: 'さみしがり',
    increase: 'statusA',
    decrease: 'statusB',
  },
  {
    battleIndex: '2',
    name: 'ゆうかん',
    increase: 'statusA',
    decrease: 'statusS',
  },
  {
    battleIndex: '3',
    name: 'いじっぱり',
    increase: 'statusA',
    decrease: 'statusC',
  },
  {
    battleIndex: '4',
    name: 'やんちゃ',
    increase: 'statusA',
    decrease: 'statusD',
  },
  {
    battleIndex: '5',
    name: 'ずぶとい',
    increase: 'statusB',
    decrease: 'statusA',
  },
  { battleIndex: '6', name: 'すなお', increase: '', decrease: '' },
  {
    battleIndex: '7',
    name: 'のんき',
    increase: 'statusB',
    decrease: 'statusS',
  },
  {
    battleIndex: '8',
    name: 'わんぱく',
    increase: 'statusB',
    decrease: 'statusC',
  },
  {
    battleIndex: '9',
    name: 'のうてんき',
    increase: 'statusB',
    decrease: 'statusD',
  },
  {
    battleIndex: '10',
    name: 'おくびょう',
    increase: 'statusS',
    decrease: 'statusA',
  },
  {
    battleIndex: '11',
    name: 'せっかち',
    increase: 'statusS',
    decrease: 'statusB',
  },
  { battleIndex: '12', name: 'まじめ', increase: '', decrease: '' },
  {
    battleIndex: '13',
    name: 'ようき',
    increase: 'statusS',
    decrease: 'statusC',
  },
  {
    battleIndex: '14',
    name: 'むじゃき',
    increase: 'statusS',
    decrease: 'statusD',
  },
  {
    battleIndex: '15',
    name: 'ひかえめ',
    increase: 'statusC',
    decrease: 'statusA',
  },
  {
    battleIndex: '16',
    name: 'おっとり',
    increase: 'statusC',
    decrease: 'statusB',
  },
  {
    battleIndex: '17',
    name: 'れいせい',
    increase: 'statusC',
    decrease: 'statusS',
  },
  { battleIndex: '18', name: 'てれや', increase: '', decrease: '' },
  {
    battleIndex: '19',
    name: 'うっかりや',
    increase: 'statusC',
    decrease: 'statusD',
  },
  {
    battleIndex: '20',
    name: 'おだやか',
    increase: 'statusD',
    decrease: 'statusA',
  },
  {
    battleIndex: '21',
    name: 'おとなしい',
    increase: 'statusD',
    decrease: 'statusB',
  },
  {
    battleIndex: '22',
    name: 'なまいき',
    increase: 'statusD',
    decrease: 'statusS',
  },
  {
    battleIndex: '23',
    name: 'しんちょう',
    increase: 'statusD',
    decrease: 'statusC',
  },
  { battleIndex: '24', name: 'きまぐれ', increase: '', decrease: '' },
]

export const insertNature = async () => {
  try {
    console.log('Seeding nature...')

    const result = await db.nature.createMany({ data: natures })

    console.log('Done.', result)
  } catch (error) {
    console.error(error)
  }
}
