export default function HomeTalent() { 
  return(
    <div className="homeTalent__wrapper">
      <div className="homeTalent">
        <div className="homeTalent__dots"></div>

        <div className="homeTalent__img"></div>

        <div className="homeTalent__container">
          <div>
            <h5 className="homeTalent__title">Inborn</h5>
            <div className="homeTalent__title-2"><span>Talent <strong>Gene Test</strong></span></div>
          </div>

          <p className="homeTalent__content">
          Discover genetic variations that contribute to intelligence, personality characteristics, athletic performance, musical, linguistic, dancing, drawing, enterprising and other abilities. Planning for our children’s education has never been this efficient and cost-effective before.
          <br />
          <br />
          Most parents don’t really know the true talents of their children. Only a few would pay close attention to identify some of their children’s hidden talents and abilities. The usual modus operandi would be to go on a trial and error system of putting their children into different types of Talent Classes until they could hit one that they think would suit them. Not very effective, is it parents?
          </p>

          <a className="btn btn--small" href="/services">Learn More</a>
        </div>
      </div>
    </div>
  )
}