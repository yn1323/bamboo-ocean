import type { FindBattleDatas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BattleDatas from 'src/components/BattleData/BattleDatas'

export const QUERY = gql`
  query FindBattleDatas {
    battleDatas {
      id
      battleIndexId
      pokemonId
      no
      rank
      formId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No battleDatas yet. '}
      <Link to={routes.newBattleData()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ battleDatas }: CellSuccessProps<FindBattleDatas>) => {
  return <BattleDatas battleDatas={battleDatas} />
}
