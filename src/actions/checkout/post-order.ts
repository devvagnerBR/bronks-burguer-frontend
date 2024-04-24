'use server'

import { getCookie } from "../cookies/get-cookie";
import { BASE_URL } from "@/src/requests/base-url";

export async function postOrder( body: any ) {


    const token = await getCookie( 'token' );

    const res = await fetch( `${BASE_URL}/user/cart/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify( {
            cep: body.cep,
            street: body.street,
            neighborhood: body.neighborhood,
            city: body.city,
            state: body.state,
            complement: body.complement,
            paymentMethod: body.paymentMethod,
        } ),
        credentials: 'include',
    } )

    const data = await res.json()

}
