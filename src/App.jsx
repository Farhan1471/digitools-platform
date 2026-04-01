import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tools from './components/Tools/Tools'
import Stats from './components/Stats/Stats'
import Feature from './components/Feature/Feature'
import Pricing from './components/Pricing/Pricing'
import Workflow from './components/Workflow/Workflow'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import './App.css'

const getTools = async () => {
  const res = await fetch("/tools.json")
  return res.json()
}

const toolPromise = getTools()

const App = () => {
  const [activeTab, setActiveTab] = useState("tool")
  const[cart, setCart] = useState([])
  console.log(cart)
  return (
    <>
      <Navbar/>
      <Banner/>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center">
        <input type="radio" name="my_tabs_1" className="tab rounded-full " onClick={()=> setActiveTab("tool")} aria-label="Products" defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full" onClick={()=> setActiveTab("cart")} aria-label="Cart" />
      </div>
      {activeTab === "tool" && <Tools toolPromise={toolPromise} cart={cart} setCart={setCart}/>}
      {activeTab === "cart" && <Cart cart={cart}/>}
      <Stats/>
      <Feature/>
      <Pricing/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
