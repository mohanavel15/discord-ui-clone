import { useMemo } from 'react'
import { Channel } from '../../models/channel'
import { User } from '../../models/user'
import { routes_ } from '../../routes'

export default function MemberBar({ channel }:{ channel : Channel }) {
    const members = useMemo(() => {
        const members_list: JSX.Element[] = []

        channel.recipients.forEach((user) => {
            members_list.push(<Member user={user} />)
        })

        return members_list
    }, [channel])
    return (
        <div className='flex flex-col bg-gray-700 h-full w-1/6 self-end'>
            <span className='font-bold text-gray-400 text-sm mx-6 my-2'>MEMBERS—{members.length}</span>
            {members}
        </div>
    )
}

function Member({ user }: { user : User}) {
    return (
        <div className='flex items-center mx-6 my-2 hover:bg-gray-600 rounded p-1 hover:cursor-pointer'>
            <img src={user.avatar} 
            alt="avatar"
            onError={e => e.currentTarget.src = routes_.logo512 }
            className="rounded-full w-10 h-10 mx-2"
            />
            <span className='text-white text-lg'>{ user.name }</span>
        </div>
    )
}