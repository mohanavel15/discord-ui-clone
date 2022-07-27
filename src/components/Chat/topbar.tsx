import React from 'react'
import { BiAt } from 'react-icons/bi'
import { Channel } from '../../models/channel'

import { BsPersonPlusFill, BsPinAngleFill, BsFillCameraVideoFill, BsFillTelephoneFill } from 'react-icons/bs'
import { CgInbox } from 'react-icons/cg'
import { MdHelp, MdPeopleAlt, MdSearch } from 'react-icons/md'

export default function TopBar({ channel }:{ channel: Channel }) {
  return (
    <div className='flex h-12 border-b-2 border-gray-900 items-center'>
        <span className='flex mx-4 font-bold text-2xl text-gray-300 items-center'>
        <BiAt />
        <span className='mx-2'>
        { channel.type === 2 && channel.name }
        { channel.type === 1 && channel.recipients[0].name }
        </span>
        </span>
        <div className='flex absolute w-auto h-8 justify-evenly items-center text-2xl right-2'>
        <ActionButtons tooltip='Start Voice Call'>
          <BsFillTelephoneFill />
        </ActionButtons>
        <ActionButtons tooltip='Start Video Call'>
          <BsFillCameraVideoFill />
        </ActionButtons>
        <ActionButtons tooltip='Pinned Messages'>
          <BsPinAngleFill />
        </ActionButtons>
        <ActionButtons tooltip='Add Friends To DM'>
          <BsPersonPlusFill />
        </ActionButtons>
        { channel.type === 2 && 
          <ActionButtons tooltip='Toggle Member List'>
            <MdPeopleAlt />
          </ActionButtons>
        }
        <div className='relative flex text-sm text-gray-400 h-6 bg-gray-900 w-32 items-center rounded px-2'>
          <span>Search</span>
          <MdSearch className='justify-end absolute right-1 text-base' />
        </div>
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
    <div className='relative text-gray-300 hover:text-white hover:cursor-pointer group mx-3'>
      {children}
      <span className='absolute top-10 bg-black min-w-fit p-2 text-xs font-bold scale-0 group-hover:scale-100'>{tooltip}</span>
    </div>
  )
}