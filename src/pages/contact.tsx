import Head from 'next/head'
import Header from '../components/modules/header'
import MobileHeader from '../components/modules/mobile-header'
import Footer from '../components/modules/footer'
import ContactForm from '../components/contact/contact-form'

export default function About() {
  return (
    <>
      <Head>
        <title>Map My Gene | Contact Us</title>
      </Head>

      <div className='main'>
        <Header />
        <MobileHeader />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}