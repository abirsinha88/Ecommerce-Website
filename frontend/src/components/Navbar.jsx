import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import MyBadge from "./MyBadge";
import { SearchBar } from "./Searchbar"
import { ShoppingCart } from 'lucide-react';
import Myavatar from "./MyAvatar";
import { MySheet } from "./MySheet";


export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">GLAMOURLY</h1>
      <div className="flex gap-4">

        <SearchBar/>
        <Link to='/' >
          <Button variant="link">Home</Button>
        </Link>
        <Link to='/shop' >
          <Button variant="link">Shop</Button>
        </Link>
      
          <Link to='/cart' className="self-center relative">
            <MySheet/>
            <MyBadge  className="absolute right-0" variant="destructive">Badge</MyBadge>
        </Link>
        <Link to='/login'>
            <Button variant="link">Login</Button>
        </Link>
        <Link to='/login'>
            <Myavatar/>
        </Link>

      </div>
    </nav>
  )
}
 