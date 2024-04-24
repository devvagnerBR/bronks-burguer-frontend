import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticate } from "../actions/auth/authenticate";
import { revalidateTagAction } from "../utils/revalidate";


const loginSchema = z.object( {
    email: z.string().email().transform( email => email.toLowerCase() ),
    password: z.string().min( 6 ),
} );

type loginData = z.infer<typeof loginSchema>

export function useEntrar() {

    const router = useRouter();
    const [error, setError] = React.useState( '' );

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<loginData>( { resolver: zodResolver( loginSchema ) } );


    async function handleLogin( body: loginData ) {


        setError( '' )

        const res = await authenticate( { email: body.email, password: body.password } ) as { authorized: boolean, message: string };

        if ( !res.authorized ) setError( res.message );
        else {
            await revalidateTagAction('profile');
            router.push( '/' )
        }

    }

    return {
        error,
        register,
        handleSubmit,
        handleLogin,
        isSubmitting
    }
}