import React from 'react'
import  { useNavigate } from 'react-router-dom'
import { AiOutlinePlus, AiFillCompass, AiOutlineDownload, AiFillHome } from 'react-icons/ai'

export default function ServerBar() {
  const navigate = useNavigate()
  return (
    <div className='w-20 min-h-full bg-gray-900 flex flex-col items-center overflow-y-hidden'>
      <ServerIcon tooltip='Home' onClick={() => navigate('/channels/@me')}>
        <AiFillHome />
      </ServerIcon>
      <Divider />
      <ServerIcon tooltip='Add a Server' onClick={() => console.log("Clicked Add a Server")}>
        <AiOutlinePlus />
      </ServerIcon>
      <ServerIcon tooltip='Explore Public Servers' onClick={() => console.log("Clicked Explore Public Servers")}>
        <AiFillCompass />
      </ServerIcon>
      <Divider />
      <ServerIcon tooltip='Download Apps' onClick={() => console.log("Clicked Download Apps")}>
        <AiOutlineDownload />
      </ServerIcon>
    </div>
  )
}

function ServerIcon({ children, tooltip, onClick }: { children : React.ReactNode, tooltip: string, onClick: () => void }) {
  return <div className='flex w-12 h-12 items-center justify-center group rounded-3xl hover:rounded-lg bg-gray-500 m-1 text-3xl text-green-600 transition-all hover:text-white hover:bg-green-600 hover:cursor-pointer' onClick={onClick}>
    { children }
    <span className='absolute left-20 text-xs font-bold text-white scale-0 group-hover:scale-100 bg-black p-2 rounded-md'>{tooltip}</span>
  </div>
}

function Divider() {
  return (
    <span className='w-4/6 border-t-2 border-gray-500 my-1'></span>
  )
}