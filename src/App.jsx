import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import HomeLayout from './components/HomeLayout'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'


function App() {


  return (
     <BrowserRouter>
        <Routes >
          <Route path="/" element={<HomeLayout/>}>
            <Route index element = {<Home />}/>
            <Route path='/shop' element = {<Shop />}/>
            <Route path='/cart' element = {<Cart />}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
    
  
  )
}

export default App
