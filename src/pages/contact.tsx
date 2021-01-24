import Head from 'next/head'
import Header from '../components/modules/header'
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
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}