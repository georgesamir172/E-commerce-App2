import { getUserWishListAction } from "./getUserWishListAction"




export async function getWishListForHeart(){

const {data} = await getUserWishListAction()
// console.log(data , "my wish List Data from for heart")
// {data.map((wishListItem)=> if(da))}
const wishlistItems = []
for (let i = 0; i < data.length; i++) {
    // const element = array[index];
    wishlistItems[i] = data[i].id
}

return wishlistItems
}

