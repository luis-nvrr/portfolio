import React from 'react'
import githubLogo from '~/assets/github-logo.svg'
import herokuLogo from '~/assets/heroku-logo.svg'
import vercelLogo from '~/assets/vercel-logo.png'

type SiteProps = {
  name: string
  url: string
}

const sitesToLogoMap = new Map<string, any>([
  ['Github', githubLogo],
  ['Heroku', herokuLogo],
  ['Vercel', vercelLogo],
])

const ProjectSite: React.FC<SiteProps> = ({ name, url }) => (
  <a
    className="mx-auto space-x-2"
    href={`${url}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-7 h-7 inline" src={sitesToLogoMap.get(name)} alt={name} />
    <span className="text-orange-600 underline ">Ver en {name}</span>
  </a>
)

export default ProjectSite
