"use client"
import React, { useContext } from 'react'
import Loading from '../loading'

import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext'
import Image from 'next/image'
import { toast } from 'sonner'
import Link from 'next/link'
// import Products from '../products/page'
// import { Products } from '@/types/products.type';
// import { removeCartItemAction } from '@/CartActions/removeCartItemAction';
const Cart = () =>{
		 {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}
	const{isLoading , totalCartPrice , products , removeCartItem , updateCart , clearCart} = useContext(cartContext)
	
	async function removeItem (id:string){
		const data = await removeCartItem(id)
		// console.log(data)
		if(data.status === "success"){
            toast.success("Product is Removed successfully",{
            position:'top-center',
            duration:3000
        })
        }else{
            toast.error("Error! Product is not Removed From Cart",{
            position:'top-center',
            duration:3000
        })
        }
	}
	
	if(isLoading){
		return<Loading/>
	}
	if(products.length == 0){
		return<div className="h-screen w-screen flex justify-center items-center">
			<h1 className='text-4xl mb-4'>Empty Cart</h1>
		</div>
	}
	
	return(
	<div className="w-[80%] mx-auto bg-slate-100 p-5 rounded-xl" >
		<div className='mb-5'>
			<h1 className="text-2xl font-bold">My Shopping cart</h1>
			<p className="my-2 bg-green-500 font-mono">Total Price : {totalCartPrice} EGP</p>
			<Button onClick={clearCart} className="my-2">Empty My Cart</Button>
			<Link className="ms-3" href={"/payment"}><Button className="text-white" >Payment</Button></Link>
		</div>
		<div className="grid grid-cols-12 gap-5">
				 {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}
			{products.map(function(product , idx){
			return 	<div key={idx} className="col-span-12 flex justify-between items-center border-b-1px border-green-300">
				<div className="product-cart-left">
					<Image src={product.product.imageCover} alt="cart_product" height={200} width={200}/>	
				</div>
				<div className="product-cart-middle flex flex-col justify-center items-center ms-4">
					<h1 className=''>{product.product.title}</h1>
					<p className="ms-4 my-2 text-green-500">Price : {product.price}</p>
					<Button onClick={()=>removeItem(product.product.id)} className="">Remove</Button>
				</div>
				<div className="product-cart-right flex justify-center items-center">
					<Button onClick={()=>updateCart(product.product.id , product.count+1)} className="me-3">+</Button>
					<p>{product.count}</p>
					<Button onClick={()=>updateCart(product.product.id , product.count-1)} className="ms-3">-</Button>
				</div>
			
			</div>
			})}
		</div>
	</div>
	)
}
export default Cart