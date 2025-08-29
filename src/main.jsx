
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { makeServer } from "./mirage/server";

if (process.env.NODE_ENV === "development") {
  makeServer(); // start Mirage only in dev
}

createRoot(document.getElementById('root')).render(
 
   <App /> 
  
)
