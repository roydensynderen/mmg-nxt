export default function CareerProfiling() {
  return (
    <section className='cp'>
      <h2 className='cp__title'>Career Profiling</h2>

      <p className='cp__excerpt'>According to John Holland's theory, most people are one of six personality types. This profile serves as a reliable roadmap for you to plan your child's path towards educational and career success</p>

      <div className='cp__grid'>
        <div className='cp__grid-item'>
          <img src='/assets/realistic.png' alt='realistic' />
          <div className='cp__grid-item-contents'>
            <h3 className='cp__grid-item-title'>Realistic</h3>
            <p className='cp__grid-item-excerpt'>Practical, physical, hands-on, tool-oriented</p>
          </div>
        </div>

        <div className='cp__grid-item'>
          <img src='/assets/investigative.png' alt='investigative' />
          <div className='cp__grid-item-contents'>
            <h3 className='cp__grid-item-title'>Investigative</h3>
            <p className='cp__grid-item-excerpt'>Analytical, intellectual, scientific, explorative</p>
          </div>
        </div>

        <div className='cp__grid-item'>
          <img src='/assets/artistic.png' alt='artistic' />
          <div className='cp__grid-item-contents'>
            <h3 className='cp__grid-item-title'>Artistic</h3>
            <p className='cp__grid-item-excerpt'>Creative, original, independent, chaotic</p>
          </div>
        </div>

        <div className='cp__grid-item'>
          <img src='/assets/social.png' alt='social' />
          <div className='cp__grid-item-contents'>
            <h3 className='cp__grid-item-title'>Social</h3>
            <p className='cp__grid-item-excerpt'>Cooperative, supporting, helping, healing</p>
          </div>
        </div>

        <div className='cp__grid-item'>
          <img src='/assets/enterprising.png' alt='enterprising' />
          <div className='cp__grid-item-contents'>
            <h3 className='cp__grid-item-title'>Enterprising</h3>
            <p className='cp__grid-item-excerpt'>Competitive, leading, persuasive</p>
          </div>
        </div>

        <div className='cp__grid-item'>
          <img src='/assets/conventional.png' alt='conventional' />
          <div className='cp__grid-item-contents'>
            <h3 className='cp__grid-item-title'>Conventional</h3>
            <p className='cp__grid-item-excerpt'>Detail-oriented, organized, clerical</p>
          </div>
        </div>
      </div>
    </section>
  )
}