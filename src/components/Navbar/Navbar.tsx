import React from 'react'
import NavItem from './NavItem'

const Navbar: React.FC = () => {
  const pages = [
    { name: 'Presentation', link: 'http://google.com' },
    { name: 'Projects', link: 'http://google.com' },
  ]

  const current = 'Presentation'

  return (
    <nav>
      <ul className="flex items-center justify-center text-base text-gray-700 pt-4 ">
        {pages.map((page) => (
          <NavItem name={page.name} link={page.link} current={current} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
