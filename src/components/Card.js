import React from 'react'
import Upvote from 'assets/images/upvote.png'


function Card(props) {
    const { className, onClick, _id, title, timeToRead, datePosted, upvotes } = props

    return (
        <div
            onClick={() => onClick(_id)}
            className={ "cursor-pointer p-0.5 rounded-xl bg-gradient-to-r from-[#72FF1C] to-[#00F0FF] via-[#5C24FF] shadow-xl shadow-zinc-600" + className }
        >
            <div className='bg-black rounded-xl px-5 py-3'>
                <div className='flex justify-between'>
                    <h3 className='font-semibold'>{ title }</h3>
                    <p className='flex items-center gap-1'>
                        <img src={ Upvote } alt="upvote" width={30} height={30} />
                        <span className='text-[#72FF1C] text-xl'>{upvotes}</span>
                        upvotes
                    </p>
                </div>
                <div className='flex justify-between'>
                    <i className='text-xs text-zinc-600'>- {datePosted}</i>
                    <i className='text-xs text-zinc-600'>• { timeToRead } minutes read</i>
                </div>
            </div>
        </div>
    )
}

export default Card