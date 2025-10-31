import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import HomeLayout from './components/HomeLayout'
import ProductDetails from './pages/ProductDetails'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { ProductProvider } from './contexts/ProductContext'


function App() {


  return (
     <BrowserRouter>
          <CartProvider>
          <ProductProvider>

        <Routes >
            <Route path="/" element={<HomeLayout/>}>
              <Route index element = {<Home />}/>
              <Route path='/shop' element = {<Shop />}/>
              <Route path='/shop/:id' element = {<ProductDetails />}/>
              <Route path='/cart' element = {<Cart />}/>
            </Route>
        
        </Routes>
          </ProductProvider>
          </CartProvider>
      </BrowserRouter>
    
  
  )
}

export default App
