import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authMutations } from "../requests/react-query/mutations/auth";
import { delay } from "../utils/delay";

import {  useRouter } from "next/navigation";

const registerNewUserSchema = z.object( {
    username: z.
        string()
        .min( 3, 'nome de usuário precisa ter no mínimo 3 caracteres' )
        .regex( /^[a-z0-9\\-]+$/i, "apenas letras e números são permitidos" )
        .transform( username => username.toLowerCase() ),
    email: z.
        string()
        .email()
        .transform( email => email.toLowerCase() ),
    password: z.
        string()
        .min( 6, 'senha precisa ter no mínimo 6 caracteres' ),
} );

type registerNewUserData = z.infer<typeof registerNewUserSchema>

export  function useCadastro() {

    const router = useRouter();
    const [error, setError] = React.useState( '' );
    const { handleRegister } = authMutations();


    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<registerNewUserData>( { resolver: zodResolver( registerNewUserSchema ) } );


    async function handleRegisterNewUser( data: registerNewUserData ) {

        setError( '' )

        await delay( 1500 );
        const response = await handleRegister( data ) as { authorized: boolean, message: string };


        if ( !response.authorized ) setError( response.message );
        else router.push( '/' )
    }



    return {
        error,
        errors,
        setError,
        register,
        handleSubmit,
        isSubmitting,
        handleRegisterNewUser
    }
}