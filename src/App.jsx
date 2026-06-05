import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrderPage } from './pages/orders/OrderPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFound } from './pages/NotFound'

function App() {
    const [cart, setCart] = useState([]);

    async function loadCart(){
      
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);

    }

    useEffect(()=>{

      loadCart();
    }, [])

  return(
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />}/>
      <Route path='checkout' element={< CheckoutPage cart={cart}/>} />
      <Route path='orders' element={< OrderPage cart={cart}/>} />
      <Route path='tracking/:orderId/:productId' element={< TrackingPage cart={cart}/>} />
      <Route path="*" element={<NotFound /> } />
    </Routes>
    </>
  )
}

export default App
