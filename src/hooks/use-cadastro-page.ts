import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { registerNewUser } from "../actions/auth/register-new-user";

const registerNewUserSchema = z.object( {
    phone: z.string().min( 11, 'telefone precisa ter no mínimo 11 caracteres' ),
    name: z.
        string()
        .min( 3, 'nome de usuário precisa ter no mínimo 3 caracteres' )
        .regex( /^[a-z\s\-]+$/i, "apenas letras são permitidos" )
        .transform( name => name.toLowerCase() ),
    email: z.
        string()
        .email()
        .transform( email => email.toLowerCase() ),
    password: z.
        string()
        .min( 6, 'senha precisa ter no mínimo 6 caracteres' ),
} );

type registerNewUserData = z.infer<typeof registerNewUserSchema>

export function useCadastro() {

    const router = useRouter();
    const [error, setError] = React.useState( '' );



    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<registerNewUserData>( { resolver: zodResolver( registerNewUserSchema ) } );


    async function handleRegisterNewUser( data: registerNewUserData ) {

        setError( '' )

        const response = await registerNewUser(
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                password: data.password
            }
        ) as { authorized: boolean, message: string };
        console.log( response )
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