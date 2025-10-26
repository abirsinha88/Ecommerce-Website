import Footer from "./Footer";
import {Navbar} from './Navbar'
import { Outlet } from "react-router-dom";
export default function HomeLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}