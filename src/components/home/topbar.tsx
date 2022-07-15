import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { TbMessageShare } from 'react-icons/tb'
import { CgInbox } from 'react-icons/cg'
import { MdHelp } from 'react-icons/md'

export default function TopBar() {
  return (
    <div className='flex h-12 border-b-2 border-black items-center'>
      <div className='flex border-r-2 border-gray-400 w-32 justify-evenly items-center text-lg font-bold text-white'>
        <BsPersonFill className='text-gray-400 text-xl' />
        <h3>Friends</h3>
      </div>
      <div className='flex absolute w-28 h-8 justify-evenly items-center text-2xl right-2'>
        <ActionButtons tooltip='New Group DM'>
          <TbMessageShare />
        </ActionButtons>
        <ActionButtons tooltip='Inbox'>
          <CgInbox />
        </ActionButtons>
        <ActionButtons tooltip='Help'>
          <MdHelp />
        </ActionButtons>
      </div>
    </div>
  )
}

function ActionButtons({ children, tooltip }: { children : React.ReactNode, tooltip: string }) {
  return (
    <div className='text-gray-200 hover:text-white hover:cursor-pointer group'>
      {children}
      <span className='absolute top-10 right-2 bg-black p-2 text-xs font-bold scale-0 group-hover:scale-100'>{tooltip}</span>
    </div>
  )
}