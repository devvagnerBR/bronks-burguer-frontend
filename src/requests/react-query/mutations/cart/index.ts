import { authenticate, loginUserInterface } from "@/src/actions/auth/authenticate";
import { addToCart } from "@/src/actions/cart/add-to-cart";
import { removeToCart } from "@/src/actions/cart/remove-to-cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function cartMutations() {

    const queryClient = useQueryClient();


    const { mutateAsync: handleAddToCart } = useMutation( {

        mutationFn: ( id: string ) => addToCart( id ),
        onSuccess( data ) {

            queryClient.invalidateQueries( { queryKey: ['@req.cart'] } );
            console.log( data )

        },

        onError: () => console.log( 'error' ),

    } )

    const { mutateAsync: handleRemoveToCart } = useMutation( {
        mutationFn: ( id: string ) => removeToCart( id ),
        onSuccess( data ) {
            queryClient.invalidateQueries( { queryKey: ['@req.cart'] } );
            console.log( data )

        },
        onError: () => console.log( 'error' ),

    } )


    return {
        handleAddToCart,
        handleRemoveToCart,
    }
}