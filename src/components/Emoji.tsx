import React from 'react'

type EmojiProps = {
  label: string
  symbol: string
}

const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => (
  <span className="" role="img" aria-label={label}>
    {symbol}
  </span>
)

export default Emoji
