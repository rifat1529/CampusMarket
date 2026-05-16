import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Marketplace from '../pages/Marketplace/Marketplace'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Cart from '../pages/Cart/Cart'
import SellerDashboard from '../pages/SellerDashboard/SellerDashboard'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/seller-dashboard' element={<SellerDashboard />} />
    </Routes>
  )
}

export default AppRoutes