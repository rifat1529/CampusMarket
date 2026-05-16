import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className='home-section container'>
        <div className='section-header'>
          <h2>Trending Campus Products</h2>
          <p>Popular products from student sellers</p>
        </div>

        <ProductGrid />
      </section>

      <section className='university-section'>
        <div className='container'>
          <div className='section-header'>
            <h2>Explore By University</h2>
            <p>Trusted student communities</p>
          </div>

          <div className='university-grid'>
            <div className='university-card'>Dhaka University</div>
            <div className='university-card'>BRAC University</div>
            <div className='university-card'>NSU</div>
            <div className='university-card'>JU</div>
          </div>
        </div>
      </section>

      <section className='recommend-section container'>
        <div className='section-header'>
          <h2>You May Also Like</h2>
          <p>Recommended for you</p>
        </div>

        <ProductGrid />
      </section>
    </>
  )
}

export default Home