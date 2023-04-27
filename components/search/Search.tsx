'use client'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import EmojiData from '../../utils/emoji.json'
import Emoji from '../emoji/Emoji'

interface Emoji {
  id: number
  title: string
  symbol: string
  keywords: string
}

const Search = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState<Emoji[]>([])

  useEffect(() => {
    const newData = _.map(EmojiData, (emoji: any, index: any) => ({
      ...emoji,
      id: index
    })).filter((emoji: { title: any }) =>
      _.includes(_.lowerCase(emoji.title), _.lowerCase(search))
    )
    setData(newData)
  }, [search])
  return (
    <section className="container !max-w-[1024px] flex flex-col gap-[2rem] p-[2rem_0]">
      <input
        className="focus:outline-0 p-[12px] rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] m-auto w-full sm:w-[500px] dark:bg-[#18191A] dark:text-[#E4E6EB]"
        placeholder="Search for a keyword..."
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid gap-[2rem] relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {_.isEmpty(data) ? (
          <p className="text-center absolute top-0 left-0 right-0 text-#18191A dark:text-#E4E6EB">
            No Results Found
          </p>
        ) : (
          _.take(data, 100).map((emoji, index) => (
            <Emoji emoji={emoji} key={index} />
          ))
        )}
      </div>
    </section>
  )
}

export default Search
