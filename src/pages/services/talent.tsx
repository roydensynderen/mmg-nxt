import Head from 'next/head'
import Header from '../../components/modules/header'
import Footer from '../../components/modules/footer'
import ServiceHero from '../../components/services/service-hero'
import ServiceCards from '../../components/services/service-cards'
import RedSideTalent from '../../components/services/red-side-talent'
import CareerProfiling from '../../components/services/career-profiling'

export default function Talent() {
  return (
    <>
      <Head>
        <title>Map My Gene | Inborn Talent Gene Test</title>
      </Head>

      <div className='main'>
        <Header />
        <RedSideTalent />
        <ServiceHero />
        <ServiceCards />
        <CareerProfiling />
        <Footer />
      </div>
    </>
  )
}