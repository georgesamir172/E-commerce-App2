import { getUserOrder } from '@/apis/getUserOrders'
import Image from 'next/image'
import React from 'react'

const AllOrders = async () =>{
	const data = await getUserOrder()
	console.log(data)
	return(
		<div className="w-[80%] mx-auto my-3">
			{data.length==0 && <div className='flex justify-center items-center h-full w-full'><h1 className='text-4xl font-bold text-center'>No Orders</h1></div> }
			<div className="allOrders p-5 grid grid-cols-12 my-4 gap-10">
	 {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}
				{data.map(function(order , idx){return <div className="p-2 bg-slate-100 mb-3 col-span-12" key={idx}>
					<div className="grid grid-cols-12 mx-auto p-10">
	{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	 {/* @ts-ignore				 */}	
						{order.cartItems.map(function(item , idx){return <div key={idx} className="col-span-2 mx-5">
							<Image src={item.product.imageCover} alt="item" width={300} height={300}/>
							<h2 className="line-clamp-1 text-center">{item.product.title}</h2>
						</div>
						})}
					</div>
					<div className="bg-slate-400 p-3 border-b-[1px]"><h2>Payment Method : {order.paymentMethodType}</h2></div>
					<div className="bg-slate-400 p-3"><h2>Total Order Price : {order.totalOrderPrice} EGP</h2></div>
					
				</div>})}
			</div>
		</div>
	)

}

export default  AllOrders  //add /allorders in middleware in routes array and matcher
//addli in navbar of /allorders