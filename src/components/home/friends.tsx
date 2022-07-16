import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Friends() {
  return (
    <div className='w-4/5 border-r-2 border-gray-500'>
      <div className='mx-10 h-16 flex justify-evenly items-center'>
        <div className='bg-gray-900 w-11/12 h-8 rounded flex items-center justify-evenly'>
          <input className='w-11/12 h-full bg-transparent text-white outline-none' type="text" placeholder='Search' />
          <MdSearch className='text-gray-400 text-xl' />
        </div>
      </div>
    </div>
  )
}
