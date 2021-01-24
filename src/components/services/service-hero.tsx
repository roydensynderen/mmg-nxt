export default function ServiceHero() {
  return (
    <section className="service-hero">
      <img className="service-hero__image" src='/assets/smiling-child.png' />
      <div className="service-hero__overlay">
        <div className="service-hero__container">
          <h2 className="service-hero__subheader">Introducing</h2>
          <h1 className="service-hero__header">Inborn Talent Gene Test</h1>
          <div className="service-hero__text">
            <p>The objective of the Inborn Talent Gene Test is to help parents identity their child's natural talents and aptitudes that may not be obvious at young age. Giving your child a head start in proper nurture can maximize those aptitudes to the fullest potential.</p>
            <p>The ITGT covers 48 talents and traits. The test reports comes with a Career Profiling assessed by our team of psychologists based on one's unique abilities detected from his/her genetic makeup. This profile can provide an individual with good education and career guidance. Expert suggestions giving insightful details to help parents effectively nurture and develop their child's character and talents are also included in the report. We also provide a post-test consultation upon the receipt of the test report.</p>
          </div>
          <div className="service-hero__buttons">
            <a href='/assets/talent_e-brochure.pdf' target="_blank" rel="noopener noreferrer" className="btn service-hero__button">
              e-Brochure
            </a>
            <a href='/assets/talent_sample_report.pdf' target="_blank" rel="noopener noreferrer" className="btn service-hero__button">
              Sample Report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}