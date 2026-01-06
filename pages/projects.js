import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import Base from '../layouts/Base'
import { Box } from '../components/Box'
import FeaturedTalk from '../components/FeaturedTalk'
import stripHtml from '../lib/strip-html'
import items from '../data/projects'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
//import items from '../data/projects'

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Rohini Patturaja',
    tagline: 'Data Analytics. ML Models & AI. Dashboards.',
    image: '/static/images/talks-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Talks(props) {
  const renderFeatured = () => {
  // Flatten all talks from all years
  const allTalks = items.flatMap(item => item.talks)

  return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginTop: '32px',
          alignItems: 'stretch'
        }}
      >
        {allTalks.map((talk, index) => (
          <FeaturedTalk key={index} talk={talk} index={index} />
        ))}
      </div>
    )
  }


  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <p>{item.summary}</p>
          {item.talks.map((talk, tIndex) => {
            return <TalkItem key={tIndex} talk={talk} />
          })}
        </div>
      )
    })
  }

  const getTotalTalks = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].talks.length
    }

    return total
  }

  const { title, image } = props
  //const description = `I went my first conference in 2010 and felt in love with <strong>sharing knowledge</strong> publicly. Since then, I traveled to <strong>11 countries</strong> and gave more than <strong>${getTotalTalks()} talks</strong>. Want me to speak at your event? Hit me up!`
  const description = `A journey through data analytics roles where I've consistently delivered business value through innovative data solutions. I’ve completed over <strong>${getTotalTalks()} projects</strong> spanning dashboards, ML models, AI-driven insights.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://rohinipatturaja.com/talks" property="og:url" />
        <meta content={`https://rohinipatturaja.com${image}`} property="og:image" />
      </Head>

      <>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Projects</h2>
        <Box css={{ margin: '10px 0 0 -20px' }}>{renderFeatured()}</Box>

        {/* <h2>All Projects</h2>
        {renderAll()} */}
      </>
    </>
  )
}

function TalkItem(props) {
  const { talk } = props

  return (
    <div>
      <h3>
        <a href={talk.url} target="_blank">
          {talk.title}
        </a>
      </h3>
      <ul>
        <li>
          <em>When:</em> {format(parseISO(talk.date), 'LLLL, d')}
        </li>
        <li>
          <em>Where:</em> {talk.where}
        </li>
        {talk.attendees && (
          <li>
            <em>Attendees:</em> {talk.attendees}
          </li>
        )}
        {talk.presentations &&
          talk.presentations.map((presentation, pIndex) => {
            return (
              <li key={pIndex}>
                <em>Presentation:</em>{' '}
                <a href={presentation.url} target="_blank">
                  {presentation.title}
                </a>{' '}
                {presentation.video && (
                  <a href={presentation.video} target="_blank">
                    (Video)
                  </a>
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Talks.Layout = Base

export default Talks
