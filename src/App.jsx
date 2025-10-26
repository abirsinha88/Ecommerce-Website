import Home from './pages/home'
// import ProductDetails from './ProductDetails'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'


function App() {


  return (
     <BrowserRouter>
     {/* <header>
      <div className='header-container'>
        <div className="header-logo-container">
           <Link to="/"> 
        <img src="../public/Logo.png" alt="Logo" />
        </Link>
        </div>
        <div className="nav-link-container">
          <ul>
            <li>
              <Link to="/cart" element="">Cart</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          
          
        </div>
              </div>
     </header> */}
  <Routes >
    <Route path="/" element = {<Home />}/>
     {/* <Route path="/products/:id" element = {<ProductDetails />}/> */}
  </Routes>
  {/* <footer>
      <div className="footer-container">
        <small>GLAMOURLY</small>
      </div>
  </footer> */}
  </BrowserRouter>
    
  
  )
}

export default App
