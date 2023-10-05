import React from 'react'
import Logo from 'assets/images/logo.png'
import { Btn } from 'components'


function JoiningPage() {

  return (
    <div className='flex h-[90%] pt-20 gap-20 justify-around'>
      <div className='w-[40%] rounded-2xl p-20 bg-zinc-900 flex flex-col items-center space-y-10'>
        <div className='bg-gradient-to-br from-zinc-700 to-zinc-700 via-zinc-300 h-2/3 w-1/2 rounded-xl flex flex-col items-center justify-between p-10'>
          <h2 className='text-black font-semibold text-3xl'>SKIM</h2>
          <img src={ Logo } alt="logo" width={120} />
          <h2 className='text-center text-2xl text-white'>Member</h2>
        </div>
        <input placeholder='username' className='bg-zinc-900 border-b focus:outline-none' />
        <Btn>Mint @ 1 SOL</Btn>
      </div>
      <div className='w-[40%] rounded-2xl p-20 bg-zinc-900 flex flex-col items-center space-y-10'>
        <div className='bg-gradient-to-br from-zinc-950 to-zinc-950 via-zinc-500 h-2/3 w-1/2 rounded-xl flex flex-col items-center justify-between p-10'>
          <h2 className='text-black font-semibold text-3xl'>SKIM</h2>
          <img src={ Logo } alt="logo" width={120} />
          <h2 className='text-center text-2xl text-white'>Moderator</h2>
        </div>
        <input placeholder='username' className='bg-zinc-900 border-b focus:outline-none' />
        <Btn>Mint @ 5 SOL</Btn>
      </div>
    </div>
  )
}

export default JoiningPage