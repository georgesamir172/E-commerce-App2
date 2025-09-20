"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginSchema, loginSchemaType } from '@/schema/login.schema'
import {signIn} from "next-auth/react"
import Link from 'next/link'
import getLogin from '@/apis/getLogin'
// import Credentials from 'next-auth/providers/credentials'

const Login = () => {

  const router = useRouter()

  const form = useForm<loginSchemaType>({
    defaultValues:{
      email:"",
      password:"",
    },resolver : zodResolver(loginSchema)
  })
  async function handleLogin(values : loginSchemaType){
      console.log(values , "my values")
  //     try {
  //       // const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
  //       const data = await getLogin(values)
  //       console.log(data)
  //       toast.success(data.message,{
  //         position:'top-center',
  //         duration:4000
  //       })

  //       // router.push("/")
  //     } catch (error) {
  //       	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// // @ts-ignore
  //       toast.error(error.response.data.message,{
  //         position:'top-center',
  //         duration:4000
  //       })
  //       console.log(error)
  //     }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
      const res = await signIn('credentials',{
        email:values.email,
        password:values.password,
        redirect:false,
        // callbackUrl :"/"
      })
      console.log(res , "my result")

      if (res?.ok){
        toast.success("Success",{
          position:'top-center',
          duration:3000
        })
        // window.location.href = res.url || "/"
      }else{
        toast.error(res?.error,{
          position:'top-center',
          duration:3000
        })
      }

      console.log(res)
  }
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='font-bold text-4xl text-center my-3'>Login Now</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">

          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Email :</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel className='my-2'>Password :</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter Your Password" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <Button type="submit" className='w-full my-4'>Login</Button>
          
        </form>
      </Form>
      <div className='mt-2 flex justify-center items-center'>
      <Link href="/forgotPassword" >Forgot Password</Link>
      </div>
    </div>
  )
}

export default Login