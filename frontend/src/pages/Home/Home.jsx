import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { Link } from 'react-router-dom'
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
      <h2>Explore By Zone</h2>
      <p>Browse universities by regional zones</p>
    </div>

    <div className='university-grid'>
      <Link
        to='/zone/dhaka'
        className='university-card'
      >
        Dhaka Zone
      </Link>

      <Link
        to='/zone/rajshahi'
        className='university-card'
      >
        Rajshahi Zone
      </Link>

      <Link
        to='/zone/rangpur'
        className='university-card'
      >
        Rangpur Zone
      </Link>

      <Link
        to='/zone/chittagong'
        className='university-card'
      >
        Chittagong Zone
      </Link>
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