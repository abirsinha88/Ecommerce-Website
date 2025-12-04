import { useState } from "react";
import { ArrowBigLeft, Circle, CircleDot } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
import { Hero } from "./Hero";
function Slider({children,itemWidth }) {
  const [itemIndex, setitemIndex] = useState(0);
  function previousItem() {
    if (itemIndex == 0) {
      setitemIndex(children.length - 1);
    } else setitemIndex((prevIndex) => prevIndex - 1);
  }
  function nextItem() {
    if (itemIndex == children.length - 1) {
      setitemIndex(0);
    } else setitemIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <>
      <div
        className={`w-full h-full flex transition-transform duration-300 ease-in-out`}
       
      >
        {children.map((child, index) => (
          <>
            <div  style={{ transform: `translateX(${-100 * itemIndex}%)` }} className={itemWidth+" shrink-0"}>
            {child}

            </div>
          
          </>
        ))}
      </div>

      <button
        className="absolute left-0 top-0 bottom-0 cursor-pointer hover:bg-stone-950/10 p-5 transition"
        onClick={previousItem}
      >
        <ArrowBigLeft stroke="white" fill="black"/>
      </button>
      <button
        className="absolute right-0 top-0 bottom-0 cursor-pointer  hover:bg-stone-950/10 p-5 transition"
        onClick={nextItem}
      >
        <ArrowBigRight stroke="white" fill="black" />
      </button>
      <div className="absolute  left-[50%] -translate-[50%] bottom-2 flex gap-1">
        {children.map((_, index) => (
          <button className="w-4 h-4" onClick={() => setitemIndex(index)}>
            {index === itemIndex ? (
              <CircleDot className="stroke-white fill-black w-full h-full" />
            ) : (
              <Circle className="stroke-white fill-black w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

export {Slider};
