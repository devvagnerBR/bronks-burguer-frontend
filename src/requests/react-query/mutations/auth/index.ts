import { authenticate, loginUserInterface } from "@/src/actions/auth/authenticate";
import { registerNewUser, registerNewUserInterface } from "@/src/actions/auth/register-new-user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function authMutations() {

    const queryClient = useQueryClient();

    const { mutateAsync: handleAuth } = useMutation( {
        mutationFn: ( { email, password }: loginUserInterface ) => authenticate( { email, password } ),
        onSuccess( data ) {
            console.log( data )
        },
        onError: ( data ) => console.log( console.log( data ) ),

    } )

    const { mutateAsync: handleRegister } = useMutation( {

        mutationFn: ( { username, email, password }: registerNewUserInterface ) => registerNewUser( { username, email, password } ),
        onSuccess( data ) {
            console.log( data )
            queryClient.invalidateQueries( { queryKey: ['@req.profile'] } );
        },
        onError: ( data ) => console.log( console.log( data ) ),
    } )



    return {
        handleAuth,
        handleRegister
    }
}