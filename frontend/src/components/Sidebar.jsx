import { Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/base-accordion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function Sidebar({children}){
    return(
        <>
            <div className="row-start-2 flex flex-col px-10">
            {children}
      </div>
        </>
    )

}