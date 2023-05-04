import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Start from './pages/start/Start'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className='uppercase'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/start' element={<Start />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
