import { Row, Col } from 'react-bootstrap'

import PageLayout from 'components/PageLayout'
import AuthorIntro from 'components/AuthorIntro'
import CardListItem from 'components/CardListItem'
import CardItem from 'components/CardItem'
import { getAllBlogs } from 'lib/api'

export default function Home({ blogs }) {
  debugger
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      {JSON.stringify(blogs)}
      <Row className='mb-5'>
        <Col md='10'>
          <CardListItem />
        </Col>
        <CardItem />
        <Col md='4'></Col>
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
