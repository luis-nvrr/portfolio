import React from 'react'
import ProjectList, { Project } from '~/components/Projects/ProjectsList'
import deliverEat from '~/assets/deliver-eat.png'
import blogsApp from '~/assets/blogs.png'
import noImage from '~/assets/no-image.jpg'

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'DeliverEat!',
      image: deliverEat,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/deliver-eat-dev',
        },
        { id: 2, name: 'Heroku', url: 'https://deliver-eat-isw.herokuapp.com' },
      ],
    },
    {
      id: 2,
      name: 'BlogsApp',
      image: blogsApp,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/fullstack-open-2021-part11-blogs',
        },
        {
          id: 2,
          name: 'Heroku',
          url: 'https://luisnvrr-blogs-cicd.herokuapp.com/',
        },
      ],
    },
    {
      id: 3,
      name: 'Conteo de Elecciones',
      image: noImage,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/conteo-elecciones',
        },
      ],
    },
    {
      id: 4,
      name: 'Motor de Busqueda',
      image: noImage,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/motor-busqueda-api',
        },
        {
          id: 2,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/motor-busqueda-frontend',
        },
      ],
    },
    {
      id: 6,
      name: 'Films Autocomplete API',
      image: noImage,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/autocomplete-films-api',
        },
      ],
    },
    {
      id: 7,
      name: 'Adviency Challenge',
      image: noImage,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/adviency-challenge',
        },
      ],
    },
  ]

  return <ProjectList projects={projects} />
}

export default Projects
