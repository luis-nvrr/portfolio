import React from 'react'
import profile from '~/assets/profile.jpg'
import ProfileCardLink from './ProfileCardLink'

const ProfileCard: React.FC = () => {
  const links = [
    { symbol: 'github', name: 'github' },
    { symbol: 'linkedin', name: 'linkedin' },
  ]
  return (
    <div className="flex flex-col items-center space-y-4 shadow-md  px-6 py-4 rounded-lg">
      <img
        src={profile}
        className="object-center rounded-full w-36 h-36"
        alt="profile"
      />
      <div className="flex flex-row">
        {links.map((link) => (
          <ProfileCardLink symbol={link.symbol} name={link.name} />
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
