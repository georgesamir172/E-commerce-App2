"use server"
import axios from "axios"

export default async function getAllProducts() {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/products", {cache: 'no-store'})
    const {data} = await response.json()
    console.log(data)
  return data
}