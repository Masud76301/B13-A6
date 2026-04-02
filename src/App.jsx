
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import ProductCard from './component/ProductCard/ProductCard'
import Stats from './component/Stats/Stats'
import Step from './component/Step/Step'
import Pricing from './component/Pricing/Pricing'
import Workflow from './component/Workflow/Workflow'
import Footer from './component/Footer/Footer'

const productDataFetch = async () => {
  const res = await fetch('productData.json');
  return res.json();
}

function App() {

  const productData = productDataFetch();
  const [cart, setCart] = useState([]);
  return (
    <>
      <div>
        <Navbar cart={cart}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Suspense fallback={
          <span className="loading loading-bars loading-xl"></span>
        }>
          <ProductCard productData={productData} cart={cart} setCart={setCart}></ProductCard>
        </Suspense>
        <Step></Step>
        <Pricing></Pricing>
        <Workflow></Workflow>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
