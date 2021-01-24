export default function PageHero() { 
  return (
    <div className="page-hero">
      <img className="page-hero__image" src='/assets/about-hero.png' />
      <div className="page-hero__overlay"></div>

      <div className="page-hero__contents">
        <h1 className="page-hero__header">About Us</h1>
        <p className="page-hero__subheader">We Specialise in Genetic Testing since 2009</p>
      </div>
    </div>
  )
}