import Head from 'next/head'
import Header from '../../components/modules/header'
import Footer from '../../components/modules/footer'
import ServiceTalent from '../../components/services/service-talent'

export default function Services() {
  return (
    <>
      <Head>
        <title>Map My Gene | Services </title>
      </Head>

      <div className='main'>
        <Header />
          <ServiceTalent />
        <Footer />
      </div>
    </>
  )
}