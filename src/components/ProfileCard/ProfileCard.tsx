import React from 'react'
import profile from '~/assets/profile.jpg'
import ProfileCardLink from './ProfileCardLink'

const ProfileCard: React.FC = () => {
  const links = [
    {
      id: 1,
      symbol: 'github.svg',
      name: 'Github',
      link: 'https://www.github.com/luis-nvrr',
    },
    {
      id: 2,
      symbol: 'linkedin.svg',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/luisnavarro-',
    },
  ]

  return (
    <div className="flex flex-col items-center space-y-4 shadow-lg px-10 py-4 rounded-lg bg-slate-50">
      <img
        src={profile}
        className="object-center rounded-full w-36 h-36"
        alt="profile"
      />
      <div className="flex flex-row">
        {links.map((link) => (
          <ProfileCardLink
            key={link.id}
            symbol={link.symbol}
            name={link.name}
            link={link.link}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
