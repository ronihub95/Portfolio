import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { RoughNotation } from 'react-rough-notation'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Pronunciation from '../components/Pronunciation'
import Toast from '../components/Toast'
import stripHtml from '../lib/strip-html'
//import items from '../data/about'
import Toolbox from '../components/Toolbox'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'
//import AboutMetrics from '../components/AboutMetrics'


export async function getStaticProps() {
  const meta = {
    title: 'About // Rohini Patturaja',
      description:`
      Rohini Patturaja is a results-driven Business Intelligence Analyst with 8+ years of cross-industry experience designing enterprise dashboards, ETL automation workflows,
       and advanced analytics solutions across healthcare, energy, and marketing sectors. She specializes in SQL, BI visualization tools, predictive modeling, customer segmentation, 
       and domain-specific analytics, leading critical projects at IBM and CGI that enhanced operational efficiency, marketing ROI, and strategic planning across diverse business environments. 
       Her implementation of automated ETL processes, industry-tailored forecasting models, regulatory compliance dashboards, and multi-channel attribution systems has empowered stakeholders with actionable insights that drive performance optimization and business growth.
      Rohini's versatile expertise enables her to quickly adapt analytical frameworks to unique industry requirements, transforming complex data into strategic business value.  
      `,

    tagline: 'Data. Insight. Impact.',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const copyBioRef = React.useRef()
  const downloadRef = React.useRef()

  const renderIntro = () => {
    return (
      <Container>
        <Section css={{
          width: '336px'
        }}>
          <Image
            alt="Rohini"
            src="/static/images/Profile1.jpg"
            width="600"
            height="450"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Hey, I'm Rohini Patturaja</strong>
            <Pronunciation />
            I fell in love with data while untangling messy billing reports at IBM—turning confusion into clarity sparked my obsession with analytics. Now, I transform raw numbers into insights that drive real business impact.
          </Paragraph>
          <Paragraph>
            I enjoy geeking out with fellow data enthusiasts. Outside of work, I connect with friends, volunteer, create content, model or experiment in the kitchen.
           </Paragraph>
           <Paragraph>
            <strong>
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                iterations={2}
                strokeWidth={3}
                multiline={true}
                color="#E50914"
                show={true}
              >
                Available to Work.
              </RoughNotation>
            </strong>
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderBio = () => {
    const btnStyle = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }
    const iconStyle = { width: 24, height: 24, marginRight: 8 }

    return (
      <div>
        <p>This is my professional bio highlighting my strengths and achievements in analytics.</p>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        <ButtonsContainer>
          <ButtonPrimary
            as="button"
            style={btnStyle}
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <Lottie
              lottieRef={copyBioRef}
              style={iconStyle}
              animationData={copyBioIcon}
              loop={false}
              autoplay={false}
            />
            Copy Bio
          </ButtonPrimary>
          {/* <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary
            as="a"
            download
            role="button"
            href="https://drive.google.com/file/d/1AFaw-kN7FICEw2PjpTjLfMAP_zUQh3pu/view?usp=drive_link"
            target="_blank"
            style={btnStyle}
            onClick={downloadResume}
            onMouseEnter={() => downloadRef.current?.play()}
            onMouseLeave={() => downloadRef.current?.stop()}
          >
            <Lottie
              lottieRef={downloadRef}
              style={iconStyle}
              animationData={downloadIcon}
              loop={false}
              autoplay={false}
            />
            Download Resume
          </ButtonPrimary> */}
        </ButtonsContainer>
      </div>
    )
  }


  const downloadResume = () => {
    setToastTitle('Downloading...')
    setToastDescription('You can now hire me :)')
    setShowToast(true)
  }

  const copyBio = e => {
    e.preventDefault()
    navigator.clipboard.writeText(description)

    setToastTitle('Copied :D')
    setToastDescription('You can now paste it anywhere.')
    setShowToast(true)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://rohinipatturaja.com/about" property="og:url" />
        <meta content={`https://rohinipatturaja.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}
    
      <h2>Bio</h2>
      {renderBio()}

      {/* <h2>Career</h2>
      {renderAll()} */}
    

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <Toolbox />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center',
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
