import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-overlay'>
        <div className='hero-left'>
          <span className='hero-badge'>
            Trusted Campus Marketplace
          </span>

          <h1>
            Discover Products <br />
            From Student Entrepreneurs
          </h1>

          <p>
            Buy jerseys, gadgets, watches, perfumes and more
            from trusted campus sellers.
          </p>

          <div className='hero-buttons'>
            <button className='primary-btn'>
              Explore Marketplace
            </button>

            <button className='secondary-btn'>
              Become Seller
            </button>
          </div>
        </div>

        <div className='hero-right'>
          <div className='hero-card'>
            <h3>Trending Categories</h3>

            <ul>
              <li>Football Jerseys</li>
              <li>Smart Watches</li>
              <li>Perfumes</li>
              <li>Gadgets</li>
              <li>Hoodies</li>
              <li>Thrift Fashion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero