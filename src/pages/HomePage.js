import { Card } from 'components'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { articles } from 'services/constants'


function HomePage() {
  const history = useHistory()
  const [ category, setCategory ] = useState(null)
  const [ titles, setTitles ] = useState([])

  const categories = ["Tech", "Science", "Philosophy", "Mystery", "Adventure", "History", "Romance"]

  useEffect(() => {
    if (category) {
      setTitles(articles)
    }
  }, [ category ])

  const handleClick = _id => {
    history.push(`/article?_id=${_id}&category=${category}`)
  }

  return (
    <>
      <h2 className='font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#72FF1C] to-[#00F0FF] py-5 text-center'>
        Choose your poison!!!
      </h2>
      <div className='flex flex-col h-5/6'>
        <div className='flex gap-5 mt-5'>
          {
            categories.map(item => (
              <div className={ `font-semibold px-10 py-3 hover:bg-zinc-900 cursor-pointer ${ category === item && "rounded-t-3xl bg-zinc-900" }` } onClick={() => setCategory(item)}>
                { item }
              </div>
            ))
          }
        </div>
        {
          category && (
          <div className='bg-zinc-900 p-10 flex-1 h-full overflow-y-scroll rounded-b-3xl grid grid-cols-2 auto-rows-max gap-5 '>
            {
              titles.map(item => (
                <Card { ...item } onClick={ handleClick } />
              ))
            }
          </div>
          )
        }
      </div>
    </>
  )
}

export default HomePage