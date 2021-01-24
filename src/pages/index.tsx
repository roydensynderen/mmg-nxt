import Head from 'next/head'
import Hero from '../components/homepage/hero'
import Header from '../components/modules/header'
import TriCards from '../components/homepage/tri-cards'
import Footer from '../components/modules/footer'
import HomeTalent from '../components/homepage/home-talent'
import HomeDisease from '../components/homepage/home-disease'
import WhyGeneTest from '../components/homepage/why-gene-test'
// import HomeBgFull from '../../components/home-bg-full/home-bg-full'

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Map My Gene | Homepage</title>
      </Head>

      <Header />
      <Hero />
      <TriCards />
      <HomeTalent />
      <HomeDisease />
      <WhyGeneTest />
      {/* <HomeBgFull /> */}
      <Footer />
    </div>
  )
}
