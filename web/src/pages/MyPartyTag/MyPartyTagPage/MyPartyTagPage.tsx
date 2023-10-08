import MyPartyTagCell from 'src/components/MyPartyTag/MyPartyTagCell'

type MyPartyTagPageProps = {
  id: string
}

const MyPartyTagPage = ({ id }: MyPartyTagPageProps) => {
  return <MyPartyTagCell id={id} />
}

export default MyPartyTagPage
