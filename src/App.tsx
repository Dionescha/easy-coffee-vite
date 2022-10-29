import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import {UserProvider} from './context/User'
import Product from './pages/Product'
import Home from './pages/Home'

const App = () =>  (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Product />} />


      </Routes>
    </BrowserRouter>
  </UserProvider>
)

export default App
