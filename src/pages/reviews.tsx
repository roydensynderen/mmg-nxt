import Head from 'next/head'
import Header from '../components/modules/header'
import Footer from '../components/modules/footer'
import ReviewTabs from '../components/reviews/review-tabs'

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Map My Gene | Reviews</title>
      </Head>

      <div className='main'>
        <Header />
        <ReviewTabs />
        <Footer />
      </div>
    </>
  )
}