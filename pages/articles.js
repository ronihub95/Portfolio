import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import FeaturedArticle from '../components/FeaturedArticle'
import { ListGroup } from '../components/ListGroup'
import { getAllPosts, getPostBySlug } from '../lib/blog'
import ListItem from '../components/ListItem'

export async function getStaticProps() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title'])

  const featuredParams = ['date', 'slug', 'title', 'image', 'content', 'description']
  const featuredPosts = [
    getPostBySlug('ibm', featuredParams),
    getPostBySlug('cgi', featuredParams),
    getPostBySlug('ucm', featuredParams),
  ]

  return {
    props: {
      title: 'Work // Rohini Patturaja',
      tagline: 'Analyze. Visualize. Optimize.',
      image: '/static/images/articles-bw.jpg',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      featuredPosts,
      allPosts,
    },
  }
}

export default function Articles(props) {
  const { title, image, featuredPosts, allPosts } = props

  const description = `My journey with data began in 2017, and I’ve been passionate about turning raw numbers into actionable insights ever since. With over <strong>6 years of experience</strong> in ETL, SQL, and business intelligence, I’ve helped teams make <strong>data-driven decisions</strong> across Healthcare and Energy domains. Want me to work with you? <a href="https://www.rohinipatturaja.site/contact" target="_blank">Let's connect!</a>`

  const renderFeatured = () =>
    featuredPosts.map((post, idx) => (
      <FeaturedArticle
        key={idx}
        index={idx}
        href={`/${post.slug}/`}
        title={post.title}
        description={post.description}
        image={post.image}
        content={post.content}
      />
    ))

  const renderAll = () =>
    allPosts.map((post, idx) => {
      if (!post.skip) {
        return <ListItem key={idx} index={idx} href={`/${post.slug}/`} title={post.title} date={post.date} />
      }
    })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://rohinipatturaja.com/articles" property="og:url" />
        <meta content={`https://rohinipatturaja.com${image}`} property="og:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Work Experience</h2>
      <FeaturedArticles>{renderFeatured()}</FeaturedArticles>

      <h2>All Projects</h2>
      <ListGroup>{renderAll()}</ListGroup>
    </>
  )
}

// ================== Styled Components ==================
const FeaturedArticles = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px', // spacing between cards
  justifyContent: 'space-between',
  marginTop: '20px',
})
