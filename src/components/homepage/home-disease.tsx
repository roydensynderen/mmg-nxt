export default function HomeDisease() {
  return (
    <div className="homeDisease">
      <div className="homeDisease__container">
        <div>
          <h5 className="homeDisease__title">Disease</h5>
          <div className="homeDisease__title-2"><span>Susceptibility <strong>Gene Test</strong></span></div>

          <p className="homeDisease__content">Discover genetic variations that contribute to immunity and disease risks. By providing insight into your genes through genetic testing, it helps you to take action steps toward a healthier and longer life. Pre-emptive capabilities means earlier detection and and better treatment options, and ultimately, True Optimal Wellness. 
          <br />
          <br />
          Most people do not know if they have some genetic disorders that are inherited and when coupled with environmental factors, renders them prone to developing diseases early in life.  Prevention is always better than cure. Genetic testing enables us to identify our risk of diseases early and take right steps to protect our health.  Prevention can become much more effective when we are given the ‘know how’ through genetic knowledge and a Personalized Health Management report generated from your gene test result.</p>

          <ul className="homeDisease__ul">
            <li>Genetic testing for the most accurate results</li>
            <li>Simple, painless procedure performed in minutes—no needles, invasive procedures or blood involved</li>
            <li>Samples tested in multi-million-dollar, state-of-the-art laboratory employing the latest American technology</li>
            <li>Total confidentiality assured</li>
          </ul>
        </div>

        <a href="/services" className="btn btn--small">Learn More</a>

      </div>
      <div className="homeDisease__space"></div>
      <div className="homeDisease__img"></div>
    </div>
  )
}