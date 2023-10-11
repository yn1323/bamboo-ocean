import EditMyPartyCell from 'src/components/base/MyParty/EditMyPartyCell'

type MyPartyPageProps = {
  id: string
}

const EditMyPartyPage = ({ id }: MyPartyPageProps) => {
  return <EditMyPartyCell id={id} />
}

export default EditMyPartyPage
