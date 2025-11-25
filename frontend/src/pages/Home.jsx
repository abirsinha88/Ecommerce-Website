import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProductCard } from "@/components/ProductCard"
import { useState } from "react"
import { useEffect } from "react"
import Footer from "../components/Footer"


export default function Home() {
  const [ products,setProducts] = useState([]);
  useEffect(()=>{
    
    fetch("/api/products")
    .then( res=> res.json())
    .then( data => setProducts(data.products));
  },[]);

  const productElements = products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ));
  
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-12">
        {productElements }
      </section>
      {/* <Footerooter/> */}
    </>
  )
}