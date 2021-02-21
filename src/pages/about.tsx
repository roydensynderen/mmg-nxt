import Head from 'next/head'
import Header from '../components/modules/header'
import MobileHeader from '../components/modules/mobile-header'
import Footer from '../components/modules/footer'
import AboutHero from '../components/about/about-hero'
import RedSideBanner from '../components/about/red-side-banner'
import HonorBoard from '../components/about/honor-board'
import Featured from '../components/about/featured'

export default function About() {
  return (
    <>
      <Head>
        <title>Map My Gene | About</title>
      </Head>

      <div className='main'>
        <Header />
        <MobileHeader />
        <AboutHero />
        <RedSideBanner />
        <HonorBoard />
        <Featured />
        <Footer />
      </div>
    </>
  )
}