import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom" 
export function Hero() {
  return (
   <>
      <h2 className="text-4xl font-bold mb-4 text-white">Discover Your Style</h2>
      <p className="text-gray-600 mb-6 text-white ">
        Explore the latest trends and timeless classics. Your perfect outfit awaits.
      </p>
       <Link to='/shop'>
          <Button size="lg">Shop Now</Button>
       </Link>
   </>
  
  )
}
