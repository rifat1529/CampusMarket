import Navbar from '../../components/Navbar/Navbar'
import SellerCard from '../../components/SellerCard/SellerCard'
import { useParams } from 'react-router-dom'
import './UniversitySellers.css'

const zoneData = {
  dhaka: {
    name: 'Dhaka Zone',

    universities: {
      du: {
        universityName: 'Dhaka University',

        sellers: [
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
        ]
      },

      ju: {
        universityName: 'Jahangirnagar University',

        sellers: [
          {
            id: 5,
            name: "JU Fashion Hub",
            university: 'Jahangirnagar University',
            rating: '4.8',
            products: 20
          }
        ]
      },

      brac: {
        universityName: 'BRAC University',

        sellers: [
          {
            id: 3,
            name: "Sabbir Fashion",
            university: 'BRAC University',
            rating: '4.7',
            products: 30
          }
        ]
      },

      nsu: {
        universityName: 'NSU',

        sellers: [
          {
            id: 4,
            name: "Rakib Gadgets",
            university: 'NSU',
            rating: '4.9',
            products: 40
          }
        ]
      }
    }
  },

  rajshahi: {
    name: 'Rajshahi Zone',

    universities: {
      ru: {
        universityName: 'Rajshahi University',

        sellers: [
          {
            id: 6,
            name: 'RU Book Store',
            university: 'Rajshahi University',
            rating: '4.8',
            products: 15
          }
        ]
      },

      ruet: {
        universityName: 'RUET',

        sellers: [
          {
            id: 7,
            name: 'RUET Tech Shop',
            university: 'RUET',
            rating: '4.9',
            products: 28
          }
        ]
      }
    }
  },

  rangpur: {
    name: 'Rangpur Zone',

    universities: {
      rmc: {
        universityName: 'Rangpur Medical College',

        sellers: [
          {
            id: 8,
            name: 'RMC Essentials',
            university: 'Rangpur Medical College',
            rating: '4.7',
            products: 12
          }
        ]
      }
    }
  }
}

function UniversitySellers() {
  const { zone, university } = useParams()

  const selectedZone = zoneData[zone]

  const selectedUniversity =
    selectedZone?.universities?.[university]

  const sellers =
    selectedUniversity?.sellers || []

  return (
    <>
      <Navbar />

      <section className='university-hero'>
        <div className='container'>
          <span className='university-badge'>
            Trusted Student Marketplace
          </span>

          <h1>
            {selectedUniversity?.universityName ||
              'University Not Found'}
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
          <div className='seller-grid'>
            {sellers.length > 0 ? (
              sellers.map(seller => (
                <SellerCard
                  key={seller.id}
                  seller={seller}
                />
              ))
            ) : (
              <p className='no-seller-text'>
                No sellers found for this university.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default UniversitySellers