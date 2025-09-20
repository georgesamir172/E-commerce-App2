"use client"
import { Button } from '@/components/ui/button'
import { getUserWishListAction } from '@/WishListActions/getUserWishListAction'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from '../loading'
import { removeWishListItemAction } from '@/WishListActions/removeWishListItemAction'
import AddToCartBtnForWishList from '../_components/addToCartBtnForWishList/addToCartBtnForWishList'

const WishList =  ()  => {
	

  const[mydata , setMyData] = useState("")
  const[isLoading , setIsLoading] = useState(true)

  async function getUserWishList(){
	setIsLoading(true)
  try{
	
      const {data} = await getUserWishListAction()	

      setMyData(data)
	//   setIsLoading(false)
      return data
    } catch(error){
		// setIsLoading(false)
      console.log(error)

    }finally{
		setIsLoading(false)
	}
  }

  async function removeWishListItem(id:string){
	try{
		const data = await removeWishListItemAction(id)	
		getUserWishList()

		
		return data
		
		//console.log(data)
	} catch(error){
		console.log(error)
  
	}
	
  }

  
    useEffect(function (){
    getUserWishList()
    } , [])

	if(isLoading){
		return<Loading/>
	}

// console.log(mydata , "MyData")
  return (  <div className="w-[80%] mx-auto bg-slate-100 p-5 rounded-xl" >
		<div>
			<h1 className="text-2xl font-bold">My Wish List</h1>
		</div>
		<div className="grid grid-cols-12 gap-5 my-5">
			            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	        {/* @ts-ignore	  */}
			{mydata.map(function(product , idx){
			return 	<div key={idx} className="col-span-12 flex justify-between items-center border-b-1px border-green-300">
				{/* <div className="product-cart-left"> */}
					<Image src={product.imageCover} alt="cart_product" height={200} width={200}/>	
				{/* </div> */}
				<div className="flex flex-col justify-center items-center ms-4">
					<h1 className=''>{product.title}</h1>
					<p className="ms-4 my-2 text-green-500">Price : {product.price} EGP</p>
					<Button onClick={()=>removeWishListItem(product.id)} className="">Remove</Button>
				</div>
				<div>
					<AddToCartBtnForWishList id={product.id}/>
				</div>

			
			</div>
			})}
		</div>
	</div>
  )
}

export default WishList