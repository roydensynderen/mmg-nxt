import Head from 'next/head'
import Hero from '../components/homepage/hero/hero'

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Map My Gene | Homepage</title>
      </Head>
      <Hero />
    </div>
  )
}
