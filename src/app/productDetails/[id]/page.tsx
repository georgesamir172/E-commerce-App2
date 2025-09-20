import getSingleProduct from '@/apis/singleProduct'
import AddToCartBtnProductDetails from '@/app/_components/AddToCartBtnProductDetails/AddToCartBtnProductDetails'
import AddToWishListBtn from '@/app/_components/addToWishListBtn/addToWishListBtn'

// import { productDetails } from '@/types/productdetails.type'
import { getWishListForHeart } from '@/WishListActions/getWishListForHeart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const ProductDetails = async ({params} : {params : string}) => {
        			//  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	 
  const {id} = await params
  console.log(id)
  let x = 0
  let y = 0
  const data= await getSingleProduct(id)
  console.log(data)
  const wishListData = await getWishListForHeart()
    for(let u =0; u<wishListData.length ; u++){
    if(wishListData[u] == data.id){
      y=1
    }else{
      x=0
    }
    }
  

  return (
    <div className='w-[80%] mx-auto gap-4 grid grid-cols-12 py-12'>
      <div className='col-span-12 md:col-span-4'>
        <Image src={data.imageCover} alt={data.title} width={500} height={500}/>
      </div>      
      <div className='col-span-12 md:col-span-8 flex flex-col justify-center'>
        <h1 className='mb-4 text-3xl font-bold'>{data.title}</h1>
        <p className='mb-6'>{data.description}</p>
        <div className="w-full flex justify-between items-center mb-4">
          <div>
            <span>{data.price} EGP</span>
          </div>
          <div>
            <i className="fa-solid fa-star text-[#daa520] me-2"></i>
            <span>{data.ratingsAverage}</span>
          </div>
        </div>
        <div className='mb-4'>
          <span>{data.category.name}</span>
        </div>
        <div className='flex justify-between items-center'>

          <div className='w-[80%] mx-auto'>
            {/* <Link href="/cart" className="w-full rounded-xl mx-auto"> */}
              <AddToCartBtnProductDetails id = {id}/>
            {/* </Link> */}
          </div>
          {/* box-shadow : 1px 1px 10px #4fa74f */}

          <div className="w-fit">
            {/* <i className="fa-solid fa-heart text-3xl"></i> */}
            {( y ==1 && x==0)? <AddToWishListBtn id={id} mycolor={'text-red-600'}/> : null}
            {( y ==0 && x==0)? <AddToWishListBtn id={id} mycolor={'text-black'}/> : null}
          </div>

        </div>
        
      </div> 
    </div>
    
  )
  
}


export default ProductDetails