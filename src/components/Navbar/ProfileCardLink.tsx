import React from 'react'

type ProfileCardLinkProps = {
  symbol: string
  name: string
}

const ProfileCardLink: React.FC<ProfileCardLinkProps> = ({ symbol, name }) => (
  <a
    className="text-orange-600 px-2 underline lg:text-neutral-900 lg:no-underline lg:hover:underline lg:hover:text-orange-600"
    href="https://vitejs.dev/guide/features.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    {symbol} | {name}
  </a>
)

export default ProfileCardLink
