import {Breadcrumb,BreadcrumbEllipsis,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import {  Select,SelectContent,SelectItem,SelectTrigger, SelectValue} from "@/components/ui/select"
import { useLocation } from "react-router-dom"

export function PageHeader({header,isFilterRequired}){

        let url = useLocation()
        let urlParts = url.pathname.split("/")
        let breadcrumbItems = urlParts.map((part,index)=>{
          if(part == "")
            return         (
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>)
            else if(index !== urlParts.length - 1 ){
              return(
              <>
               <BreadcrumbSeparator />
                <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${part}`} >{part}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
              </>
              )
              
            }
            else
              return(<>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{part}</BreadcrumbPage>
              </BreadcrumbItem>
              </>
            )

        });

        

    return(
    <>
        <div className=" w-100 h-30 self-center flex flex-col justify-around col-start-1 col-end-3 row-start-1 row-end-2">
        <h1 className="text-3xl font-medium">{header}</h1>
          <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems}      
      </BreadcrumbList>
    </Breadcrumb>
      </div>
      { isFilterRequired && <div className="col-start-1 col-end-3 row-start-1 row-end-2 w-50 justify-self-end self-end p-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Price Low to High">Price Low to High</SelectItem>
            <SelectItem value="Price High to Low ">Price High to Low</SelectItem>
            <SelectItem value="system">A-Z</SelectItem>
            <SelectItem value="system2">Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>
}
    </>
    )
}