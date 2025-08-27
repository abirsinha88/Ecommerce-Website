import Home from './Home'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'


function App() {


  return (
     <BrowserRouter>
     <header>
      <div className='header-container'>
        <div className="header-logo-container">
           <Link to="/"> 
        <img src="../public/icon.png" alt="Logo" />
        </Link>
        </div>
      </div>
     </header>
  <Routes >
    <Route path="/" element = {<Home />}/>
  </Routes>
  </BrowserRouter>
    
  
  )
}

export default App
