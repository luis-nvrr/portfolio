import React from 'react'
import { Site } from './ProjectItem'
import ProjectSite from './ProjectSite'

type ProjectDetailsProps = {
  name: string
  sites: Site[]
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ name, sites }) => (
  <div className="flex flex-col justify-center absolute inset-0 bg-zinc-900/70 text-white text-center text-sm select-none">
    <p className="text-xl font-bold">{name}</p>
    <ul className="flex flex-col space-y-2 mt-4">
      {sites.map((site) => (
        <ProjectSite key={site.id} name={site.name} url={site.url} />
      ))}
    </ul>
  </div>
)

export default ProjectDetails
