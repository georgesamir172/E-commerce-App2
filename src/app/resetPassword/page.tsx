"use client"
import resetPasswordAction from '@/apis/resetPassword'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

const ResetPassword = () => {

    const resetEmail = useRef("")
    const myNewPassword= useRef("")
    // const[setPassword , setpasswordResetCode] = useState("")


    
    async function getResetPassword(){
        const values ={
            			// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
	        //  @ts-ignore	
            email:resetEmail.current?.value ,
            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	 
            newPassword:myNewPassword.current?.value
        }
        try{
            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	
            const data = await resetPasswordAction(values)	
            // setForgotPasswordData(data.numOfCartItems)

            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	
            console.log(values)
            console.log(data , "from try reset pass")
				toast.success("Success" , {   
					position:"top-center" , 
					duration:1000
				})
            
            window.location.href = "/login"
            
            return data
            
            
        } catch(error){
            console.log(error)
            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	
            console.log(values , "from error reset pass")
            //  eslint-disable-next-line @typescript-eslint/ban-ts-comment  
	        //  @ts-ignore	
            toast.error(error , {   
                position:"top-center" , 
                duration:3000
            })
    
        }
        
    }

    // useEffect(function (){
    //     getForgotPassword()
    // } , [])
  return (
    <div className="w-[80%] mx-auto my-10 px-5">
		<h1 className="text-center font-bold text-2xl">Verify Reset Code</h1>
		<div className="my-10">
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	          {/* @ts-ignore	 */}
			<label htmlfor="resetEmail">Enter Yor Email</label>
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	          {/* @ts-ignore	 */}
			<Input ref={resetEmail} type="email" id="resetEmail" className="my-3"/> 

                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	          {/* @ts-ignore	 */}
            <label htmlfor="myNewPassword">Enter Your New Password</label>
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment   */}
	          {/* @ts-ignore	 */}
			<Input ref={myNewPassword} type="password" id="myNewPassword" className="my-3"/> 

			<Button onClick={getResetPassword} className="">Reset Password</Button> 	
		</div>	
	</div>
  )
}

export default ResetPassword