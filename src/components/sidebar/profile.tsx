import React from 'react'
import { MdMic, MdHeadset, MdSettings } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
import { currentUser } from '../../data'

export default function Profile() {
  return (
    <div className='w-60 h-14 bg-gray-800 flex items-center'>
      <div className='flex h-10 w-28 m-1 hover:bg-gray-500 hover:cursor-pointer rounded-md items-center justify-start'>
        <FaRegUserCircle className='text-4xl text-white' />
        <div className='flex flex-col justify-evenly m-2'>
          <p className='text-sm font-bold text-white'>{ currentUser.name }</p>
          <p className='text-xs text-gray-400'>#{ currentUser.discriminator }</p>
        </div>
      </div>
      <div className='flex h-10 w-28 justify-end items-center'>
      <ActionButtons tooltip='Mute'>
        <MdMic />
      </ActionButtons>
      <ActionButtons tooltip='Deafen'>
        <MdHeadset />
      </ActionButtons>
      <ActionButtons tooltip='User Settings'>
        <MdSettings />
      </ActionButtons>
      </div>
    </div>
  )
}

function ActionButtons({ children, tooltip }: { children : React.ReactNode, tooltip: string }) {
  return (
    <div className='h-8 w-8 text-gray-400 hover:text-white group hover:bg-gray-500 text-2xl flex items-center justify-center hover:cursor-pointer rounded'>
      {children}
      <span className='absolute bottom-14 text-sm bg-black font-bold scale-0 group-hover:scale-100 p-1 rounded'>{tooltip}</span>
    </div>
  )
}