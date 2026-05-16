import Navbar from '../../components/Navbar/Navbar'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

function Marketplace() {
  return (
    <>
      <Navbar />

      <div className='container'>
        <h1 style={{ marginTop: '40px' }}>Marketplace Feed</h1>

        <ProductGrid />
      </div>
    </>
  )
}

export default Marketplace