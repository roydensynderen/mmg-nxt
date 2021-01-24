import Link from 'next/link'

export default function Hero() {
    return (
        <div>
            <div className="hero">
                <img className="hero__image" src='/assets/hero.png' alt='hero image'></img>
                <div className="hero__image--mobile"></div>

                <div className="hero__contents">
                    <h2>Discover Your</h2>
                    <h1>Child's Inborn Talents Today</h1>
                    <h3>Unleash His Potential Tomorrow</h3>
                    <Link href="/services/talent">
                        <a className="btn btn--small">Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}