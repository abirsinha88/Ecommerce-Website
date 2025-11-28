import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProductCard } from "@/components/ProductCard"
import { useState } from "react"
import { useEffect } from "react"
import Footer from "../components/Footer"
import carousel1 from "../../public/carousel-1.jpg";
import carousel2 from "../../public/carousel-2.jpg";
import carousel3 from "../../public/carousel-3.jpg";
import ImageSlider from "../components/ImageSlider"

const imageUrls=[carousel1,carousel2,carousel3];
console.log(imageUrls);



export default function Home() {
  const [ products,setProducts] = useState([]);
  useEffect(()=>{
    
    fetch("http://localhost:5000/api/products")
    .then( res => res.json())
    .then( data => setProducts(data.products));
  },[]);

  const productElements = products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ));
  
  return (
    <>
       
        <div className=" relative max-w-7xl h-130 mr-auto ml-auto overflow-hidden" >
            <ImageSlider imageUrls={imageUrls}/>
             <div className="absolute  top-[50%] bottom-20 left-[50%] right-20 -translate-[50%] [50%] flex flex-col justify-center items-center">
                <Hero />
             </div>
        </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-12">
        {productElements }
      </section>

    </>
  )
}