import { useState } from 'react'

export default function MobileHeader() {
  const [display, setDisplay] = useState(false)

  const displayToggle = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <nav role="navigation" className="mHeader">
        <div className="mHeader__toggle">
          <div onClick={ e => displayToggle() } className={`mHeader__hamburger ${ display ? 'open' : 'close' }`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="mHeader__logo"><a href="/"><img alt="Logo" src="/assets/mmg-logo-2.png" /></a></div>

        <img className="mHeader__cart" src="/assets/shopping-cart.svg" />
      </nav>

      <div className={`mHeader__overlay ${ display ? 'show' : 'hide' }`}></div>

      <ul className={`mHeader__menu ${ display ? 'show' : 'hide' }`}>
        <a href="/about"><li>About</li></a>
        <a href="/services"><li>Services</li></a>
        <a href="/reviews"><li>Reviews</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
    </div>
  )
}