import Head from 'next/head'
import Header from '../../components/modules/header'
import MobileHeader from '../../components/modules/mobile-header'
import Footer from '../../components/modules/footer'

export default function Disease() {
  return (
    <>
      <Head>
        <title>Map My Gene | Disease Susceptibility Gene Test</title>
      </Head>

      <div className='main'>
        <Header />
        <MobileHeader />
        <Footer />
      </div>
    </>
  )
}