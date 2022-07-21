import ChannelList from './sidebar/channel_list'
import Profile from './sidebar/profile'
import Search from './sidebar/search'

export default function SideBar() {
  return (
    <div className='flex flex-col w-60 min-h-full max-h-screen bg-gray-700'>
        <Search />
        <ChannelList />
        <Profile />
    </div>
  )
}
