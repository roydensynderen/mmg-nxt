import Head from 'next/head'
import Hero from '../components/homepage/hero'
import Header from '../components/modules/header'
import MobileHeader from '../components/modules/mobile-header'
import Footer from '../components/modules/footer'
import TriCards from '../components/homepage/tri-cards'
import HomeTalent from '../components/homepage/home-talent'
import HomeDisease from '../components/homepage/home-disease'
import WhyGeneTest from '../components/homepage/why-gene-test'
import HomeBgFull from '../components/homepage/home-bg-full'

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Map My Gene | Home</title>
      </Head>

      <div className='main'>
        <Header />
        <MobileHeader />
        <Hero />
        <TriCards />
        <HomeTalent />
        <HomeDisease />
        <WhyGeneTest />
        <HomeBgFull />
        <Footer />
      </div>
    </>
  )
}
