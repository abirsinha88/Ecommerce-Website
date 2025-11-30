import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCartDispatch } from "../contexts/CartContext";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom"

import {Breadcrumb,BreadcrumbEllipsis,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator} from "@/components/ui/breadcrumb"


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useCartDispatch();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error:", err));
  }, [id]);

  if (!product) return <p className="px-8 py-12">Loading...</p>;

  return (
    <div className=" grid grid-cols-[300px_300px] grid-rows-[1fr_5fr] gap-x-20 gap-y-10 justify-center justify-items-start">
            <div className="col-span-2 h-10 self-end ">
      
        <BreadcrumbCollapsed/>
      </div>
      <div className="max-w-70 justify-self-end">
      <img
        src={`/${product.image}`}
        alt={product.name}
        className="w-full rounded-xl shadow h-100 object-cover object-top"
        />
        </div>

  
      <div className="flex flex-col gap-3 max-w-70">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <h3>SKU: 0004</h3>
        <p className="text-2xl font-semibold">₹{product.price}</p>
        <p className="text-lg text-gray-700">{product.description}</p>
        <h3>Color</h3>
        <ButtonRounded/>
        <Button className="w-full md:w-auto" onClick={() =>  dispatch({ type: "INCREASE", id:product.id })} >
          Add to Cart
        </Button>
         <Separator />
        <Accordion type="multiple" collapsible="true">
          <AccordionItem value="item-3">
            <AccordionTrigger>Product Info</AccordionTrigger>
            <AccordionContent>
              <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Return and Refund Policy</AccordionTrigger>
            <AccordionContent>
              <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </div>
  );
}

function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full bg-black border-4 outline-1 hover:bg-black text-black">
      </Button>
    </div>
  )
}

 function BreadcrumbCollapsed() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/shop">Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>product</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}