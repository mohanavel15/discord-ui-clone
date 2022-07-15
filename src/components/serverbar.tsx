import React from 'react'
import { AiOutlinePlus, AiFillCompass, AiOutlineDownload, AiFillHome } from 'react-icons/ai'

export default function ServerBar() {
  return (
    <div className='w-20 min-h-full bg-gray-900 flex flex-col items-center'>
      <ServerIcon tooltip='Home'>
        <AiFillHome />
      </ServerIcon>
      <ServerIcon tooltip='Add a Server'>
        <AiOutlinePlus />
      </ServerIcon>
      <ServerIcon tooltip='Explore Public Servers'>
        <AiFillCompass />
      </ServerIcon>
      <ServerIcon tooltip='Download Apps'>
        <AiOutlineDownload />
      </ServerIcon>
    </div>
  )
}

function ServerIcon({ children, tooltip }: { children : React.ReactNode, tooltip: string }) {
  return <div className='flex w-12 h-12 items-center justify-center group rounded-3xl hover:rounded-lg bg-gray-500 m-1 text-3xl text-green-600 transition-all hover:text-white hover:bg-green-600 hover:cursor-pointer'>
    { children }
    <span className='absolute left-20 text-xs font-bold text-white scale-0 group-hover:scale-100 bg-black p-2 rounded-md'>{tooltip}</span>
  </div>
}
