import React, { useCallback, useState } from 'react'

interface EmojiProps {
  emoji: {
    id: number
    symbol: string
    title: string
  }
}

const Emoji = ({ emoji }: EmojiProps) => {
  const [fadeIn, setFadeIn] = useState(false)

  const handleClipboard = useCallback(
    (e: React.MouseEvent) => {
      setFadeIn(true)
      setTimeout(() => setFadeIn(false), 1000)
      navigator.clipboard.writeText(emoji.symbol)
    },
    [emoji.symbol]
  )
  return (
    <div
      className="selector"
      key={emoji.id}
      title="Copy Emoji to Clipboard 📋"
      onClick={handleClipboard}
    >
      <div className="text-[2.4rem]">{emoji.symbol}</div>
      <div className="text-center text-[12px] text-[#050505] dark:text-[#E4E6EB]">
        {emoji.title}
      </div>
      <div className={`item-copy ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        Copied!
      </div>
    </div>
  )
}

export default Emoji
