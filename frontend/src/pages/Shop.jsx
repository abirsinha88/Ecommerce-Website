import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/base-accordion";
import { Sidebar } from "@/components/Sidebar";
import { PageHeader } from "@/components/PageHeader";
import {MainContentSection} from "@/components/MainContentSection";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("item-1");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="grid grid-cols-[220px_800px] grid-rows-[1fr_5fr] justify-center">
      <PageHeader header="All Products" isFilterRequired={true} />
      <Sidebar>
        <Accordion type="single" collapsible="true">
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
        </Accordion>
        <Separator />
      </Sidebar>
      <MainContentSection products={products}/>
      
    </div>
  );
}
