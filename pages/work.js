import { differenceInMonths, format, parseISO } from 'date-fns'
import { motion, LayoutGroup } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import WorkItem from '../components/work/WorkItem'
import WorkModal from '../components/work/WorkModal'
import items from '../data/work'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'
import Link from 'next/link'

export async function getStaticProps() {
  
 return {
    props: {
      title: 'Work // Rohini Patturaja',
      tagline: 'Analyze. Visualize. Optimize.',
      image: '/static/images/work-bw.jpg',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      //featuredPosts,
      //allPosts,
    },
  }
}

/* =========================
   EDUCATION DATA (STATIC)
========================= */
const education = [
  {
    institution: 'University of Central Missouri',
    degree: "Master’s in Data Science & Artificial Intelligence",
    endDate: '2025-12-01',
    location: 'Missouri, USA',
  },
  {
    institution: 'Dr. Sivanthi Adithanar College of Engineering',
    degree: 'Bachelor of Computer Science Engineering',
    endDate: '2016-05-01',
    location: 'Tamil Nadu, India',
  },
]

function Work(props) {
  const [selectedWork, setSelectedWork] = useState(null)

  const getDuration = (start, end) => {
    const startDate = parseISO(start)
    const endDate = end ? parseISO(end) : new Date()
    const months = differenceInMonths(endDate, startDate)
    const years = Math.ceil((months / 12) * 10) / 10

    return years >= 1
      ? `${years.toFixed(1)} yr${years !== 1 ? 's' : ''}`
      : `${months + 1} mos`
  }

  const description = `
    My journey with data began in 2017, and I’ve been passionate about turning
    raw numbers into actionable insights ever since. With over
    <strong>8+ years of experience</strong> across ETL, SQL, and Business Intelligence,
    I’ve helped organizations make <strong>high-impact, data-driven decisions</strong>
    in Healthcare, Energy, Education and domains.
    <br /><br />
    Want me on your team?
    <a href="https://rohinipatturaja-rohinipatturaja.vercel.app/contact" target="_blank">
      Let’s connect →
    </a>
  `

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={stripHtml(description)} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={stripHtml(description)} />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content="https://rohinipatturaja.site/work" />
      </Head>

      <LayoutGroup>
        <Intro dangerouslySetInnerHTML={{ __html: description }} />

        {/* =========================
            WORK EXPERIENCE
        ========================= */}
        <SectionTitle>Work Experience</SectionTitle>
        <Grid>
          {items.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <WorkItem
                work={work}
                onClick={() => setSelectedWork(work)}
              />
            </motion.div>
          ))}
        </Grid>

        {/* =========================
            EDUCATION
        ========================= */}
        <SectionTitle>Education</SectionTitle>
        <EducationGrid>
          {education.map((edu, index) => (
            <EducationItem key={index} item={edu} />
          ))}
        </EducationGrid>
      </LayoutGroup>

      <WorkModal
        work={selectedWork}
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        getDuration={getDuration}
      />
    </>
  )
}

/* =========================
   EDUCATION COMPONENT
========================= */
function EducationItem({ item }) {
  return (
    <EducationCard>
      <h3>{item.institution}</h3>
      <p>{item.degree}</p>
      <Meta>
        <span>{item.location}</span>
        <span>{format(parseISO(item.endDate), 'MMM yyyy')}</span>
      </Meta>
    </EducationCard>
  )
}

/* =========================
   STYLES
========================= */
const Intro = styled('p', {
  maxWidth: '820px',
  fontSize: '17px',
  lineHeight: 1.7,
})

const SectionTitle = styled('h2', {
  marginTop: '60px',
  marginBottom: '20px',
})

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  padding: '20px 0',
})

const EducationGrid = styled('div', {
  maxWidth: '720px',
})

const EducationCard = styled('div', {
  padding: '18px 0',
  borderBottom: '1px solid $hover',

  h3: {
    margin: 0,
    fontSize: '18px',
    color: '$primary',
  },

  p: {
    margin: '4px 0 6px',
    color: '$secondary',
  },
})

const Meta = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '13px',
  color: '$secondary',
})

Work.Layout = Base
export default Work
