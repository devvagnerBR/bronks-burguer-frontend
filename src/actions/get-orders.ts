'use server'


import orderMappers from "../components/pedidos/order-mappers";
import { BASE_URL } from "../requests/base-url"
import { getCookie } from "./cookies/get-cookie";

export async function getOrders() {

    const token = await getCookie( 'token' ) as string;

    const response = await fetch( `${BASE_URL}/user/orders`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        next: {
            tags: ['@req.orders'],
        }
    } )

    const data = await response.json();
    return data.map( orderMappers.toFrontend )


}