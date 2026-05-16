import Navbar from '../../components/Navbar/Navbar'

function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className='container' style={{ padding: '50px 0' }}>
        <h1>Product Details</h1>

        <img
          src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
          alt='product'
          width='300'
        />

        <h2>Smart Watch</h2>
        <p>৳2500</p>

        <button>Add To Cart</button>
      </div>
    </>
  )
}

export default ProductDetails