'use server'

import { BASE_URL } from "../requests/base-url";
import { getCookie } from "./cookies/get-cookie";

interface updateAddressInterface {
    cep?: string,
    city?: string,
    state?: string,
    street?: string,
    neighborhood?: string,
    complement?: string
}


export async function updateAddress( { cep, city, state, street, neighborhood, complement }: updateAddressInterface ) {


    const token = await getCookie( 'token' );

    const response = await fetch( `${BASE_URL}/user/profile/address/update`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify( { cep, city, state, street, neighborhood, complement } )
    } );


    const data = await response.json();
    return data;

}
