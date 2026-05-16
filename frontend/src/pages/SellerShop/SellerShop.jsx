import Navbar from '../../components/Navbar/Navbar'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { useParams } from 'react-router-dom'

const sellerInfo = {
  1: {
    name: "Rohan's Shop",
    university: 'Dhaka University'
  },

  2: {
    name: "Taskin's Store",
    university: 'Dhaka University'
  },

  3: {
    name: "Sabbir Fashion",
    university: 'BRAC University'
  },

  4: {
    name: "Rakib Gadgets",
    university: 'NSU'
  }
}

function SellerShop() {
  const { id } = useParams()

  const seller = sellerInfo[id]

  return (
    <>
      <Navbar />

      <div className='container' style={{ padding: '50px 0' }}>
        <div
          style={{
            background:
              'linear-gradient(to right, #4f46e5, #7c3aed)',
            padding: '50px',
            borderRadius: '20px',
            color: 'white',
            marginBottom: '40px'
          }}
        >
          <h1>{seller?.name}</h1>

          <p>{seller?.university}</p>
        </div>

        <h2>All Products</h2>

        <ProductGrid />
      </div>
    </>
  )
}

export default SellerShop