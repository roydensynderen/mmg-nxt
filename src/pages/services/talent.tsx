import Head from 'next/head'
import Header from '../../components/modules/header'
import Footer from '../../components/modules/footer'
import ServiceHero from '../../components/services/service-hero'
import ServiceCards from '../../components/services/service-cards'

export default function Talent() {
  return (
    <>
      <Head>
        <title>Map My Gene | Inborn Talent Gene Test</title>
      </Head>

      <div className='main'>
        <Header />
        <ServiceHero />
        <ServiceCards />
        <Footer />
      </div>
    </>
  )
}