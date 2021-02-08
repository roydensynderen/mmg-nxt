import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function TalentAtc() {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { sessionId } = await fetch('/api/checkout/session', { 
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        quantity: 1
      })
    }).then(res => res.json());

    const { error } = await stripe.redirectToCheckout({
      sessionId
    });
  };

  return (
    <div className='talent-atc'>
      <div className='talent-atc__container'>
        <img src='/assets/talent-report.jpg' />
      </div>

      <div className='talent-atc__container'>
        <h1 className='talent-atc__heading'>Inborn Talent Genetic Test</h1>
        <p className='talent-atc__description'>
        Map My Gene Inborn Talent Gene Test helps parents identify their children’s natural inborn talents. It also reveals some personality traits that the child may possess, judging from his/her genetic make-up.
        </p>
        <button className='talent-atc__btn btn' role='link' onClick={ handleClick }>Buy Now</button>
      </div>
    </div>
  )
}