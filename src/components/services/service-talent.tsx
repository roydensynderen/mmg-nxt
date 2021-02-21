import Link from 'next/link'

export default function ServiceTalent() {
  return (
    <section className="service-talent">
      <div className="service-talent__img">
        <img src='/assets/puzzle.png' />
      </div>

      <div className="service-talent__contents">
        <h1 className="service-talent__title">The Missing Puzzle - Found</h1>
        <p>DNA Scientists have discovered what psychologists, coaches and education specialist are touting - a missing puzzle in their quest to support parents in developing their children.</p>
        <p>Now you can replace trial and error with 99% accurate predictions through genetic testing.</p>
        <Link href='/services/talent'><a className="btn btn--small service-talent__btn">Learn More</a></Link>
      </div>
    </section>
  )
}