import React from 'react'
import { Channel as ChannelOBJ } from '../../../models/channel'

export default function Channel({ channel }: { channel : ChannelOBJ}) {
  return (
    <div className='flex h-12 rounded min-w-11/12 items-center hover:cursor-pointer hover:bg-gray-600'>
      <img 
      src={channel.type === 1 ? channel.recipients[0].avatar : channel.icon} 
      onError={(e) => e.currentTarget.src='------'}
      className='h-10 w-10 rounded-full mx-2'
      />
      {channel.type === 1 ? <p className='text-gray-400'>{channel.recipients[0].name}</p> : 
      <div className='flex flex-col justify-around'>
        <span className='text-gray-400'>{channel.name}</span>
        <span className='text-gray-400 text-xs'>{channel.recipients.length} Members</span>
      </div>
      }
    </div>
  )
}
