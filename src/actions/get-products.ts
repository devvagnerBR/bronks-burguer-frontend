'use server'

import { BASE_URL } from "../requests/base-url";
import { getCookie } from "./cookies/get-cookie";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    created_at: string;
    updated_at: string;
}



export async function getProducts(): Promise<Product[] | { message: string }> {

    const token = await getCookie( 'token' );

    const response = await fetch( `${BASE_URL}/client/product/list`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        next: {
            tags: ['products'],
            revalidate: 60 * 60
        }
    } )

    const data = await response.json() as Product[];
    return data;

}