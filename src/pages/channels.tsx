import React from 'react'
import Home from '../components/home'
import ServerBar from '../components/serverbar'
import SideBar from '../components/sidebar'

export default function Channels() {
  return (
    <div className="absolute flex flex-row min-h-screen min-w-full">
      <ServerBar />
      <SideBar />
      <Home />
    </div>
  )
}
