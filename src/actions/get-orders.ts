'use server'


import orderMappers from "../components/perfil/pedidos/order-mappers";
import { BASE_URL } from "../requests/base-url"
import { getCookie } from "./cookies/get-cookie";

export async function getOrders( p: number = 1 ) {

    const token = await getCookie( 'token' ) as string;

    const response = await fetch( `${BASE_URL}/user/orders?p=${p} `, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        next: {
            tags: ['@req.orders']
        }
    } )

    const data = await response.json();


    const items = data?.orders?.map( orderMappers.toFrontend ) as any[]
    const count = data.totalItems;

    return { items, ordersCount: count }


}