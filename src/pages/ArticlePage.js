import React from 'react'
import { useHistory } from 'react-router-dom'
import { articles } from 'services/constants'
import Upvote from 'assets/images/upvote.png'


function ArticlePage() {
  const history = useHistory()
  const [ _id, category ] = history.location.search.replace("?", '').split("&").map(item => item.split("=")[1])
  const { title, datePosted, upvotes, timeToRead, desciption } = articles.filter(item => item._id === _id)[0]

  return (
    <div className='mt-20 bg-zinc-900 mx-10 p-10 rounded-3xl'>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#72FF1C] to-[#00F0FF]'>{title}</h1>
          <i className='text-zinc-600'>- {datePosted} • {timeToRead} minutes read</i>
        </div>
        <div className='text-xl bg-black px-10 py-3 rounded-xl shadow-sm shadow-zinc-600'>{category}</div>
      </div>
      <p className='py-10'>{desciption}</p>
      <div className='flex justify-end px-10'>
        <p className='flex items-center gap-1'>
            <img src={ Upvote } alt="upvote" width={30} height={30} />
            <span className='text-[#72FF1C] text-xl'>{upvotes}</span>
            upvotes
        </p>
      </div>
    </div>
  )
}

export default ArticlePage