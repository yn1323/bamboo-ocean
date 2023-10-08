import gql from 'graphql-tag'

import type { ValidatorDirectiveFunc } from '@redwoodjs/graphql-server'
import { createValidatorDirective } from '@redwoodjs/graphql-server'

import { requireAuth as applicationRequireAuth } from 'src/lib/auth'

export const schema = gql`
  """
  Use to check whether or not a user is authenticated and is associated
  with an optional set of roles.
  """
  directive @requireAuth(roles: [String]) on FIELD_DEFINITION
`

type RequireAuthValidate = ValidatorDirectiveFunc<{ roles?: string[] }>

const validate: RequireAuthValidate = ({ directiveArgs, context }) => {
  const isLocal = process.env.IS_LOCAL === 'true'

  // if (
  //   !isLocal &&
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   (context as any).event.headers.x_api_key !== process.env.X_API_KEY
  // ) {
  //   throw new Error('Unauthorized')
  // }

  const { roles } = directiveArgs

  applicationRequireAuth({ roles })
}

const requireAuth = createValidatorDirective(schema, validate)

export default requireAuth
