import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { Login } from './pages/Login'
import HomeLayout from './components/HomeLayout'
import { Navbar } from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { ProductProvider } from './contexts/ProductContext'
import { Register } from './pages/Register'


function App() {


  return (
     <BrowserRouter>
          <CartProvider>
          <ProductProvider>

        <Routes >
            <Route path="/" element={<HomeLayout/>}>
              <Route index element = {<Home />}/>
              <Route path='/products' element = {<Shop />}/>
              <Route path='/products/:id' element = {<ProductDetails />}/>
              <Route path='/cart' element = {<Cart />}/>
              <Route path='/login' element = {<Login/>}/>
              <Route path='/register' element = {<Register/>}/>
          
        </Route>
        </Routes>
          </ProductProvider>
          </CartProvider>
      </BrowserRouter>
    
  
  )
}

export default App
