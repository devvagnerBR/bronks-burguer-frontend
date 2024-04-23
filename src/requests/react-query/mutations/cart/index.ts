import { addToCart } from "@/src/actions/cart/add-to-cart";
import { removeToCart } from "@/src/actions/cart/remove-to-cart";
import { addItemToCartNotification, removeItemFromCartNotification } from "@/src/libs/react-hot-toasts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function cartMutations() {

    const queryClient = useQueryClient();


    const { mutateAsync: handleAddToCart } = useMutation( {

        mutationFn: ( id: string ) => addToCart( id ),
        onSuccess( data ) {
            addItemToCartNotification()
            queryClient.invalidateQueries( { queryKey: ['@req.cart'] } );
            console.log( data )

        },

        onError: () => console.log( 'error' ),

    } )

    const { mutateAsync: handleRemoveToCart } = useMutation( {
        mutationFn: ( id: string ) => removeToCart( id ),
        onSuccess( data ) {
            removeItemFromCartNotification()
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