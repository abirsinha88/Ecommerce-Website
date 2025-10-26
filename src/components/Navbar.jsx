import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">GLAMOURLY</h1>
      <div className="flex gap-4">

        <Link to='/'>
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to='/shop'>
            <Button variant="ghost">Shop</Button>
        </Link>
          <Link to='/cart'>
            <Button variant="ghost">Cart</Button>
        </Link>
      </div>
    </nav>
  )
}
 