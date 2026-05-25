import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Marketplace from '../pages/Marketplace/Marketplace'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Cart from '../pages/Cart/Cart'
import SellerDashboard from '../pages/SellerDashboard/SellerDashboard'
import AddProduct from '../pages/AddProduct/AddProduct'
import UniversitySellers from '../pages/UniversitySellers/UniversitySellers'
import SellerShop from '../pages/SellerShop/SellerShop'
import ZoneUniversities from '../pages/ZoneUniversities/ZoneUniversities'
import Checkout from '../pages/Checkout/Checkout'
import Orders from '../pages/Orders/Orders'
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route
        path="/marketplace"
        element={<Marketplace />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route
        path="/seller-dashboard"
        element={<SellerDashboard />}
      />

      <Route
  path="/zone/:zone"
  element={<ZoneUniversities />}
/>

<Route
  path="/zone/:zone/:university"
  element={<UniversitySellers />}
/>

      <Route
        path="/shop/:id"
        element={<SellerShop />}
      />

      <Route
        path="/add-product"
        element={<AddProduct />}
      />
    </Routes>
  )
}

export default AppRoutes