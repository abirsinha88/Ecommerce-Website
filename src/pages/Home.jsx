import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProductCard } from "@/components/ProductCard"

const products = [
  { id: 1, name: "T-Shirt", image: "/shirt.jpg", price: 499 },
  { id: 2, name: "Sneakers", image: "/shoes.jpg", price: 1299 },
  { id: 3, name: "Jeans", image: "/jeans.jpg", price: 899 },
  { id: 4, name: "Watch", image: "/watch.jpg", price: 2499 },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-12">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  )
}