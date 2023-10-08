import type { FindAbilities } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Abilities from 'src/components/base/Ability/Abilities'

export const QUERY = gql`
  query FindAbilities {
    abilities {
      id
      name
      detail
      battleIndex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No abilities yet. '}
      <Link to={routes.newAbility()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ abilities }: CellSuccessProps<FindAbilities>) => {
  return <Abilities abilities={abilities} />
}
