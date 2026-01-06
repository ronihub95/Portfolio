import { format, parseISO } from 'date-fns'
import React from 'react'
import { styled } from '../../stitches.config'
import Modal from '../modal/Modal' // Use named export Modal

export default function WorkModal({ work, isOpen, onClose, getDuration }) {
  if (!work) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Header with company logo */}
      <Header>
        <Logo src={work.companyLogo} alt={`${work.company} logo`} />
        <HeaderText>
          <Title>{work.jobTitle}</Title>
          <Company>{work.company}</Company>
          {work.roleType && <RoleType>{work.roleType}</RoleType>}
        </HeaderText>
      </Header>

      {/* Meta information */}
      <MetaInfo>
        <span>
          {work.startDate
            ? format(parseISO(work.startDate), 'MMM yyyy')
            : 'Unknown'}{' '}
          -{' '}
          {work.endDate
            ? format(parseISO(work.endDate), 'MMM yyyy')
            : 'Present'}
          {' • '}
          {work.startDate && getDuration(work.startDate, work.endDate)}
        </span>
        {work.location && <span>{work.location}</span>}
      </MetaInfo>

      {/* Highlights */}
      {work.highlights?.length > 0 && (
        <Highlights>
          {work.highlights.map((item, index) => (
            <HighlightItem key={index}>✨ {item}</HighlightItem>
          ))}
        </Highlights>
      )}

      {/* Description (supports array of strings/HTML) */}
      {work.description?.length > 0 && (
        <Description>
          {work.description.map((item, index) => (
            <DescriptionItem
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </Description>
      )}

      {/* Technologies */}
      {work.technologies?.length > 0 && (
        <TechStack>
          <TechTitle>Technologies</TechTitle>
          <TechList>
            {work.technologies.map((tech, idx) => (
              <TechItem key={idx}>{tech}</TechItem>
            ))}
          </TechList>
        </TechStack>
      )}

      {/* Company Website */}
      {work.companyUrl && (
        <Link href={work.companyUrl} target="_blank" rel="noopener noreferrer">
          Visit Company Website →
        </Link>
      )}
    </Modal>
  )
}

// ================= STYLED COMPONENTS =================

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '25px',
  flexWrap: 'wrap',
})

const Logo = styled('img', {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
  flexShrink: 0,
})

const HeaderText = styled('div', {
  flex: 1,
  minWidth: 0,
})

const Title = styled('h1', {
  fontSize: '22px',
  fontWeight: '600',
  color: '$primary',
  margin: '0 0 4px 0',
  lineHeight: 1.3,
  wordBreak: 'break-word',
})

const Company = styled('h2', {
  fontSize: '16px',
  fontWeight: '400',
  color: '$secondary',
  margin: 0,
})

const RoleType = styled('p', {
  fontSize: '14px',
  fontStyle: 'italic',
  color: '$highlight',
  marginTop: '4px',
})

const MetaInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '10px 0',
  borderTop: '1px solid $hover',
  borderBottom: '1px solid $hover',
  margin: '20px 0',
  fontSize: '14px',
  color: '$secondary',
  lineHeight: 1.5,
  '@bp1': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const Highlights = styled('div', {
  backgroundColor: '$hover',
  padding: '15px',
  borderRadius: '8px',
  marginBottom: '20px',
})

const HighlightItem = styled('p', {
  fontSize: '14px',
  margin: '0 0 8px 0',
  color: '$highlight',
})

const Description = styled('div', {
  color: 'white',
  fontSize: '16px',
  lineHeight: 1.7,
})

const DescriptionItem = styled('p', {
  margin: '0 0 12px 0',
  paddingLeft: '20px',
  position: 'relative',
  '&::before': {
    content: '"•"',
    position: 'absolute',
    left: '0',
    color: '$primary',
    fontWeight: 'bold',
  },
})

const TechStack = styled('div', {
  marginTop: '25px',
})

const TechTitle = styled('h3', {
  color: '$primary',
  fontSize: '16px',
  marginBottom: '10px',
})

const TechList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
})

const TechItem = styled('span', {
  backgroundColor: '$hover',
  color: '$primary',
  fontSize: '13px',
  padding: '6px 12px',
  borderRadius: '999px',
})

const Link = styled('a', {
  display: 'inline-block',
  fontSize: '14px',
  color: '$primary',
  textDecoration: 'none',
  fontWeight: '500',
  marginTop: '15px',
  '&:hover': {
    textDecoration: 'underline',
  },
})
