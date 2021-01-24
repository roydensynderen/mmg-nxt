import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/modules/header'
import Footer from '../../components/modules/footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Map My Gene | Services </title>
      </Head>

      <div className='main'>
        <Header />
          <Link href='/services/talent'><a style={{ color: '#0000FF', textDecoration: 'underline' }} >Inborn Talent Gene Test</a></Link>
        <Footer />
      </div>
    </>
  )
}