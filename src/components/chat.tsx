import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Channel } from '../models/channel'
import TopBar from './Chat/topbar'
import { channels } from '../data'
import { useNavigate } from 'react-router-dom'
import MemberBar from '../components/Chat/member_bar'
import ChatBox from './Chat/chat_box'

export default function Chat() {
  const parameter  = useParams<string>();
	const channel_id = parameter.id || "@me";
  const [channel, setChannel] = useState<Channel>({} as Channel)
  const navigate = useNavigate()

  const [showMembers, setShowMembers] = useState(true)

  useEffect(() => {
    if (channel_id === "@me") {
      navigate("/channels/@me")
    }

    channels.forEach(channel_ => {
      if (channel_.id === channel_id) {
        setChannel(channel_)
      }
    })
  }, [channel_id, navigate])

  return (
    <div className='flex flex-col flex-grow bg-gray-600'>
        <TopBar channel={ channel } setShowMembers={ setShowMembers } />
        <div className='flex flex-grow'>
          <ChatBox channel_id={channel.id} />
          { showMembers && channel.type === 2 && <MemberBar channel={ channel } /> }
        </div>
    </div>
  )
}
