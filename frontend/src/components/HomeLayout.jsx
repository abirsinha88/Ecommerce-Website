import Footer from "./Footer";
import {Navbar} from './Navbar'
import { Outlet } from "react-router-dom";
export default function HomeLayout(){
    return(
        <>
    <div className="flex flex-col min-h-screen">
      <Navbar />      
      <main className="grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
        
        </>
    )
}