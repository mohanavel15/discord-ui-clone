import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { TbMessageShare } from 'react-icons/tb'
import { CgInbox } from 'react-icons/cg'
import { MdHelp } from 'react-icons/md'

export default function TopBar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className='flex h-12 border-b-2 border-gray-900 items-center'>
      <div className='flex border-r-2 border-gray-500 w-32 justify-evenly items-center text-lg font-bold text-white'>
        <BsPersonFill className='text-gray-400 text-xl' />
        <h3>Friends</h3>
      </div>
      <div className='flex justify-evenly items-center w-96'>
        <FriendTopBarButton id={0} title='Online'     selected={selected} onClick={setSelected} isGreen={false} />
        <FriendTopBarButton id={1} title='All'        selected={selected} onClick={setSelected} isGreen={false} />
        <FriendTopBarButton id={2} title='Pending'    selected={selected} onClick={setSelected} isGreen={false} />
        <FriendTopBarButton id={3} title='Blocked'    selected={selected} onClick={setSelected} isGreen={false} />
        <FriendTopBarButton id={4} title='Add Friend' selected={selected} onClick={setSelected} isGreen={true} />
      </div>
      <div className='flex absolute w-auto h-8 justify-evenly items-center text-2xl right-2'>
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
    <div className='relative text-gray-200 hover:text-white hover:cursor-pointer group mx-3'>
      {children}
      <span className='absolute top-10 min-w-fit bg-black p-2 text-xs font-bold scale-0 group-hover:scale-100'>{tooltip}</span>
    </div>
  )
}

function FriendTopBarButton({ id, title, selected, isGreen, onClick }: { id: number, title : string, selected : number, isGreen: boolean, onClick: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <button className={`px-2 rounded ${ (id === selected && !isGreen) ? 'bg-gray-500 text-white' : 'hover:bg-gray-500 text-gray-300' } ${ isGreen ? 'bg-green-600 text-gray-200' : '' }`} onClick={() => onClick(id)}>
      { title }
    </button>
  )
}