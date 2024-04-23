'use server'

import { BASE_URL } from "@/src/requests/base-url"
import { getCookie } from "../cookies/get-cookie";

import { Product } from '@/src/actions/get-products';

export type CartProduct = Omit<Product, 'created_at' | 'updated_at'> & {
    quantity: number;
    total: number;
}

export interface Cart {
    total_order: number;
    items: CartProduct[]
}


export async function getCart() {


    const token = await getCookie( 'token' ) as string;

    if ( token ) {

        const response = await fetch( `${BASE_URL}/user/cart`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            next: {
                tags: ['cart'],
            }
        } )
        const data = await response.json() as Cart;
        return data;
    }

}