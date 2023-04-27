'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'light') {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="flex cursor-pointer p-[.5rem] rounded-[50%] hover:bg-[#E4E6EB]"
        >
          <span>
            <BsFillMoonFill className="dark:text-[#E4E6EB]" />
          </span>
        </button>
      )
    } else {
      return (
        <button
          onClick={() => setTheme('light')}
          className="flex cursor-pointer p-[.5rem] rounded-[50%] hover:bg-[#65676B]"
        >
          <span>
            <BsSunFill className="dark:text-[#E4E6EB]" />
          </span>
        </button>
      )
    }
  }
  return (
    <header className="bg-white fixed top-0 left-0 w-full shadow-[0_1px_2px_rgba(0,0,0,0.2)] z-[99] dark:bg-[#18191A]">
      <nav className="container h-[3.5rem] flex items-center justify-between">
        <a
          href="/"
          className="text-[#050505] cursor-pointer dark:text-[#E4E6EB]"
        >
          Amoji
        </a>
        {renderThemeChanger()}
      </nav>
    </header>
  )
}

export default Navbar
