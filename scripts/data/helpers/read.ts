const fs = require('fs')

export const readImage = async (
  path: string,
  { showLog } = { showLog: false }
) => {
  try {
    const pathToPng = require('path').resolve(__dirname, path)
    const base64 = await fs.readFileSync(pathToPng, 'base64')
    return base64
  } catch (e) {
    if (showLog) {
      console.log(`${path} may be not found`)
    }
    return ''
  }
}
