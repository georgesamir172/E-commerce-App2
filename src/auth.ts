import CredentialsProvider from "next-auth/providers/credentials"
import { AuthOptions } from "next-auth"
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {signIn} from "next-auth/react"
export const authOptions : AuthOptions  = {
// import email from './../node_modules/next-auth/core/lib/email/signin.d';
//    import { User } from './../node_modules/next-auth/core/types.d';
 pages :{
    signIn:"/login"
},
 providers : [
       CredentialsProvider({
         name: "credentials",   //c was capital
    credentials: {
      email: { label: "Email", type: "email", placeholder: "Enter Your Email"  },
      password: { label: "Password", type: "password" , placeholder: "Enter Your Password" }
    },
     async authorize(credentials , req) {
        // const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
        //     method : "POST",
        //     headers :{"Content-Type": "application/json"},
        //     body:JSON.stringify({
        //         email : credentials?.email,
        //         password : credentials?.password
        //     })
        // })

        // const response = await fetch(`${process.env.API}/auth/signin`,{

        const response = await fetch(`${process.env.API}/auth/signin`,{
            method : 'POST',
            // headers :{"Content-Type": "application/json"},
            body:JSON.stringify({
                email : credentials?.email,
                password : credentials?.password
            }),
            // headers :{"Content-Type": "application/json"}
            headers :{"Content-Type": "application/json" ,     accept: 'application/json',
            'User-agent': 'learning app',}
            
        })   
        console.log(response , "called authorize")

        const payload = await response.json()
        if(payload.message === "success"){

            const {id} : {id : string} = jwtDecode(payload.token)
            return{
                id:id,
                user : payload.User,
                token : payload.token
            }
        }
        throw new Error(payload.message || "Login failed")
    }
    })
    ], 
     callbacks: {
    async jwt({ token, user }) {
        if(user){  //storing the user and token in server (storing in token object on server)
            token.user = user?.user
            token.token = user?.token
        }
      return token
    },
        async session({ session , token }) {
            if(token){ // storing the user in client side from the token object in server
                session.user = token?.user
            }
      return session
    },
}
}