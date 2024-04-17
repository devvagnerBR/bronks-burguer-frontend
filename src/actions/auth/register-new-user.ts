'use server'

import { BASE_URL } from "../../requests/base-url";
import { setCookie } from "../cookies/set-cookie";

export interface registerNewUserInterface {
    username: string;
    email: string;
    password: string;
}

export async function registerNewUser( { username, email, password }: registerNewUserInterface ) {

    const response = await fetch( `${BASE_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify( { username, email, password } ),
        credentials: 'include'
    } )

    const data = await response.json();

    if ( response.status !== 201 ) return { authorized: false, message: data.message }

    await setCookie( 'token', data.token );
    return ( { authorized: true, message: data.message } );

}