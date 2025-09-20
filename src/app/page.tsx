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
import MainSlider from "./_components/MainSlider/MainSlider";
import CategorySlider from "./_components/Categoryslider/CategorySlider";
import { Products } from "@/types/products.type";
import AddToCartBtn from "./_components/addToCartBtn/addToCartBtn";
import AddToWishListBtn from "./_components/addToWishListBtn/addToWishListBtn";
import { getWishListForHeart } from "@/WishListActions/getWishListForHeart";
// import { Products } from "@/types/products.type";


export default async function Home() {
 const data = await getAllProducts()
 console.log(data , "all products")
 let x = 0
 let y = 0


 const wishListData = await getWishListForHeart()
// for(let i =0; i<data.length ; i++){
//   y=0
  // for(let u =0; u<wishListData.length ; u++){
  //   if(wishListData[u] == data[i].id){
  //     y=1
  //   }else{
  //     x=0
  //   }
  // }
//  }
//  }
//  console.log(wishListData , "my wish List Data")

  return (
    <div className="w-[80%] mx-auto">
      <div className="main-slider my-10">
        <MainSlider/>
      </div>
      <div className="category-slider my-10">
        <CategorySlider/>
      </div>

    
    <div className="w-full grid grid-cols-12 gap-4 mx-auto my-5 ">
      {data.map( (product:Products , idx:number) => 
      
      
      <div key={idx} className="col-span-12 group sm:col-span-6 md:col-span-4 lg:col-span-3 my-1">
        {<div className="hidden">{y = 0}</div>}
        {/* <div className="bg-amber-500 group"> */}
        <Card className=" py-5  rounded-xl gap-0 hover:shadow-[1px_1px_10px] hover:shadow-[#4fa74f]">
          <Link className="" href={`/productDetails/${product.id}`}>
          {/* <div className="bg-blue-500 py-6 h-100 w100 "> */}
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction> */}
            <Image src={product.imageCover} alt={product.title} width={500} height={500} className="mx-auto"/>
          </CardHeader>
          <CardContent>
            <p className="text-[#4fa74f]">{product.category.name}</p>
            <p className="font-semibold line-clamp-1">{product.title}</p>
          </CardContent>
          <CardFooter className="flex flex-col mb-3">
            <div className="w-full flex justify-between items-center">
              <div>
                <span>{product.price} EGP</span>
              </div>
              <div>
                <i className="fa-solid fa-star text-[#daa520] me-2"></i>
                <span>{product.ratingsAverage}</span>
              </div>
            </div>
            <div className="w-fit ms-auto mt-3">
              {/* <i className="fa-solid fa-heart text-3xl"></i> */}
              {/* <AddToWishListBtn id={product.id}/> */}
            </div>
          </CardFooter>
          {/* </div> */}
          </Link> 
          {/* <AddToWishListBtn id={product.id} wishList={wishListData} strID={product.id.toString()}/> */}
          
          

          {/* {wishListData.map( (wishListItem , idx:number) => <div key={idx}>
          {(wishListItem === product.id) && <AddToWishListBtn id={product.id}/> } 
           {(wishListItem != product.id) && <AddToCartBtn id={product.id}/> } 
        </div>)} */}
        {/* <AddToWishListBtn key={idx} id={product.id} mycolor={'text-red-600'}/> */}

        
        {wishListData.map( (wishListItem , idx:number) => wishListItem == product.id ? <div key={idx} className="hidden">{`${y=1}`}</div> : <div key={idx} className="hidden">{`${x=0}`}</div> )}
        {( y ==1 && x==0)? <AddToWishListBtn key={idx} id={product.id} mycolor={'text-red-600'}/> : null}
        {( y ==0 && x==0)? <AddToWishListBtn key={idx} id={product.id} mycolor={'text-black'}/> : null}
        <AddToCartBtn id={product.id}/>



        
          
        </Card>
        {/* </div> */}
        
        
        
      </div>
      
       )}
      


  </div>
  </div>
  );
  //  }
//  }
}
