import MetricBadge from './MetricBadge'
import { styled } from '../stitches.config'

export default function AboutMetrics() {
  return (
    <Row>
      <MetricBadge label="About Page Views" page="about" />
    </Row>
  )
}

const Row = styled('div', {
  display: 'flex',
  margin: '28px 0 36px 0',
  '@bp2': {
    marginLeft: '52%',
  },
})
