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

    useEffect(()=>{
        axios.get('/api/cart-items?expand=product')
        .then((response) => {
            setCart(response.data);
        })
    }, [])

  return(
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} />}/>
      <Route path='checkout' element={< CheckoutPage cart={cart}/>} />
      <Route path='orders' element={< OrderPage cart={cart}/>} />
      <Route path='tracking' element={< TrackingPage cart={cart}/>} />
      <Route path="*" element={<NotFound /> } />
    </Routes>
    </>
  )
}

export default App
