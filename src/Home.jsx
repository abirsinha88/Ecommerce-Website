import carousel1 from "../public/carousel-1.jpg";
import carousel2 from "../public/carousel-2.jpg";
import carousel3 from "../public/carousel-3.jpg";
import ImageSlider from "./ImageSlider.jsx"

function Home(){
  const images=[carousel1,carousel2,carousel3];
   


    return (
     
        <div style={{maxWidth:"1200px", width:"100%",height:"300px",
            margin: "0px auto"
       }}>
            <ImageSlider imageurls={{images}}/>
        </div>
    )
        
       
}
export default Home;