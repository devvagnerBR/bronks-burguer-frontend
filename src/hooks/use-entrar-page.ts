import React from "react";
import { z } from "zod";
import { authMutations } from "../requests/react-query/mutations/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { delay } from "../utils/delay";

const loginSchema = z.object( {
    email: z.string().email().transform( email => email.toLowerCase() ),
    password: z.string().min( 6 ),
} );

type loginData = z.infer<typeof loginSchema>

export function useEntrar() {

    const router = useRouter();
    const [error, setError] = React.useState( '' );
    const { handleAuth } = authMutations();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<loginData>( { resolver: zodResolver( loginSchema ) } );


    async function handleLogin( data: loginData ) {

        setError( '' )

        const response = await handleAuth( data ) as { authorized: boolean, message: string };

        await delay( 1500 );

        if ( !response.authorized ) setError( response.message );
        else router.push( '/' )
    }

    return {
        error,
        register,
        handleSubmit,
        handleLogin,
        isSubmitting
    }
}