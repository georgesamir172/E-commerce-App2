import { url } from "inspector";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest){
    const token = await getToken({req: request})
    const { pathname } = request.nextUrl
    const authpage = ["/login" , "/register " , "/forgotPassword" , "/verifyResetCode" , "/resetPassword"]
    const routes = ["/" ,   "/payment" , "/allorders" , "/cart" , "/wishList" , "/products" , "/categories" , "/brands"]

    if(!token && routes.includes(pathname)){
        return NextResponse.redirect(new URL('/login' , request.url) )
    }
    if(token && authpage.includes(pathname)){
        return NextResponse.redirect(new URL('/' , request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/" ,   "/payment" , "/allorders" , "/cart" , "/wishList" , "/products" , "/categories" , "/brands" , "/login" , "/register " , "/forgotPassword" , "/verifyResetCode" , "/resetPassword" ]
}