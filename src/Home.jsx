import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";import { FaArrowAltCircleRight } from "react-icons/fa";


function Home(){
    const [carouselImage, SetCaraouselImage] = useState(2);
   


    return (
        <section className="carousel-image">
             <div className="image-container">
            <img src={`/carousel-${carouselImage}.jpg`}
            className="carousal"  alt="" />

          <FaArrowAltCircleLeft style={{left:"20px"}}/>
            <FaArrowAltCircleRight style={{right:"20px"}} />

        </div>
        </section>
    )
        
       
}
export default Home;