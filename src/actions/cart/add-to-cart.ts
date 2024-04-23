'use server'

import { BASE_URL } from "@/src/requests/base-url"
import { getCookie } from "../cookies/get-cookie";
import { revalidateTagAction } from "@/src/utils/revalidate";

export async function addToCart( productId: string ) {

    const token = await getCookie( 'token' ) as string
    // console.log( token )
    if ( !token ) return false;

    const response = await fetch( `${BASE_URL}/user/cart/${productId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include',
        next: {
            tags: ['@req.cart']
        }
    } )


    await revalidateTagAction( '@req.cart' );

    const data = await response.json();
    return data;

}
