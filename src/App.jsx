import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Stats from './components/Stats/Stats'
import Feature from './components/Feature/Feature'
import Pricing from './components/Pricing/Pricing'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats/>
      <Feature/>
      <Pricing/>
    </>
  )
}

export default App
