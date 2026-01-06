import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
import stripHtml from '../lib/strip-html'
import items from '../data/awards'

export async function getStaticProps() {
  const meta = {
    title: 'Awards // Rohini Patturaja',
    tagline: 'Excellence. Recognition. Impact.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Projects(props) {
  const renderFeatured = () => {
    const featured = ['Dracula', 'Clipboard.js', 'Resend', 'React Email']

    return items
      .map(item => {
        return item.projects.filter(project => featured.includes(project.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <ProjectItem key={pIndex} project={project} />
            })}
          </ul>
        </div>
      )
    })
  }

  const getTotalProjects = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length
    }

    return total
  }

  const { title, image } = props
  //const description = `I'm obsessed with side projects and <strong>building in public</strong>. Here you can navigate to <strong>${getTotalProjects()} different</strong> websites, apps, and libraries I built. Some projects are still active, others have been discontinued.`
  const description = `Throughout my career, I’ve been fortunate to receive <strong>recognition for excellence and impact</strong>. Here you can explore some of my key honors and awards, celebrating contributions across <strong>Business Intelligence, Data Analytics, and ETL</strong> initiatives.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://rohinipatturaja.com/projects" property="og:url" />
        <meta content={`https://rohinipatturaja.com${image}`} property="og:image" />
      </Head>

      <>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Honors & Awards</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

        {renderAll()}
      </>
    </>
  )
}

function ProjectItem(props) {
  const { project } = props

  //return (
   // <li>
    //  <a href={project.url} target="_blank">
     //   {project.title}
    //  </a>
   // </li>
  //)
//}
   return (
    <li style={{ marginBottom: '14px' }}>
      <strong style={{ display: 'block', fontWeight: 600 }}>
        {project.title}
      </strong>

      {project.description && (
        <p
          style={{
            margin: '4px 0 0',
            color: '#aaa',
            fontSize: '14px',
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </p>
      )}
    </li>
  )
}

Projects.Layout = Base

export default Projects
