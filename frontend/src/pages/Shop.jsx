import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // or Next.js Link
import { ProductCard } from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion";
import {Breadcrumb,BreadcrumbEllipsis,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator} from "@/components/ui/breadcrumb"

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("item-1");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="grid grid-cols-[220px_800px] grid-rows-[1fr_5fr] justify-center">
      <div className="col-span-2 w-100 h-30 self-center flex flex-col justify-around">
        <h1 className="text-6xl font-medium">All Products</h1>
          <BreadcrumbCollapsed/>     
        
      </div>
      <div className="row-start-2 flex flex-col px-10">
        <Accordion
          type="single"
          collapsible="true"
          defaultValue={value}
          onValueChange={setValue}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Catagory</AccordionTrigger>
            <AccordionContent>
              <Link to="/">
                <Button variant="link">T-SHIRT</Button>
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link to="/">
                <Button variant="link">SHIRT</Button>
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link to="/">
                <Button variant="link">JEANS</Button>
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link to="/">
                <Button variant="link">SWEATSHIRT</Button>
              </Link>
            </AccordionContent>

            <AccordionContent>
              <Link to="/">
                <Button variant="link">TRACK PANTS</Button>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Color</AccordionTrigger>
            <AccordionContent>
              <Slider defaultValue={[33]} max={100} step={1} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />
        <Accordion type="multiple" collapsible="true">
          <AccordionItem value="item-3">
            <AccordionTrigger>Filter By</AccordionTrigger>
            <AccordionContent>
              <Slider defaultValue={[33]} max={100} step={1} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Color</AccordionTrigger>
            <AccordionContent>
              <Slider defaultValue={[33]} max={100} step={1} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link key={p.id} to={`/shop/${p.id}`}>
            <ProductCard product={p} />
          </Link>
        ))}
      </section>
    </div>
  );
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
          <BreadcrumbPage>products</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}