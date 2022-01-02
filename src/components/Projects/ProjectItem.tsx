/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import ProjectDetails from './ProjectDetails'

export type Site = {
  id: number
  name: string
  url: string
}

type ProjectItemProps = {
  id: string
  name: string
  image: any
  sites: Site[]
  isClicked: Boolean
  clickItem: React.MouseEventHandler<HTMLDivElement>
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  image,
  sites,
  isClicked,
  clickItem,
}) => (
  <div
    id={id}
    className="mx-auto lg:max-w-md bg-zinc-900 relative rounded overflow-hidden shrink-0"
    onClick={clickItem}
  >
    <img
      className="lg:hover:opacity-50 object-cover aspect-auto"
      src={image}
      alt={name}
    />
    {!isClicked && (
      <p className="text-lg font-bold absolute bg-zinc-900/50 inset-x-0 top-0 text-white p-2 w-full">
        {name}
      </p>
    )}
    {isClicked && <ProjectDetails name={name} sites={sites} />}
  </div>
)

export default ProjectItem
