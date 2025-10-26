import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom" 
export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-4">Discover Your Style</h2>
      <p className="text-gray-600 max-w-xl mb-6">
        Explore the latest trends and timeless classics. Your perfect outfit awaits.
      </p>
       <Link to='/shop'>
          <Button size="lg">Shop Now</Button>
       </Link>
    </section>
  )
}
