import { useState } from "react";
import { ArrowBigLeft, Circle, CircleDot } from "lucide-react";
import { ArrowBigRight } from "lucide-react";

function ImageSlider({imageUrls}){
     const [imageIndex, setimageIndex] = useState(0);
     function previousImage(){
    if(imageIndex==0){
        setimageIndex(imageUrls.length - 1 );
    }
    else
        setimageIndex( prevIndex=> prevIndex-1 );
}
function nextImage(){
    if(imageIndex==imageUrls.length - 1){
        setimageIndex(0);
    }
    else
        setimageIndex( prevIndex=> prevIndex+1 );
 }
 
    return(
       <>
            <div className= {`w-full h-full flex transition-transform duration-300 ease-in-out`} style={{transform : `translateX(${-100*imageIndex}%)`}}>
                {
                    imageUrls.map((url)=>
                        <img  key={url} src={url} alt="" className ={`shrink-0 w-full h-full object-cover `} />
                    )
                }
            </div>
        
            <button className="absolute left-0 top-0 bottom-0 cursor-pointer hover:bg-stone-950/10 p-5 transition" onClick={previousImage} >
                <ArrowBigLeft stroke="white"/>
            </button>
            <button className="absolute right-0 top-0 bottom-0 cursor-pointer  hover:bg-stone-950/10 p-5 transition"onClick={nextImage} >
                <ArrowBigRight stroke="white" />
            </button>
            <div className="absolute  left-[50%] -translate-[50%] bottom-2 flex gap-1">
                {imageUrls.map((_,index) => <button className="w-4 h-4" onClick={()=> setimageIndex(index)}
                 >{index === imageIndex ? <CircleDot className="stroke-white fill-black w-full h-full"/> : <Circle className="stroke-white fill-black w-full h-full"/>}</button>)}
            </div>
       </>
    

    )
}

export default ImageSlider;