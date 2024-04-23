'use client'

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from '../context/user-context';
import { revalidateTagAction } from "../utils/revalidate";
import { updateProfile } from "../actions/update-profile";
import { delay } from "../utils/delay";



const meusDadosSchema = z.object( {
    name: z.string().optional(),
    username: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
} );

type meusDadosData = z.infer<typeof meusDadosSchema>

export function useMeusDados() {

    const { user } = useUserContext();

  
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<meusDadosData>( {
        resolver: zodResolver( meusDadosSchema ),
        defaultValues: {
            name: user?.name,
            username: user?.username,
            phone: user?.phone,
            email: user?.email,
        }
    } );


    async function handleUpdateProfile( data: { name?: string, phone?: string } ) {

        // await delay( 1000 );

        const updatedProfileData: { name?: string, phone?: string, username?: string } = {}

        if ( user ) {
            for ( const key in { name: user.name, phone: user.phone, username: user.username } ) {
                if ( user[key as keyof typeof user] !== data[key as keyof typeof data] ) {
                    updatedProfileData[key as keyof typeof updatedProfileData] = data[key as keyof typeof data];
                } else {
                    updatedProfileData[key as keyof typeof updatedProfileData] = undefined;
                }
            }
        }

        const res = await updateProfile( updatedProfileData );
        await revalidateTagAction( 'profile' );

        console.log( res );

    }


    return { register, handleSubmit, handleUpdateProfile, errors, watch, isSubmitting }

}