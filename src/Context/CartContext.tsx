"use client"
import { AddToCartAction } from '@/CartActions/addToCart'
import { getUserCartAction } from '@/CartActions/getUserCartAction'
import { removeCartItemAction } from '@/CartActions/removeCartItemAction'
import React, { createContext, useEffect, useState } from 'react'
import { updateCartAction } from '@/CartActions/updateCart'
import { clearCartAction } from '@/CartActions/clearCart'
// ------------------fatal mistake make sure that create context is imported from react not vm

export const cartContext = createContext({})
const CartContextProvider = ({children} : {children : React.ReactNode}) => {

const[numOfCartItems , setNumOfCartItems] = useState(0)
const[totalCartPrice , setTotalCartPrice] = useState(0)
const[products , setProducts] = useState([])
const[isLoading , setIsLoading] = useState(false)
const[cartId , setCartId] = useState("")


async function addProductToCart(id:string){ //call this fn in addBtnCart component and add the context At P5 at 5:48
	

	try{
		const data = await AddToCartAction(id) //check on this name
		getUserCart()
		console.log(data)
		return data
	}catch(error){
		console.log(error)
	
	}
}

async function removeCartItem(id:string){
	try{
		const data = await removeCartItemAction(id)	
		setNumOfCartItems(data.numOfCartItems)
		setProducts(data.data.products)
		setTotalCartPrice(data.data.totalCartPrice)
		
		return data
		
		//console.log(data)
	} catch(error){
		console.log(error)

	}
	
}

async function updateCart(id : string , count : number) {
	try {
		const data = await updateCartAction(id , count)
		setNumOfCartItems(data.numOfCartItems)
		setProducts(data.data.products)
		setTotalCartPrice(data.data.totalCartPrice)
	} catch (error) {
		console.log("error")
		
	}
	
}

async function clearCart(id : string , count : number) {
	try {
		const data = await clearCartAction()
		setNumOfCartItems(0)
		setProducts([])
		setTotalCartPrice(0)
	} catch (error) {
		console.log("error")
		
	}
}


async function getUserCart(){
	setIsLoading(false)
	
	
	try{
		const data = await getUserCartAction()	
		setNumOfCartItems(data.numOfCartItems)
		setProducts(data.data.products)
		setTotalCartPrice(data.data.totalCartPrice)
		setCartId(data.cartId)
		setIsLoading(false)
		
		console.log(data)
	} catch(error){
		console.log(error)
		setIsLoading(false)
	}

}

useEffect(function (){
	getUserCart()
} , [])

function afterPayment(){
	setCartId("")
	setNumOfCartItems(0)
	setTotalCartPrice(0)
	setProducts([])	
} //and share this fn in the context

return(
	<cartContext.Provider value={{
	numOfCartItems , 
	products,
	totalCartPrice,
	isLoading,
	addProductToCart,
	removeCartItem,
	updateCart,
	clearCart,
	cartId,
	afterPayment
}}>
		{children}
	</cartContext.Provider>
	// </>
)
}
export default CartContextProvider


//call cartContextProvider in Providers at P3 --> 2:10
//make cart.type.ts in types folder at P3 --> 16:00