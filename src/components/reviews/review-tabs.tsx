import { useState } from 'react'

export default function ReviewTabs() {
  const [talent, setTalent] = useState(true)
  const [disease, setDisease] = useState(false)

  const tabsToggle = () => {
    setTalent(!talent)
    setDisease(!disease)
  }

  return (
    <div>
      <div className="tabs">
        <button onClick={ e => tabsToggle() } className={`tab ${ talent ? 'active' : '' }`} disabled={ talent }>
          Inborn Genetic Talent Test
        </button>

        <button onClick={ e => tabsToggle() } className={`tab ${ disease ? 'active' : '' }`} disabled={ disease }>
          Disease Susceptibility Genetic Test
        </button>
      </div>

      <div className={`tab__page ${ talent ? 'active' : '' }`}>
        <div className="tab__grid">
          <div className="tab__card">
            <div>
              <img className="tab__card-image" src='/assets/j-y-1.png' />
              <div className="tab__card-container">
                <h2 className="tab__card-name">Jamie Yeo</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Gold 90.5FM Radio Hostess</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Singapore</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">The test has helped me understand my daughter better</h3>
              <p className="tab__card-review">The test results very accurately affirmed some of the traits my daughter has already been displaying like the various artistic ones, but it also highlighted others that I hadn't noticed before. I'm sure as she gets older, she will display more of the strong traits that the test has mapped out. What really helps is that, now that I'm armed with this knowledge, I know how to enhance her activities accordingly and what to look out for in the future. The test report also has detailed advice for me to nurture her talents without pushing her too much and allowing her to grow in her time. All in all, this has helped me understand my daughter better in a very scientific way and for that I'm very grateful.</p>
            </div>

            <div className="tab__card-base">
              <img className="tab__card-base-image" src='/assets/j-y-1.png' />
              <img className="tab__card-base-image" src='/assets/j-y-2.png' />
            </div>
          </div>

          <div className="tab__card">
            <div>
              <img className="tab__card-image" src='/assets/t-h-1.png' />
              <div className="tab__card-container">
                <h2 className="tab__card-name">Taufik Hidayat</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Olympic Gold Medalist</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Jarkata, Indonesia</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">This test is priceless</h3>
              <p className="tab__card-review">I took an Inborn Talent Gene Test from Map My Gene because I found the test very fascinating as an insight to how people behave and excel differently. I was also curious about what my own DNA in regards to my talents and abilities. When I saw the result, I was amazed at the high accuracy shown especially in Sports Category. I have many sports genes that made me an athlete and a minister in sports business. This is a priceless test that I figure all parents would want to have for their children. If I had the test done years ago when I was much younger, I would have developed and reached my full potential which could have pushed me to greater heights of success.</p>
            </div>

            <div className="tab__card-base">
              <img className="tab__card-base-image" src='/assets/t-h-1.png' />
              <img className="tab__card-base-image" src='/assets/t-h-2.png' />
            </div>
          </div>

          <div className="tab__card">
            <div>
              <img className="tab__card-image" src='/assets/m-h-1.png' />
              <div className="tab__card-container">
                <h2 className="tab__card-name">Mdm Ho</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Housewife</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Singapore</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">Map My Gene's Inborn Talent Gene Test is Extremely Accurate</h3>
              <p className="tab__card-review">The Gene Test result shows that my child's IQ is excellent, but he is very weak in sports which I totally agree. My son is always No. 1 in class in terms of studies, but he can't perform well in sports despite his fondness for sports. Experts suggest in his DNA report that he will perform well in academics due to his high scores in his comprehension, analytical, memory and IQ genes. I find the test very useful in my child's future choice of education. Although my child loves sports, I would rather develop my child from his strength and talents than from his weakness because I don't want to spend unneccessary money and time to develop him on areas that he is weak in. It requires more effort and resources to achieve that. After all, what I want for my son is to be successful.</p>
            </div>

            <div className="tab__card-base">
              <img className="tab__card-base-image" src='/assets/m-h-1.png' />
              <img className="tab__card-base-image" src='/assets/m-h-2.png' />
            </div>
          </div>

          <div className="tab__card">
            <div>
              <img className="tab__card-image" src='/assets/r-1.png' />
              <div className="tab__card-container">
                <h2 className="tab__card-name">Roy</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Software Engineer</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">California, United States</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">A must-do test for children</h3>
              <p className="tab__card-review">The ITGT accentuated areas of my talents with utmost precision. It guided me towards careers that I was most suited for, based not only on my strengths, but also my personality traits. This test is highly recommended for children and teenagers who may not know which field to embark on in regards to career and education. I did this test as a teenager. and was pleased to have known about my innate abilities that had been wired in me genetically. Ever since, I have been working on developing these talents even as a young adult. I am glad to say that the test has shaped and refined my career choices. I wished I had done the test earlier, but unfortunately this technology was not available back then. This is a must-do for children if parents are keen to find out and develop their child's natural talents to the fullest potential!</p>
            </div>

            <div className="tab__card-base">
              <img className="tab__card-base-image" src='/assets/r-1.png' />
            </div>
          </div>

          <div className="tab__card">
            <div>
              <img className="tab__card-image" src='/assets/t-1.png' />
              <div className="tab__card-container">
                <h2 className="tab__card-name">Tianze</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Band Director and Performer</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Singapore</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">I found my direction</h3>
              <p className="tab__card-review">I was indecisive about my career path, and was always on the lookout for possible alternatives. When I did the test, I was surprised to find out that my top career recommendation was listed "Musician" because of my outstanding music and performing genes. It also dawned on me that I was a band section leader back in Secondary school since I enjoy playing musical instruments. This report had definitely enlightened me and solidify my career path based on my abilities that I was passionate about. I am grateful to have found my career direction.</p>
            </div>

            <div className="tab__card-base">
              <img className="tab__card-base-image" src='/assets/t-1.png' />
              <img className="tab__card-base-image" src='/assets/t-2.png' />
            </div>
          </div>            
        </div>
      </div>

      <div className={`tab__page ${ disease ? 'active' : '' }`}>
        <div className="tab__grid">
          <div className="tab__card">
            <div>
              <div className="tab__card-container">
                <h2 className="tab__card-name">Dr. Wong</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Obstetrician</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Singapore</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">DNA Mapping – The new trend in health checks</h3>
              <p className="tab__card-review">My own gene mapping from Map My Gene reveals my susceptibility to inflammation of the intestines, gastrointestinal cancers, liver cirrhosis and Alzheimer disease. I know I have been suffering from diverticulitis (a common digestive disease found particularly in the colon) since my early 30’s and fatty liver in my late 30’s. Both my father and paternal grandfather died of intestinal cancers. Presently, I am doing all I can to avert following their footsteps because I know environmental factors can have an enormous potential to either preserve my health or cause diseases. This can only be done if I have important knowledge of my genetic makeup.</p>
            </div>
          </div>

          <div className="tab__card">
            <div>
              <div className="tab__card-container">
                <h2 className="tab__card-name">Dr. Chanboonyasitt</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Researcher</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Bangkok, Thailand</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">Absolutely high accuracy</h3>
              <p className="tab__card-review">I ordered my Disease Susceptibility Gene Test and Inborn Talent Gene test from Map My Gene some time ago. My wife and I were astounded by the accuracy of the Inborn Talent Test because she understood my character and talents so well. As for the Disease Susceptibility Gene Test, my result showed that I had 4 conditions related to heart problems among others predicted, and I had a heart attack at the age of 18 and was hospitalized. You tell me how accurate this test can be? It predicted what it’s likely to happen to me if I did not take precautions and intervene early.</p>
            </div>
          </div>

          <div className="tab__card">
            <div>
              <div className="tab__card-container">
                <h2 className="tab__card-name">Mdm Soo</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Marketing Manager</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">United States</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">My Genetic Landmines</h3>
              <p className="tab__card-review">I was not surprised when my Disease Susceptibility Genetic Test Report indicates that I have a predisposition to ovarian cancer which manifested in the death of my grandmother who died of the disease years ago.  Although I was saddened a little by the result, I knew I needed to face the fact and act upon it.  I clearly understand that it is better to deal with the known than the unknown so that I can take chance out of the equation and put control back into my hands.
According to my Personalized Health Guide book, milk, talcum powder, hair dye, hormonal creams, royal jelly are my genetic landmines which can switch on the gene, making me susceptible to ovarian cancer.  I also learned that I need to eat more cruciferous vegetables such as brocolli which is rich in Indole-3 Carbinol that converts bad estrogen to good estrogen (as ovarian cancer is a hormone related disease), and regular medical checkup is necessary.  So, knowing that helps me avoid triggers by eating correctly, living right, and avoiding environments that are not suitable for me.
I strongly recommend that everyone should have his/her DNA profiling done. Knowing your genetic strong and weak points enables you to devise a targetted approach that allows you to stay fit and healthy.</p>
            </div>
          </div>

          <div className="tab__card">
            <div>
              <div className="tab__card-container">
                <h2 className="tab__card-name">Yen</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Health Therapist</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Singapore</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">Knowledge is Power! It can save lives</h3>
              <p className="tab__card-review">I do not understand why people are wiling to spend many thousands of dollars in cars, houses, and all the material things of the world but fail to invest a little money in their own health which is often regarded as the greatest wealth of all. Many will only begin to value health when they start to lose it.
Speaking about the Disease Susceptibility Genetic Test which I took recently, I realized that the test can actually help save our lives as we can predict a susceptible disease early and start preventing it now.  The disease may never have a chance to develop.  Therefore, be smart!  Ignorance causes death.  Whereas, knowledge is power!  It can save our lives.  I am glad I have the power now to live a long and healthy life! The Disease Susceptibility Genetic Test is the answer to all who seek after health, wholeness and longevity.</p>
            </div>
          </div>

          <div className="tab__card">
            <div>
              <div className="tab__card-container">
                <h2 className="tab__card-name">Kezia</h2>
                <span className="tab__card-divider">-</span>
                <span className="tab__card-occupation">Property Consultant</span>
              </div>
              <div>
                <img className="tab__card-map-marker" src='/assets/map-marker-alt.svg' alt="map marker" />
                <span className="tab__card-country">Jarkata, Indonesia</span>
              </div>
            </div>

            <div className="tab__card-body">
              <h3 className="tab__card-title">Genetic test saves me time, energy and money</h3>
              <p className="tab__card-review">Thank you Map My Gene Indonesia, you have really saved my time, energy, and money by providing me with the most valuable and accurate information about my health. Now I am prepared to follow the dietary plan that suits me to help me live better and healthier. My genetic report shows that I am susceptible to Diabetes, High Cholesterol, Skin Cancer and Sjogren’s Syndrome which I never knew before. After having known this, I went for a health check through the method of blood-sampling and consult a doctor specialist. It turned out that my DNA test results were correct, my markers of 2 diseases predicted in my DNA results were slightly higher than normal. I’m so glad that I took this test. I can now live in peace as my genetic report has empowered me with a personalized health management that teaches me ways to prevent sicknesses from now on.</p>
            </div>
          </div>            
        </div>
      </div>
    </div>
  )
}