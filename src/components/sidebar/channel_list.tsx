import React, { useState, useEffect } from 'react'
import { channels } from '../../data'
import Channel from './channel_list/channel'
import { BsPlusLg, BsPersonFill } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function ChannelList() {
  const [channels_, setChannels_] = useState<JSX.Element[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    setChannels_([])
    channels.forEach(channel =>
      setChannels_(pc => [...pc,
        <div key={channel.id} className='w-11/12 my-1'>
          <Channel channel={channel} />
        </div>
    ])
    )
    console.log(channels_)
  }, [])

  return (
    <div className='flex flex-grow flex-col overflow-y-scroll items-center'>
      <div className='w-full flex flex-col items-center justify-center'>
        <ActionButtons title='Friends' onClick={() => navigate('/channels/@me')}>
          <BsPersonFill />
        </ActionButtons>
        <ActionButtons title='Nitro' onClick={() => {}}>
          <FaWind />
        </ActionButtons>
      </div>
      <div className='flex justify-between items-center w-full p-3 font-bold text-sm text-gray-400 hover:text-white hover:cursor-pointer'>
        <span>DIRECT MESSAGES</span>
        <BsPlusLg />
      </div>
      {channels_}
    </div>
  )
}

function ActionButtons({ children, title, onClick }: { children : React.ReactNode, title: string, onClick: () => void }) {
  return (
    <div className='flex items-center w-11/12 h-12 rounded my-1 px-2 text-xl text-gray-400 hover:cursor-pointer hover:bg-gray-500' onClick={onClick}>
      { children }
      <span className='mx-4'>
      { title }
      </span>
    </div>
  )
}