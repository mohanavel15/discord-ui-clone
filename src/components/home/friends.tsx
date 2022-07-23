import React from 'react'
import { MdSearch } from 'react-icons/md'
import { BsFillChatLeftFill, BsThreeDotsVertical } from 'react-icons/bs'
import { users } from '../../data'
import { User } from '../../models/user'

export default function Friends() {
  return (
    <div className='w-4/5 border-r-2 border-gray-500 flex flex-col'>
      <div className='mx-10 h-16 flex justify-evenly items-center'>
        <div className='bg-gray-900 w-11/12 h-8 rounded flex items-center justify-evenly'>
          <input className='w-11/12 h-full bg-transparent text-white outline-none' type="text" placeholder='Search' />
          <MdSearch className='text-gray-400 text-xl' />
        </div>
      </div>
      <div className='mx-10 flex-grow flex flex-col'>
        {/* <span className='text-gray-400 font-bold text-sm'>ONLINE - 0</span> */}
        <span className='text-gray-400 font-bold text-sm'>ALL FRIENDS - 2</span>
        {/* <span className='text-gray-400 font-bold text-sm'>PENDING - 0</span> */}
        {/* <span className='text-gray-400 font-bold text-sm'>BLOCKEDALL FRIENDS - 0</span> */}
        <span className='my-1'></span>
        <Friend user={users[1]} />
        <Friend user={users[2]} />
      </div>
    </div>
  )
}

function Friend({ user }:{ user: User}) {
  return (
    <div className='flex items-center w-full h-14 border-t-2 border-gray-500 hover:bg-gray-500 hover:cursor-pointer justify-between group'>
      <div className='h-full flex items-center'>
        <img src='/logo512.png' className='h-12 rounded-full mx-4'/>
        <div className='flex flex-col'>
          <span className='font-bold text-gray-200 text-lg'>{ user.name }</span>
          <span className='text-gray-400 text-sm'>Offline</span>
        </div>
      </div>
      <div className='flex justify-self-end'>
        <ActionButtons>
          <BsFillChatLeftFill />
        </ActionButtons>
        <ActionButtons>
          <BsThreeDotsVertical />
        </ActionButtons>
      </div>
    </div>
  )
}

function ActionButtons({ children }: {children : React.ReactNode}) {
  return (
    <div className='bg-gray-800 rounded-full h-10 w-10 flex items-center justify-center text-gray-300 mx-1 group-hover:bg-gray-900'>
      { children }
    </div>
  )
}