import { motion } from 'framer-motion'
import Image from 'next/image'
import { styled } from '../stitches.config'

const tools = [
  { name: 'SQL Server', icon: '/static/tools/sql-server.svg' },
  { name: 'Oracle', icon: '/static/tools/oracle.svg' },
  { name: 'MySQL', icon: '/static/tools/mysql.svg' },
  { name: 'PostgreSQL', icon: '/static/tools/postgresql.svg' },
  { name: 'Excel', icon: '/static/tools/excel.svg' },
  { name: 'Python', icon: '/static/tools/python.svg' },
  { name: 'Power BI', icon: '/static/tools/powerbi.svg' },
  { name: 'Tableau', icon: '/static/tools/tableau.svg' },
  { name: 'Informatica', icon: '/static/tools/informatica.svg' },
  { name: 'AWS', icon: '/static/tools/aws.svg' },
  { name: 'Jira', icon: '/static/tools/jira.svg' },
  { name: 'Git', icon: '/static/tools/git.svg' },
  { name: 'Slack', icon: '/static/tools/slack.svg' },
  { name: 'Microsoft Teams', icon: '/static/tools/teams.svg' },
]

export default function Toolbox() {
  return (
    <ToolboxContainer>
      <h2>My Toolbox</h2>

      <ToolGrid>
        {tools.map((tool, index) => (
          <Tool
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <IconWrapper>
              <img
                src={tool.icon}
                alt={tool.name}
                width={40}
                height={40}
              />
            </IconWrapper>

            <ToolName>{tool.name}</ToolName>
          </Tool>
        ))}
      </ToolGrid>
    </ToolboxContainer>
  )
}
const ToolboxContainer = styled('div', {
  marginTop: '3rem',
})

const ToolGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
})

const Tool = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.2rem',
  borderRadius: '14px',
  background: '$hover',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '$background',
  },
})

const IconWrapper = styled('div', {
  marginBottom: '0.6rem',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(6deg) scale(1.1)',
  },
})

const ToolName = styled('span', {
  fontSize: '0.85rem',
  color: '$secondary',
  textAlign: 'center',
})
