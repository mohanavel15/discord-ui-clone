import React from 'react'
import Activity from './home/activity'
import Friends from './home/friends'
import TopBar from './home/topbar'

export default function Home() {
  return (
    <div className='flex flex-col w-full bg-gray-600'>
        <TopBar />
        <div className='flex h-full w-full'>
            <Friends />
            <Activity />
        </div>
    </div>
  )
}
