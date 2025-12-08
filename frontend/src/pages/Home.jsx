import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import carousel1 from "../../public/carousel-1.jpg";
import carousel2 from "../../public/carousel-2.jpg";
import carousel3 from "../../public/carousel-3.jpg";
import { Slider } from "../components/Slider";
import { MySheet } from "@/components/MySheet";

const imageUrls = [carousel1, carousel2, carousel3];

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const productElements = products.map((p) => (
    <ProductCard key={p.id} product={p} />
  ));

  return (
    <>
      <div className=" relative max-w-7xl h-130 mx-auto overflow-hidden">
        <Slider itemWidth={"w-screen"}>
          {imageUrls.map((url, index) => {
            return (
              <>
                <img
                  key={url}
                  src={url}
                  alt=""
                  className={`shrink-0 w-full h-full object-cover `}
                />
                <div className=" w-full absolute left-[50%] bottom-[50%] -translate-x-[50%] text-center translate-y-[50%]">
                  <Hero />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
      <div className="text-center p-12 font-sans font-semibold text-2xl tracking-wide">
        <h2>
          Featured Products
        </h2>
      </div>
      <div className=" relative max-w-7xl h-100 mx-auto overflow-hidden">
        <Slider itemWidth={"w-64"}>{productElements}</Slider>
      </div>
    </>
  );
}
