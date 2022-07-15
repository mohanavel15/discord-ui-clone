import React from 'react'
import Profile from './sidebar/profile'
import Search from './sidebar/search'

export default function SideBar() {
  return (
    <div className='w-60 min-h-full bg-gray-700'>
        <Search />
        <Profile />
    </div>
  )
}
