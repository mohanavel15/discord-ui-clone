import ServerBar from '../components/serverbar'
import SideBar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

export default function Channels() {
  return (
    <div className="absolute flex flex-row min-h-screen min-w-full">
      <ServerBar />
      <SideBar />
      <Outlet />
    </div>
  )
}
