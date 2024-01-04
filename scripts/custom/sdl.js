// @ts-check
const execSync = require('child_process').execSync
const fs = require('fs')
const path = require('path')

const originalFiles = ['build', 'search']
// const baseSdlDirectoryName = ['basics']
const generatedDirectoryName = '__generated__'
const Models = [
  'Type',
  'TypeRelation',
  'Item',
  'Ability',
  'AttackType',
  'Move',
  'Pokemon',
  'Evolution',
  'Nature',
  'Form',
  'BattleIndex',
  'BattleData',
  'BattleDataMove',
  'BattleDataAbility',
  'BattleDataNature',
  'BattleDataItem',
  'BattleDataTerastal',
  'User',
  'MyPartyTag',
  'MyPokemonTag',
  'MyEnemyTag',
  'MyPokemon',
  'MyEnemy',
  'MyPokemonPros',
  'MyPokemonCons',
  'MyParty',
  'MyDamageCalcIndex',
  'MyDamageCalc',
]

const baseDirectory = path.resolve(__dirname, '../../api/src')

const excludeDirectories = getOriginalSdlDirectoriesAndFiles()

deleteDirectoryRecursive(
  path.resolve(baseDirectory, './graphql'),
  excludeDirectories
)

deleteDirectoryRecursive(
  path.resolve(baseDirectory, './services'),
  excludeDirectories
)

Models.forEach((model) => {
  // echo | とすることでコマンド内でEnterをおしたことにする
  execSync(`echo | yarn rw g sdl ${model}`)
})

moveFilesExcept(
  path.resolve(baseDirectory, './graphql'),
  originalFiles.map((f) => `${f}.sdl.ts`)
)

moveAndDelete(path.resolve(baseDirectory, './services'), excludeDirectories)

updateFilesInDirectory(
  path.resolve(baseDirectory, `./graphql/${generatedDirectoryName}`)
)

execSync('yarn rw g types')
execSync('yarn rw lint --fix')

console.log('PLEASE execute migration')

function getOriginalSdlDirectoriesAndFiles() {
  const sdlDirectories = fs
    .readdirSync(path.resolve(baseDirectory, './graphql'))
    .filter((sub) =>
      fs.statSync(path.join(baseDirectory, './graphql', sub)).isDirectory()
    )
    .filter((sub) => !sub.startsWith(generatedDirectoryName))

  return sdlDirectories
}

/**
 * 特定のファイル以外を特定のディレクトリに移動する関数
 * @param {string} directory - ディレクトリのパス
 * @param {string[]} excludeFileNames - 削除から除外するファイルの名前の配列
 */
function moveFilesExcept(directory, excludeFileNames = []) {
  const basicsDir = path.join(directory, generatedDirectoryName)
  if (!fs.existsSync(basicsDir)) {
    fs.mkdirSync(basicsDir)
  }

  const files = fs.readdirSync(directory)
  for (const file of files) {
    if (
      !excludeFileNames.includes(file) &&
      fs.statSync(path.join(directory, file)).isFile()
    ) {
      fs.renameSync(path.join(directory, file), path.join(basicsDir, file))
    }
  }
}

/**
 * 特定のファイル以外を特定のディレクトリに移動する関数
 * @param {string} directory - ディレクトリのパス
 * @param {string[]} skipDirectories - 削除から除外するフォルダ名
 */
function moveAndDelete(directory, skipDirectories) {
  const basicsDir = path.join(directory, generatedDirectoryName)
  if (!fs.existsSync(basicsDir)) {
    fs.mkdirSync(basicsDir)
  }

  const subDirs = fs
    .readdirSync(directory)
    .filter((sub) => fs.statSync(path.join(directory, sub)).isDirectory())
    .filter((sub) => !skipDirectories.includes(sub))
  for (const subDir of subDirs) {
    const fullSubDir = path.join(directory, subDir)
    const files = fs.readdirSync(fullSubDir)

    let scenarioOrTestExists = false
    for (const file of files) {
      if (file.endsWith('.scenarios.ts') || file.endsWith('.test.ts')) {
        scenarioOrTestExists = true
      } else {
        fs.renameSync(path.join(fullSubDir, file), path.join(basicsDir, file))
      }
    }

    if (scenarioOrTestExists) {
      fs.rmdirSync(fullSubDir, { recursive: true })
    }
  }
}

/**
 * ディレクトリを再帰的に削除する関数
 * @param {string} dirPath - 削除するディレクトリのパス
 * @param {string[]} excludeDirs - 削除から除外するディレクトリの名前の配列
 * @param {string[]} excludeFileNames - 削除から除外するファイルの名前の配列
 */
function deleteDirectoryRecursive(
  dirPath,
  excludeDirs = [],
  excludeFileNames = []
) {
  // ディレクトリが存在しない場合は終了
  if (!fs.existsSync(dirPath)) {
    return
  }

  // ディレクトリ内のファイル/フォルダの一覧を取得
  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const curPath = path.join(dirPath, file)

    // ファイルの場合は削除
    if (fs.lstatSync(curPath).isFile() && !excludeFileNames.includes(file)) {
      fs.unlinkSync(curPath)
    } else if (
      fs.lstatSync(curPath).isDirectory() &&
      !excludeDirs.includes(file)
    ) {
      // ディレクトリの場合は再帰的に呼び出し
      deleteDirectoryRecursive(curPath)
      fs.rmdirSync(curPath)
    }
  }
}

/**
 * 指定されたディレクトリ内のすべてのファイルの内容を変更します。
 * 配列型の文字列 `[Type]` を `[Type!]` に置換します。
 *
 * @param {string} directoryPath - 変更を適用するファイルが含まれるディレクトリのパス。
 */
function updateFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file)

      // ファイルの内容を読み込む
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading the file ${file}:`, err)
          return
        }

        // 文字列の置換を行う
        const modifiedData = data.replace(/\[([a-zA-Z0-9_]+)\]/g, '[$1!]')

        // 変更をファイルに書き戻す
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing to the file ${file}:`, err)
          } else {
            console.log(`File ${file} updated successfully`)
          }
        })
      })
    })
  })
}
