import React from 'react'
import ProjectItem, { Site } from './ProjectItem'

export type Project = {
  id: number
  image: any
  name: string
  sites: Site[]
}

type ProjectsListProps = {
  projects: Project[]
}

const ProjectList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [itemClicked, setItemClicked] = React.useState<string>('')

  const handleItemClick = (e: any) => {
    const { id } = e.currentTarget
    if (id !== itemClicked) {
      setItemClicked(id)
      return
    }
    setItemClicked('')
  }

  return (
    <ul className="flex flex-col gap-8 p-8 overflow-y-auto">
      {projects.map((project) => (
        <ProjectItem
          id={String(project.id)}
          isClicked={itemClicked === String(project.id)}
          key={project.id}
          name={project.name}
          image={project.image}
          sites={project.sites}
          clickItem={handleItemClick}
        />
      ))}
    </ul>
  )
}

export default ProjectList
