'use server'

import { BASE_URL } from "@/src/requests/base-url"
import { getCookie } from "../cookies/get-cookie";
import { revalidateTagAction } from "@/src/utils/revalidate";
import { getCart } from "./get-cart";
import { redirect } from "next/navigation";


export async function removeToCart( productId: string ) {

    const token = await getCookie( 'token' );
    // const cart = await getCart();

    const response = await fetch( `${BASE_URL}/user/cart/${productId}`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include',
    } )

    await revalidateTagAction( '@req.cart' );

    const data = await response.json();
    return data;

    // if ( cart?.items.length === 1 && cart.items[0].quantity === 1) redirect( '/' )

}