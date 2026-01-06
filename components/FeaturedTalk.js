import { useState } from 'react'
import Image from 'next/image'
import { styled } from '../stitches.config'
import { motion } from 'framer-motion'

export default function FeaturedTalk(props) {
  const { talk } = props

  return (
    <Animation index={props.index}>
      <Content>
        <ImageContainer>
          <Image src={talk.cover} alt={talk.title} width="250" height="138" />
        </ImageContainer>

        <Info>
          <Title>{talk.title}</Title>
          {talk.summary && <Paragraph>{talk.summary}</Paragraph>}
          {talk.technologies && (
            <BadgeContainer>
              {talk.technologies.map((tech, idx) => (
                <Badge key={idx}>{tech}</Badge>
              ))}
            </BadgeContainer>
          )}
          {talk.metrics && (
            <BadgeContainer>
              {talk.metrics.map((metric, idx) => (
                <MetricBadge key={idx}>{metric}</MetricBadge>
              ))}
            </BadgeContainer>
          )}
          {talk.links && (
            <Links>
              {talk.links.github && (
                <Link href={talk.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              )}
              {talk.links.tableau && (
                <Link href={talk.links.tableau} target="_blank" rel="noopener noreferrer">
                  Tableau
                </Link>
              )}
            </Links>
          )}
        </Info>
      </Content>
    </Animation>
  )
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return (
    <AnimContainer
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
    >
      {isHovered && (
        <AnimHovered
          layoutId="featuredTalks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {props.children}
    </AnimContainer>
  )
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

const ImageContainer = styled('div', {
  width: '100%',
  height: '180px',
  borderRadius: '10px',
  overflow: 'hidden',
  marginBottom: '12px',
  '& img': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.03)',
  },
})

const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

const Title = styled('h3', {
  color: '$primary',
  fontSize: '18px',
  margin: '0',
})

const Paragraph = styled('p', {
  color: '$secondary',
  margin: '0',
})

const BadgeContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
})

const Badge = styled('span', {
  background: '$hover',
  color: '$primary',
  fontSize: '12px',
  padding: '4px 8px',
  borderRadius: '999px',
})

const MetricBadge = styled('span', {
  background: '$highlight',
  color: '#ffffff',
  fontSize: '12px',
  padding: '4px 8px',
  borderRadius: '999px',
}) 


const Links = styled('div', {
  display: 'flex',
  gap: '10px',
  marginTop: '8px',
})

const Link = styled('a', {
  fontSize: '13px',
  fontWeight: '500',
  color: '$primary',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
})

const AnimContainer = styled(motion.div, {
  padding: '20px',
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '$background',
  borderRadius: '16px',
  border: '1px solid $border',
  transition: 'transform 0.25s ease',
  '&:hover': { transform: 'translateY(-4px)' },
})

const AnimHovered = styled(motion.div, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})
