/* eslint-disable @typescript-eslint/no-unused-vars */
import console from 'console'

import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

// Control + EnterのGitHubCopilot suggestが楽
const relations = [
  { from: 'ノーマル', to: 'ノーマル', ratio: 1 },
  { from: 'ノーマル', to: 'ほのお', ratio: 1 },
  { from: 'ノーマル', to: 'みず', ratio: 1 },
  { from: 'ノーマル', to: 'でんき', ratio: 1 },
  { from: 'ノーマル', to: 'くさ', ratio: 1 },
  { from: 'ノーマル', to: 'こおり', ratio: 1 },
  { from: 'ノーマル', to: 'かくとう', ratio: 1 },
  { from: 'ノーマル', to: 'どく', ratio: 1 },
  { from: 'ノーマル', to: 'じめん', ratio: 1 },
  { from: 'ノーマル', to: 'ひこう', ratio: 1 },
  { from: 'ノーマル', to: 'エスパー', ratio: 1 },
  { from: 'ノーマル', to: 'むし', ratio: 1 },
  { from: 'ノーマル', to: 'いわ', ratio: 0.5 },
  { from: 'ノーマル', to: 'ゴースト', ratio: 0 },
  { from: 'ノーマル', to: 'ドラゴン', ratio: 1 },
  { from: 'ノーマル', to: 'あく', ratio: 1 },
  { from: 'ノーマル', to: 'はがね', ratio: 0.5 },
  { from: 'ノーマル', to: 'フェアリー', ratio: 1 },
  { from: 'ほのお', to: 'ノーマル', ratio: 1 },
  { from: 'ほのお', to: 'ほのお', ratio: 0.5 },
  { from: 'ほのお', to: 'みず', ratio: 0.5 },
  { from: 'ほのお', to: 'でんき', ratio: 1 },
  { from: 'ほのお', to: 'くさ', ratio: 2 },
  { from: 'ほのお', to: 'こおり', ratio: 2 },
  { from: 'ほのお', to: 'かくとう', ratio: 1 },
  { from: 'ほのお', to: 'どく', ratio: 1 },
  { from: 'ほのお', to: 'じめん', ratio: 1 },
  { from: 'ほのお', to: 'ひこう', ratio: 1 },
  { from: 'ほのお', to: 'エスパー', ratio: 1 },
  { from: 'ほのお', to: 'むし', ratio: 2 },
  { from: 'ほのお', to: 'いわ', ratio: 0.5 },
  { from: 'ほのお', to: 'ゴースト', ratio: 1 },
  { from: 'ほのお', to: 'ドラゴン', ratio: 0.5 },
  { from: 'ほのお', to: 'あく', ratio: 1 },
  { from: 'ほのお', to: 'はがね', ratio: 2 },
  { from: 'ほのお', to: 'フェアリー', ratio: 1 },
  { from: 'みず', to: 'ノーマル', ratio: 1 },
  { from: 'みず', to: 'ほのお', ratio: 2 },
  { from: 'みず', to: 'みず', ratio: 0.5 },
  { from: 'みず', to: 'でんき', ratio: 1 },
  { from: 'みず', to: 'くさ', ratio: 0.5 },
  { from: 'みず', to: 'こおり', ratio: 1 },
  { from: 'みず', to: 'かくとう', ratio: 1 },
  { from: 'みず', to: 'どく', ratio: 1 },
  { from: 'みず', to: 'じめん', ratio: 2 },
  { from: 'みず', to: 'ひこう', ratio: 1 },
  { from: 'みず', to: 'エスパー', ratio: 1 },
  { from: 'みず', to: 'むし', ratio: 1 },
  { from: 'みず', to: 'いわ', ratio: 2 },
  { from: 'みず', to: 'ゴースト', ratio: 1 },
  { from: 'みず', to: 'ドラゴン', ratio: 0.5 },
  { from: 'みず', to: 'あく', ratio: 1 },
  { from: 'みず', to: 'はがね', ratio: 1 },
  { from: 'みず', to: 'フェアリー', ratio: 1 },
  { from: 'でんき', to: 'ノーマル', ratio: 1 },
  { from: 'でんき', to: 'ほのお', ratio: 1 },
  { from: 'でんき', to: 'みず', ratio: 2 },
  { from: 'でんき', to: 'でんき', ratio: 0.5 },
  { from: 'でんき', to: 'くさ', ratio: 0.5 },
  { from: 'でんき', to: 'こおり', ratio: 1 },
  { from: 'でんき', to: 'かくとう', ratio: 1 },
  { from: 'でんき', to: 'どく', ratio: 1 },
  { from: 'でんき', to: 'じめん', ratio: 0 },
  { from: 'でんき', to: 'ひこう', ratio: 2 },
  { from: 'でんき', to: 'エスパー', ratio: 1 },
  { from: 'でんき', to: 'むし', ratio: 1 },
  { from: 'でんき', to: 'いわ', ratio: 1 },
  { from: 'でんき', to: 'ゴースト', ratio: 1 },
  { from: 'でんき', to: 'ドラゴン', ratio: 0.5 },
  { from: 'でんき', to: 'あく', ratio: 1 },
  { from: 'でんき', to: 'はがね', ratio: 1 },
  { from: 'でんき', to: 'フェアリー', ratio: 1 },
  { from: 'くさ', to: 'ノーマル', ratio: 1 },
  { from: 'くさ', to: 'ほのお', ratio: 0.5 },
  { from: 'くさ', to: 'みず', ratio: 2 },
  { from: 'くさ', to: 'でんき', ratio: 1 },
  { from: 'くさ', to: 'くさ', ratio: 0.5 },
  { from: 'くさ', to: 'こおり', ratio: 1 },
  { from: 'くさ', to: 'かくとう', ratio: 1 },
  { from: 'くさ', to: 'どく', ratio: 0.5 },
  { from: 'くさ', to: 'じめん', ratio: 2 },
  { from: 'くさ', to: 'ひこう', ratio: 0.5 },
  { from: 'くさ', to: 'エスパー', ratio: 1 },
  { from: 'くさ', to: 'むし', ratio: 0.5 },
  { from: 'くさ', to: 'いわ', ratio: 2 },
  { from: 'くさ', to: 'ゴースト', ratio: 1 },
  { from: 'くさ', to: 'ドラゴン', ratio: 0.5 },
  { from: 'くさ', to: 'あく', ratio: 1 },
  { from: 'くさ', to: 'はがね', ratio: 0.5 },
  { from: 'くさ', to: 'フェアリー', ratio: 1 },
  { from: 'こおり', to: 'ノーマル', ratio: 1 },
  { from: 'こおり', to: 'ほのお', ratio: 0.5 },
  { from: 'こおり', to: 'みず', ratio: 0.5 },
  { from: 'こおり', to: 'でんき', ratio: 1 },
  { from: 'こおり', to: 'くさ', ratio: 2 },
  { from: 'こおり', to: 'こおり', ratio: 0.5 },
  { from: 'こおり', to: 'かくとう', ratio: 1 },
  { from: 'こおり', to: 'どく', ratio: 1 },
  { from: 'こおり', to: 'じめん', ratio: 2 },
  { from: 'こおり', to: 'ひこう', ratio: 2 },
  { from: 'こおり', to: 'エスパー', ratio: 1 },
  { from: 'こおり', to: 'むし', ratio: 1 },
  { from: 'こおり', to: 'いわ', ratio: 1 },
  { from: 'こおり', to: 'ゴースト', ratio: 1 },
  { from: 'こおり', to: 'ドラゴン', ratio: 2 },
  { from: 'こおり', to: 'あく', ratio: 1 },
  { from: 'こおり', to: 'はがね', ratio: 0.5 },
  { from: 'こおり', to: 'フェアリー', ratio: 1 },
  { from: 'かくとう', to: 'ノーマル', ratio: 2 },
  { from: 'かくとう', to: 'ほのお', ratio: 1 },
  { from: 'かくとう', to: 'みず', ratio: 1 },
  { from: 'かくとう', to: 'でんき', ratio: 1 },
  { from: 'かくとう', to: 'くさ', ratio: 1 },
  { from: 'かくとう', to: 'こおり', ratio: 2 },
  { from: 'かくとう', to: 'かくとう', ratio: 1 },
  { from: 'かくとう', to: 'どく', ratio: 0.5 },
  { from: 'かくとう', to: 'じめん', ratio: 1 },
  { from: 'かくとう', to: 'ひこう', ratio: 0.5 },
  { from: 'かくとう', to: 'エスパー', ratio: 0.5 },
  { from: 'かくとう', to: 'むし', ratio: 0.5 },
  { from: 'かくとう', to: 'いわ', ratio: 2 },
  { from: 'かくとう', to: 'ゴースト', ratio: 0 },
  { from: 'かくとう', to: 'ドラゴン', ratio: 1 },
  { from: 'かくとう', to: 'あく', ratio: 2 },
  { from: 'かくとう', to: 'はがね', ratio: 2 },
  { from: 'かくとう', to: 'フェアリー', ratio: 0.5 },
  { from: 'どく', to: 'ノーマル', ratio: 1 },
  { from: 'どく', to: 'ほのお', ratio: 1 },
  { from: 'どく', to: 'みず', ratio: 1 },
  { from: 'どく', to: 'でんき', ratio: 1 },
  { from: 'どく', to: 'くさ', ratio: 2 },
  { from: 'どく', to: 'こおり', ratio: 1 },
  { from: 'どく', to: 'かくとう', ratio: 1 },
  { from: 'どく', to: 'どく', ratio: 0.5 },
  { from: 'どく', to: 'じめん', ratio: 0.5 },
  { from: 'どく', to: 'ひこう', ratio: 1 },
  { from: 'どく', to: 'エスパー', ratio: 1 },
  { from: 'どく', to: 'むし', ratio: 1 },
  { from: 'どく', to: 'いわ', ratio: 0.5 },
  { from: 'どく', to: 'ゴースト', ratio: 0.5 },
  { from: 'どく', to: 'ドラゴン', ratio: 1 },
  { from: 'どく', to: 'あく', ratio: 1 },
  { from: 'どく', to: 'はがね', ratio: 0 },
  { from: 'どく', to: 'フェアリー', ratio: 2 },
  { from: 'じめん', to: 'ノーマル', ratio: 1 },
  { from: 'じめん', to: 'ほのお', ratio: 2 },
  { from: 'じめん', to: 'みず', ratio: 1 },
  { from: 'じめん', to: 'でんき', ratio: 2 },
  { from: 'じめん', to: 'くさ', ratio: 0.5 },
  { from: 'じめん', to: 'こおり', ratio: 1 },
  { from: 'じめん', to: 'かくとう', ratio: 1 },
  { from: 'じめん', to: 'どく', ratio: 2 },
  { from: 'じめん', to: 'じめん', ratio: 1 },
  { from: 'じめん', to: 'ひこう', ratio: 0 },
  { from: 'じめん', to: 'エスパー', ratio: 1 },
  { from: 'じめん', to: 'むし', ratio: 0.5 },
  { from: 'じめん', to: 'いわ', ratio: 2 },
  { from: 'じめん', to: 'ゴースト', ratio: 1 },
  { from: 'じめん', to: 'ドラゴン', ratio: 1 },
  { from: 'じめん', to: 'あく', ratio: 1 },
  { from: 'じめん', to: 'はがね', ratio: 2 },
  { from: 'じめん', to: 'フェアリー', ratio: 1 },
  { from: 'ひこう', to: 'ノーマル', ratio: 1 },
  { from: 'ひこう', to: 'ほのお', ratio: 1 },
  { from: 'ひこう', to: 'みず', ratio: 1 },
  { from: 'ひこう', to: 'でんき', ratio: 0.5 },
  { from: 'ひこう', to: 'くさ', ratio: 2 },
  { from: 'ひこう', to: 'こおり', ratio: 1 },
  { from: 'ひこう', to: 'かくとう', ratio: 2 },
  { from: 'ひこう', to: 'どく', ratio: 1 },
  { from: 'ひこう', to: 'じめん', ratio: 1 },
  { from: 'ひこう', to: 'ひこう', ratio: 1 },
  { from: 'ひこう', to: 'エスパー', ratio: 1 },
  { from: 'ひこう', to: 'むし', ratio: 2 },
  { from: 'ひこう', to: 'いわ', ratio: 0.5 },
  { from: 'ひこう', to: 'ゴースト', ratio: 1 },
  { from: 'ひこう', to: 'ドラゴン', ratio: 1 },
  { from: 'ひこう', to: 'あく', ratio: 1 },
  { from: 'ひこう', to: 'はがね', ratio: 0.5 },
  { from: 'ひこう', to: 'フェアリー', ratio: 1 },
  { from: 'エスパー', to: 'ノーマル', ratio: 1 },
  { from: 'エスパー', to: 'ほのお', ratio: 1 },
  { from: 'エスパー', to: 'みず', ratio: 1 },
  { from: 'エスパー', to: 'でんき', ratio: 1 },
  { from: 'エスパー', to: 'くさ', ratio: 1 },
  { from: 'エスパー', to: 'こおり', ratio: 1 },
  { from: 'エスパー', to: 'かくとう', ratio: 2 },
  { from: 'エスパー', to: 'どく', ratio: 2 },
  { from: 'エスパー', to: 'じめん', ratio: 1 },
  { from: 'エスパー', to: 'ひこう', ratio: 1 },
  { from: 'エスパー', to: 'エスパー', ratio: 0.5 },
  { from: 'エスパー', to: 'むし', ratio: 1 },
  { from: 'エスパー', to: 'いわ', ratio: 1 },
  { from: 'エスパー', to: 'ゴースト', ratio: 1 },
  { from: 'エスパー', to: 'ドラゴン', ratio: 1 },
  { from: 'エスパー', to: 'あく', ratio: 0 },
  { from: 'エスパー', to: 'はがね', ratio: 0.5 },
  { from: 'エスパー', to: 'フェアリー', ratio: 1 },
  { from: 'むし', to: 'ノーマル', ratio: 1 },
  { from: 'むし', to: 'ほのお', ratio: 0.5 },
  { from: 'むし', to: 'みず', ratio: 1 },
  { from: 'むし', to: 'でんき', ratio: 1 },
  { from: 'むし', to: 'くさ', ratio: 2 },
  { from: 'むし', to: 'こおり', ratio: 1 },
  { from: 'むし', to: 'かくとう', ratio: 0.5 },
  { from: 'むし', to: 'どく', ratio: 0.5 },
  { from: 'むし', to: 'じめん', ratio: 1 },
  { from: 'むし', to: 'ひこう', ratio: 0.5 },
  { from: 'むし', to: 'エスパー', ratio: 2 },
  { from: 'むし', to: 'むし', ratio: 1 },
  { from: 'むし', to: 'いわ', ratio: 1 },
  { from: 'むし', to: 'ゴースト', ratio: 0.5 },
  { from: 'むし', to: 'ドラゴン', ratio: 1 },
  { from: 'むし', to: 'あく', ratio: 2 },
  { from: 'むし', to: 'はがね', ratio: 0.5 },
  { from: 'むし', to: 'フェアリー', ratio: 0.5 },
  { from: 'いわ', to: 'ノーマル', ratio: 1 },
  { from: 'いわ', to: 'ほのお', ratio: 2 },
  { from: 'いわ', to: 'みず', ratio: 1 },
  { from: 'いわ', to: 'でんき', ratio: 1 },
  { from: 'いわ', to: 'くさ', ratio: 1 },
  { from: 'いわ', to: 'こおり', ratio: 2 },
  { from: 'いわ', to: 'かくとう', ratio: 0.5 },
  { from: 'いわ', to: 'どく', ratio: 1 },
  { from: 'いわ', to: 'じめん', ratio: 0.5 },
  { from: 'いわ', to: 'ひこう', ratio: 2 },
  { from: 'いわ', to: 'エスパー', ratio: 1 },
  { from: 'いわ', to: 'むし', ratio: 2 },
  { from: 'いわ', to: 'いわ', ratio: 1 },
  { from: 'いわ', to: 'ゴースト', ratio: 1 },
  { from: 'いわ', to: 'ドラゴン', ratio: 1 },
  { from: 'いわ', to: 'あく', ratio: 1 },
  { from: 'いわ', to: 'はがね', ratio: 0.5 },
  { from: 'いわ', to: 'フェアリー', ratio: 1 },
  { from: 'ゴースト', to: 'ノーマル', ratio: 0 },
  { from: 'ゴースト', to: 'ほのお', ratio: 1 },
  { from: 'ゴースト', to: 'みず', ratio: 1 },
  { from: 'ゴースト', to: 'でんき', ratio: 1 },
  { from: 'ゴースト', to: 'くさ', ratio: 1 },
  { from: 'ゴースト', to: 'こおり', ratio: 1 },
  { from: 'ゴースト', to: 'かくとう', ratio: 1 },
  { from: 'ゴースト', to: 'どく', ratio: 1 },
  { from: 'ゴースト', to: 'じめん', ratio: 1 },
  { from: 'ゴースト', to: 'ひこう', ratio: 1 },
  { from: 'ゴースト', to: 'エスパー', ratio: 2 },
  { from: 'ゴースト', to: 'むし', ratio: 1 },
  { from: 'ゴースト', to: 'いわ', ratio: 1 },
  { from: 'ゴースト', to: 'ゴースト', ratio: 2 },
  { from: 'ゴースト', to: 'ドラゴン', ratio: 1 },
  { from: 'ゴースト', to: 'あく', ratio: 0.5 },
  { from: 'ゴースト', to: 'はがね', ratio: 1 },
  { from: 'ゴースト', to: 'フェアリー', ratio: 1 },
  { from: 'ドラゴン', to: 'ノーマル', ratio: 1 },
  { from: 'ドラゴン', to: 'ほのお', ratio: 1 },
  { from: 'ドラゴン', to: 'みず', ratio: 1 },
  { from: 'ドラゴン', to: 'でんき', ratio: 1 },
  { from: 'ドラゴン', to: 'くさ', ratio: 1 },
  { from: 'ドラゴン', to: 'こおり', ratio: 1 },
  { from: 'ドラゴン', to: 'かくとう', ratio: 1 },
  { from: 'ドラゴン', to: 'どく', ratio: 1 },
  { from: 'ドラゴン', to: 'じめん', ratio: 1 },
  { from: 'ドラゴン', to: 'ひこう', ratio: 1 },
  { from: 'ドラゴン', to: 'エスパー', ratio: 1 },
  { from: 'ドラゴン', to: 'むし', ratio: 1 },
  { from: 'ドラゴン', to: 'いわ', ratio: 1 },
  { from: 'ドラゴン', to: 'ゴースト', ratio: 1 },
  { from: 'ドラゴン', to: 'ドラゴン', ratio: 2 },
  { from: 'ドラゴン', to: 'あく', ratio: 1 },
  { from: 'ドラゴン', to: 'はがね', ratio: 0.5 },
  { from: 'ドラゴン', to: 'フェアリー', ratio: 0 },
  { from: 'あく', to: 'ノーマル', ratio: 1 },
  { from: 'あく', to: 'ほのお', ratio: 1 },
  { from: 'あく', to: 'みず', ratio: 1 },
  { from: 'あく', to: 'でんき', ratio: 1 },
  { from: 'あく', to: 'くさ', ratio: 1 },
  { from: 'あく', to: 'こおり', ratio: 1 },
  { from: 'あく', to: 'かくとう', ratio: 0.5 },
  { from: 'あく', to: 'どく', ratio: 1 },
  { from: 'あく', to: 'じめん', ratio: 1 },
  { from: 'あく', to: 'ひこう', ratio: 1 },
  { from: 'あく', to: 'エスパー', ratio: 2 },
  { from: 'あく', to: 'むし', ratio: 1 },
  { from: 'あく', to: 'いわ', ratio: 1 },
  { from: 'あく', to: 'ゴースト', ratio: 2 },
  { from: 'あく', to: 'ドラゴン', ratio: 1 },
  { from: 'あく', to: 'あく', ratio: 0.5 },
  { from: 'あく', to: 'はがね', ratio: 1 },
  { from: 'あく', to: 'フェアリー', ratio: 0.5 },
  { from: 'はがね', to: 'ノーマル', ratio: 1 },
  { from: 'はがね', to: 'ほのお', ratio: 0.5 },
  { from: 'はがね', to: 'みず', ratio: 0.5 },
  { from: 'はがね', to: 'でんき', ratio: 0.5 },
  { from: 'はがね', to: 'くさ', ratio: 1 },
  { from: 'はがね', to: 'こおり', ratio: 2 },
  { from: 'はがね', to: 'かくとう', ratio: 0 },
  { from: 'はがね', to: 'どく', ratio: 1 },
  { from: 'はがね', to: 'じめん', ratio: 1 },
  { from: 'はがね', to: 'ひこう', ratio: 1 },
  { from: 'はがね', to: 'エスパー', ratio: 1 },
  { from: 'はがね', to: 'むし', ratio: 1 },
  { from: 'はがね', to: 'いわ', ratio: 2 },
  { from: 'はがね', to: 'ゴースト', ratio: 1 },
  { from: 'はがね', to: 'ドラゴン', ratio: 1 },
  { from: 'はがね', to: 'あく', ratio: 1 },
  { from: 'はがね', to: 'はがね', ratio: 0.5 },
  { from: 'はがね', to: 'フェアリー', ratio: 2 },
  { from: 'フェアリー', to: 'ノーマル', ratio: 1 },
  { from: 'フェアリー', to: 'ほのお', ratio: 0.5 },
  { from: 'フェアリー', to: 'みず', ratio: 1 },
  { from: 'フェアリー', to: 'でんき', ratio: 1 },
  { from: 'フェアリー', to: 'くさ', ratio: 1 },
  { from: 'フェアリー', to: 'こおり', ratio: 1 },
  { from: 'フェアリー', to: 'かくとう', ratio: 2 },
  { from: 'フェアリー', to: 'どく', ratio: 0.5 },
  { from: 'フェアリー', to: 'じめん', ratio: 1 },
  { from: 'フェアリー', to: 'ひこう', ratio: 1 },
  { from: 'フェアリー', to: 'エスパー', ratio: 1 },
  { from: 'フェアリー', to: 'むし', ratio: 1 },
  { from: 'フェアリー', to: 'いわ', ratio: 1 },
  { from: 'フェアリー', to: 'ゴースト', ratio: 1 },
  { from: 'フェアリー', to: 'ドラゴン', ratio: 2 },
  { from: 'フェアリー', to: 'あく', ratio: 2 },
  { from: 'フェアリー', to: 'はがね', ratio: 0.5 },
  { from: 'フェアリー', to: 'フェアリー', ratio: 1 },
] as const

export const insertTypeRelation = async () => {
  try {
    console.log('Seeding type relation...')

    const typesData = await db.type.findMany()
    const typeMap = new Map(typesData.map(({ id, name }) => [name, id]))

    const data: Prisma.TypeRelationCreateArgs['data'][] = relations.map(
      ({ from, to, ratio }) => ({
        fromId: typeMap.get(from) ?? '',
        toId: typeMap.get(to) ?? '',
        ratio,
      })
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await db.typeRelation.createMany({ data } as any)
    console.log('Done.', result)
  } catch (error) {
    console.error(error)
  }
}
