export const waitTimer = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const retryInsert = async (
  inserts: Promise<unknown>[],
  retryCount = 0
) => {
  if (retryCount > 10) {
    console.log('Something maybe not done. Failed Records : ', inserts.length)
    return
  }

  if (retryCount !== 0) {
    console.log('Failed Inserts', inserts.length)
    console.log('RetryCount', retryCount)
    await waitTimer(10000)
  }

  const retryTarget = []

  if (process.env.IS_LOCAL === 'true') {
    await Promise.all(inserts)
  } else {
    for (const insert of inserts) {
      await waitTimer(1000)
      try {
        await insert
      } catch (e) {
        console.log('failed')
        retryTarget.push(insert)
      }
    }
    if (retryTarget.length > 0) {
      await retryInsert(retryTarget, retryCount + 1)
    }
  }
}
