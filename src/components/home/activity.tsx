import React from 'react'

export default function Activity() {
  return (
    <div className='h-full w-1/4 flex flex-col'>
      <h1 className='m-6 font-bold text-2xl text-white'>Active Now</h1>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-lg text-white'>It's quiet for now...</h3>
        <p className='text-gray-400 text-xs text-center w-10/12'>When a friend starts an activity—like playing a game or hanging out on voice—we'll show it here!</p>
      </div>
    </div>
  )
}
