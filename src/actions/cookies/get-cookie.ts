'use server'

import { cookies } from "next/headers";


export async function getCookie( key: string ) {

    const cookie =  cookies().get( key )?.value;

    if ( !cookie ) return { message: 'cookie não encontrado' }
    return cookie;
}