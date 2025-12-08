import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import MyBadge from "./MyBadge";
import { SearchBar } from "./Searchbar"
import { ShoppingCart } from 'lucide-react';
import Myavatar from "./MyAvatar";
import { MySheet } from "./MySheet";
import { ButtonGroup } from "@/components/ui/button-group"
import { Search } from "lucide-react";
import { Input } from "./ui/input";


export function Navbar() {
  return (
    <nav className="flex items-center justify-around px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">GLAMOURLY</h1>
      <div className="flex gap-6">

           <ButtonGroupInput/>
        <Link to='/' >
          <Button variant="link">Home</Button>
        </Link>
        <Link to='/products' >
          <Button variant="link">Products</Button>
        </Link>
      
        <Link to='/login'>
            <Button variant="link">Login</Button>
        </Link>
          <Link to='/cart' className="self-center relative">
            <MySheet/>
            <MyBadge  className="absolute right-0 " variant="destructive">Badge</MyBadge>
        </Link>
        <Link to='/login'>
            <Myavatar className="mx-5"/>
        </Link>

      </div>
    </nav>
  )
}
function ButtonGroupInput() {
  return (
    <ButtonGroup>
  
      <Input placeholder="Search" className="w-40"/>
      <Button variant="outline" aria-label="Search">
        <Search/>
      </Button>
    </ButtonGroup>
  )
}