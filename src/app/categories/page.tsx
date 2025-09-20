import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import getAllProducts from "@/apis/allproducts";
import Link from "next/link";
import { Products } from "@/types/products.type";

import getAllCategories from "@/apis/allCategories";


export default async function Categories() {
 const data = await getAllCategories()
  return (
    <div className="w-[80%] mx-auto">
    
    <div className="w-full grid grid-cols-12 gap-4 mx-auto my-5 ">
      	 {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}
      {data.map( (product , idx:number) => 
      <div key={idx} className="col-span-12 group sm:col-span-6 md:col-span-4 lg:col-span-3 my-1">
        
        <Card className=" py-5 h-[300] rounded-xl gap-0 hover:shadow-[1px_1px_10px] hover:shadow-[#4fa74f]">
          {/* <Link className="" href={`/categoryDetails/${product._id}`}> */}
          <CardHeader className=" overflow-hidden h-[250]" >
            <div className="flex justify-center items-center  h-full">
            <Image src={product.image} alt={product.name} width={500} height={500} className="object-contain"/>
              </div>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <p className="text-[#4fa74f]">{product.name}</p>
          </CardContent>
          <CardFooter className="flex flex-col mb-3">
            
          </CardFooter>
          {/* </Link>  */}
        </Card>
 
      </div>
      
       )}
      


  </div>
  </div>
  );
}
