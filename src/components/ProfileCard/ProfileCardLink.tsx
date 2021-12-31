import React from 'react'

type ProfileCardLinkProps = {
  symbol: any
  name: string
  link: string
}

const ProfileCardLink: React.FC<ProfileCardLinkProps> = ({
  symbol,
  name,
  link,
}) => (
  <a
    className="px-2 text-orange-600 underline lg:text-neutral-900 lg:no-underline lg:hover:underline lg:hover:text-orange-600"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-8 h-8 mx-auto block" src={symbol} alt={name} /> {name}
  </a>
)

export default ProfileCardLink
