import Navbar from '../../components/Navbar/Navbar'

function SellerDashboard() {
  return (
    <>
      <Navbar />

      <div className='container' style={{ padding: '50px 0' }}>
        <h1>Seller Dashboard</h1>

        <div style={{ marginTop: '30px' }}>
          <p>Total Products: 12</p>
          <p>Total Orders: 45</p>
          <p>Total Revenue: ৳35,000</p>
        </div>
      </div>
    </>
  )
}

export default SellerDashboard