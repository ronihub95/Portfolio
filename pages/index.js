import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { getPersonJsonLd } from '../lib/json-ld'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/* =========================
   Rolling Text Component
   ========================= */
function RollingText({ items, interval = 1800 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!items || items.length === 0) return

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items, interval])

  return (
    <motion.span
      key={items[index].name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'inline-block',
        marginLeft: 4,
        color: items[index].color,
      }}
    >
      {items[index].name}
    </motion.span>
  )
}

/* =========================
   Page Props
   ========================= */
export async function getStaticProps() {
  return {
    props: {
      title: 'Rohini Patturaja',
      description: 'Obsessed with data',
      image: '/static/images/home-bw.jpg',
    },
  }
}

/* =========================
   Page Component
   ========================= */
export default function Index(props) {
  const { title, description, image } = props

  const companies = [
    { name: 'IBM', color: '#0F62FE' },
    { name: 'CGI', color: '#E31937' },
  ]

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://rohinipatturaja.com" property="og:url" />
        <meta content={`https://rohinipatturaja.com${image}`} property="og:image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
          key="person-jsonld"
        />
      </Head>

      <Navbar />

      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>

              <p>
                <strong>
                  Business Intelligence Analyst at
                  <RollingText items={companies} />
                </strong>
                <br />
                {description}
              </p>

              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>

      <Footer />
    </Wrapper>
  )
}

/* =========================
   Styles
   ========================= */
const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

