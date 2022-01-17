import React from 'react'
import ProjectList, { Project } from '~/components/Projects/ProjectsList'
import deliverEat from '~/assets/deliver-eat-video.png'
import blogsApp from '~/assets/blogs-video.png'
import filmsApi from '~/assets/films-api-video.png'
import motorBusqueda from '~/assets/motor-busqueda-video.png'
import javafx from '~/assets/javafx.png'
import polusPos from '~/assets/polus-pos.png'
import portfolio from '~/assets/portfolio.png'

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
      id: 5,
      name: 'Polus POS',
      image: polusPos,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/polus-pos',
        },
        {
          id: 2,
          name: 'Vercel',
          url: 'https://polus-pos.vercel.app',
        },
      ],
    },
    {
      id: 7,
      name: 'Portfolio',
      image: portfolio,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/portfolio',
        },
        {
          id: 2,
          name: 'Vercel',
          url: 'https://luis-navarro.vercel.app',
        },
      ],
    },
    {
      id: 4,
      name: 'Motor de Busqueda',
      image: motorBusqueda,
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
      id: 3,
      name: 'Conteo de Elecciones',
      image: javafx,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/conteo-elecciones',
        },
      ],
    },
    {
      id: 6,
      name: 'Films Autocomplete API',
      image: filmsApi,
      sites: [
        {
          id: 1,
          name: 'Github',
          url: 'https://github.com/luis-nvrr/autocomplete-films-api',
        },
      ],
    },
  ]

  return <ProjectList projects={projects} />
}

export default Projects
