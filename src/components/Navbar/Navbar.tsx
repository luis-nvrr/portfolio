import React from 'react'
import { useLocation } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar: React.FC = () => {
  const pages = [
    { id: 1, name: 'About me', link: '/about' },
    { id: 2, name: 'Projects', link: '/projects' },
  ]

  const { pathname } = useLocation()

  return (
    <nav>
      <ul className="flex items-center justify-center text-base text-gray-700 pt-4 ">
        {pages.map((page) => (
          <NavItem
            key={page.id}
            name={page.name}
            link={page.link}
            current={pathname}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
