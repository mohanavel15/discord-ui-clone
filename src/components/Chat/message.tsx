import React from 'react'
import { Message as Msg } from '../../models/message'
import { routes_ } from '../../routes'

export default function Message({ msg }: { msg : Msg }) {
  return (
      <div className='flex hover:bg-gray-700 h-16 items-center'>
          <img src={msg.author.avatar} 
            alt="avatar"
            onError={e => e.currentTarget.src = routes_.logo512 }
            className="rounded-full w-12 h-12 mx-2"
            />
        <div className='flex flex-col'>
            <div className='flex items-center'>
                <span className='text-xl text-gray-300'>{msg.author.name}</span>
                <span className='text-xs mx-2 text-gray-400'>{new Date(msg.created_at * 1000).toLocaleTimeString()}</span>
            </div>
            <span className='text-gray-300'>{msg.content}</span>
        </div>
      </div>
  )
}
