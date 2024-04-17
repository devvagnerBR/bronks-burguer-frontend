'use server'

import { cookies } from "next/headers";
import { BASE_URL } from "../requests/base-url";
import { getCookie } from "./cookies/get-cookie";

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    phone: string;
    address: {
        id: string;
        cep: string;
        street: string;
        neighborhood: string;
        city: string;
        state: string;
        complement: string;
        user_id: string;
    };
}



export async function getProfile(): Promise<User | { message: string }> {

    const token = await getCookie( 'token' );

    const response = await fetch( `${BASE_URL}/user/profile`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        next: {
            tags: ['@req.profile']
        }
    } )

    const data = await response.json() as User;
    return data;

}