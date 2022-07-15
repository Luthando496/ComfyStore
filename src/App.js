import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import HomePage from './pages/HomePage'
import Cart from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import SingleProductPage from './pages/SingleProductPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductsPage from './pages/ProductsPage'
import ErrorPage from './pages/ErrorPage'

const App=()=> {
  
  return(
  <Router>
      <Navbar />
      <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/product/:id' element={<SingleProductPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='*' element={<ErrorPage />} />

          </Routes>
          <Footer />
  </Router>

  )
}

export default App
