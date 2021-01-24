export default function Header() {
  return (
    <div className="header">
        <div className="header-top">
          <div className="header-top-left">
            <div>
              <img className="header-top-left__icon" alt="Phone" src='/assets/phone-call.svg' />
              <span>+65-9005-2235</span>
            </div>
            <div>
              <img className="header-top-left__icon" alt="Mail" src='/assets/envelope.svg' />
              <span>info@mapmygene.com</span>
            </div>
          </div>

          <div className="header-top-right">
        </div>
      </div>

      <div className="header-btm">
        <div className="header-btm-left">
          <a href="/"><img alt="Logo" src='/assets/mmg-logo-2.png' /></a>
        </div>
        <nav className="header-btm-right">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}