import MyPartyCell from 'src/components/MyParty/MyPartyCell'

type MyPartyPageProps = {
  id: string
}

const MyPartyPage = ({ id }: MyPartyPageProps) => {
  return <MyPartyCell id={id} />
}

export default MyPartyPage
