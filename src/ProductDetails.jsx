import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"

function ProductDetails(){
    const [vans,setVans] = useState([]);
    const params= useParams();
     useEffect(()=>{
             fetch(`/api/products/${params.id}`)
             .then(res=> res.json())
             .then(data=>setVans(data))  
        },[]);
    return( 
        <>
         <h1>product detail</h1>
          <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div className="flex flex-wrap justify-center gap-2 md:flex-row">
      <Button Button variant="link" >Button</Button>
    </div>
        <div>{vans.description}</div>
        </>  
   
)
}
export default ProductDetails;