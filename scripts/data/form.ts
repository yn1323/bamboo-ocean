import type { Prisma } from '@prisma/client'
import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'
import { db } from 'api/src/lib/db'

export const insertForm = async () => {
  try {
    const { forms } = await getAssetNames()
    const filteredForms = forms.filter((form) => form.id !== 'double_form')

    const formattedForms: Prisma.FormCreateArgs['data'][] = filteredForms.map(
      (form) => ({
        no: form.id.split('_')[0],
        formType: form.id.split('_')[1],
        formType2: form.id.split('_')[2] ?? '',
        name: form.name,
      })
    )

    console.log('Seeding form...')

    const result = await db.form.createMany({ data: formattedForms })

    console.log('form done.', result)
  } catch (error) {
    console.error(error)
  }
}
