import React from 'react'

interface ItemProps {
  name: string
  link: string
  current: string
}

const NavItem: React.FC<ItemProps> = ({ name, link, current }) => (
  <li>
    <a
      className={`py-3 px-4 block border-b-2 border-transparent hover:border-orange-500 ${
        current === link ? 'border-orange-500' : ''
      }`}
      href={link}
    >
      {name}
    </a>
  </li>
)

export default NavItem
