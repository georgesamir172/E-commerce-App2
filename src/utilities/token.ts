"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken(){ //get original token
    const cryptedToken = (await cookies()).get("next-auth.session-token")?.value

 const decryptedToken = await decode(    //decrypt the token in cookies by the secret key
        {
            token:cryptedToken,
            secret:process.env.NEXTAUTH_SECRET!
        }
    )
    // console.log(decryptedToken.token) //this is the real token comes from server

    return decryptedToken?.token
}
