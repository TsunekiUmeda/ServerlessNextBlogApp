import { Row, Col } from 'react-bootstrap'

import PageLayout from 'components/PageLayout'
import AuthorIntro from 'components/AuthorIntro'
import CardListItem from 'components/CardListItem'
import CardItem from 'components/CardItem'
import { getAllBlogs } from 'lib/api'

export default function Home({ blogs }) {
  // debugger
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />

      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardListItem />
        </Col> */}

        {blogs.map(blog => (
          <Col key={blog.slug} md='4'>
            <CardItem
              author={blog.author}
              title={blog.title}
              image={blog.coverImage}
              imagesubtitle={blog.subtitle}
              date={blog.date}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs()
  return {
    props: {
      blogs,
    },
  }
}
