import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


function ImageSlider(props){
     const [imageIndex, setimageIndex] = useState(0);
     function previousImage(){
    if(imageIndex==0){
        setimageIndex(props.imageurls.images.length - 1 );
    }
    else
        setimageIndex( prevIndex=> prevIndex-1 );
}
function nextImage(){
    if(imageIndex==props.imageurls.images.length - 1){
        setimageIndex(0);
    }
    else
        setimageIndex( prevIndex=> prevIndex+1 );
}
    return(
        <div className="img-slider-container">
    
            <img src={props.imageurls.images[imageIndex]}
            className="img-slider-img"  alt="" />
            <button onClick={previousImage} className="img-slider-btn" style={{left:"20px"}}>
                <FaArrowAltCircleLeft />
            </button>
            <button onClick={nextImage} className="img-slider-btn" style={{right:"20px"}}>
                <FaArrowAltCircleRight  />
            </button>
            

        </div>

    )
}
export default ImageSlider;