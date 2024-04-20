'use server'

import { BASE_URL } from "../requests/base-url";
import { getCookie } from "./cookies/get-cookie";

interface updateProfileInterface {
    name?: string;
    phone?: string;
    username?: string;
}


export async function updateProfile( { name, phone, username }: updateProfileInterface ) {


    const token = await getCookie( 'token' );

    const response = await fetch( `${BASE_URL}/user/profile/update`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify( { name, phone, username } )
    } );


    const data = await response.json();

    return data;

}
