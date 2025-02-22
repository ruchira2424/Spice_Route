import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import Login from './suby/pages/Login'
import Signup from './suby/pages/Singup'


const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path="/login" element={<Login/>} />
          {<Route path="/signup" element={<Signup/>} /> }
      </Routes>

    
    </div>
  )
}

export default App