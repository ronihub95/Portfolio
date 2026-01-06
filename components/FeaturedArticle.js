import { styled } from '../stitches.config'
import { useState } from 'react'
import { motion } from 'framer-motion'
//import readingTime from 'reading-time'

export default function FeaturedArticle({ index, href, title, description, image, content }) {
  //const stats = readingTime(content)

  return (
    <Article href={href}>
      <Animation index={index}>
        <Container>
          <ImageContainer style={{ backgroundImage: `url(${image})` }} />
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {/* <Stats>{stats.text}</Stats> */}
          </Content>
        </Container>
      </Animation>
    </Article>
  )
}

function Animation({ children, index }) {
  const [hovered, setHovered] = useState(null)
  const isHovered = hovered === index

  return (
    <AnimContainer
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered(null)}
    >
      {isHovered && <AnimHovered layoutId="featuredArticles" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} />}
      {children}
    </AnimContainer>
  )
}

// ================== Styled Components ==================

const Article = styled('a', {
  flex: '1 1 300px', // responsive
  minWidth: '280px',
  maxWidth: '370px',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const ImageContainer = styled('div', {
  borderRadius: '8px',
  width: '100%',
  height: '180px',
  marginBottom: '16px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
})

const Content = styled('div', {
  margin: 0,
})

const Title = styled('h3', {
  color: '$primary',
  margin: '0 0 8px 0',
})

const Description = styled('p', {
  color: '$secondary',
  margin: 0,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

const Stats = styled('p', {
  margin: '8px 0 0 0',
  color: '$primary',
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '1px',
  textTransform: 'uppercase',
})

const AnimContainer = styled(motion.div, {
  position: 'relative',
  width: '100%',
})

const AnimHovered = styled(motion.div, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: 1,
  pointerEvents: 'none',
})
