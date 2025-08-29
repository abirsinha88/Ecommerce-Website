import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
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
        `<div>{vans.description}</div>
        </>  
   
)
}
export default ProductDetails;