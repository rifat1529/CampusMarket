import Navbar from '../../components/Navbar/Navbar'
import SellerCard from '../../components/SellerCard/SellerCard'
import { useParams } from 'react-router-dom'
import './UniversitySellers.css'

const sellerData = {
  'dhaka-university': [
    {
      id: 1,
      name: "Rohan's Shop",
      university: 'Dhaka University',
      rating: '4.9',
      products: 24
    },
    {
      id: 2,
      name: "Taskin's Store",
      university: 'Dhaka University',
      rating: '4.8',
      products: 18
    }
  ],

  brac: [
    {
      id: 3,
      name: "Sabbir Fashion",
      university: 'BRAC University',
      rating: '4.7',
      products: 30
    }
  ],

  nsu: [
    {
      id: 4,
      name: "Rakib Gadgets",
      university: 'NSU',
      rating: '4.9',
      products: 40
    }
  ]
}

function UniversitySellers() {
  const { name } = useParams()

  const sellers = sellerData[name] || []

  return (
    <>
      <Navbar />

      <section className='university-hero'>
        <div className='container'>
          <span className='university-badge'>
            Trusted Student Marketplace
          </span>

          <h1>
            {name.replace('-', ' ').toUpperCase()}
          </h1>

          <p>
            Explore trusted student sellers from this
            university community.
          </p>

          <div className='university-stats'>
            <div className='stat-box'>
              <h2>{sellers.length}+</h2>
              <span>Sellers</span>
            </div>

            <div className='stat-box'>
              <h2>100+</h2>
              <span>Products</span>
            </div>

            <div className='stat-box'>
              <h2>4.9</h2>
              <span>Avg Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className='seller-list-section'>
        <div className='container'>
          {/* <div className='section-header'>
            <h2>Featured Sellers</h2>

            <p>
              Verified student entrepreneurs from campus
            </p>
          </div> */}

          <div className='seller-grid'>
            {sellers.map(seller => (
              <SellerCard
                key={seller.id}
                seller={seller}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default UniversitySellers