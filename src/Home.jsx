import carousel1 from "../public/carousel-1.jpg";
import carousel2 from "../public/carousel-2.jpg";
import carousel3 from "../public/carousel-3.jpg";
import ImageSlider from "./ImageSlider.jsx"
import Products from "./Products.jsx"

function Home(){
  const images=[carousel1,carousel2,carousel3];
   


    return (
     <>
        <div style={{maxWidth:"1270px", width:"100%",height:"360px",
            margin: "0px auto"
       }}>
            <ImageSlider imageurls={{images}}/>
        </div>
    <Products/>
    </>
    )
        
       
}
export default Home;