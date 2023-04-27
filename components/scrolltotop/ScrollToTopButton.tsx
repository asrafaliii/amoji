'use client'
import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { useWindowScroll } from 'react-use'

const ScrollToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setShowScrollTop(pageYOffset >= 400)
  }, [pageYOffset])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <a
      className={showScrollTop ? 'scroll_top bottom-[1.5rem]' : 'scroll_top'}
      onClick={scrollTop}
    >
      <BsArrowUp size={20} className="text-[#18191A] dark:text-[#E4E6EB]" />
    </a>
  )
}

export default ScrollToTopButton
