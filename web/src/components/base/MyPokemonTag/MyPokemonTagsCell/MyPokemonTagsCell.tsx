import type { FindMyPokemonTags } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import MyPokemonTags from 'src/components/base/MyPokemonTag/MyPokemonTags'

export const QUERY = gql`
  query FindMyPokemonTags {
    myPokemonTags {
      id
      name
      favorite
      memo
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No myPokemonTags yet. '}
      <Link to={routes.newMyPokemonTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  myPokemonTags,
}: CellSuccessProps<FindMyPokemonTags>) => {
  return <MyPokemonTags myPokemonTags={myPokemonTags} />
}
