'use server'
import { BASE_URL } from "../../requests/base-url";
import { setCookie } from "../cookies/set-cookie";

export interface loginUserInterface {
    email: string;
    password: string;
}


export async function authenticate( { email, password }: loginUserInterface ) {

    const response = await fetch( `${BASE_URL}/user/authenticate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { email, password } ),
        credentials: 'include',
    } )

    const data = await response.json()

    if ( response.status === 200 ) {
        await setCookie( 'token', data.token );
        return ( { authorized: true, message: data.message } )
    }

    return ( { authorized: false, message: data.message } );
}
