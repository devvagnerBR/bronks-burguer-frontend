'use client'

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from '../context/user-context';
import React from "react";
import { getCEP } from "../actions/checkout/get-cep";
import { postOrder } from "../actions/checkout/post-order";
import { revalidateTagAction } from "../utils/revalidate";
import { delay } from "../utils/delay";
import { useRouter } from "next/navigation";



const checkoutSchema = z.object( {
    name: z.string( { invalid_type_error: "name", description: "234243" } ).min( 3, 'nome precisa ter no mínimo 3 caracteres' ),
    phone: z.string( { invalid_type_error: "phone", description: "234243" } ).min( 11, 'telefone precisa ter no mínimo 11 caracteres' ),
    cep: z.string( { invalid_type_error: "cep", description: "234243" } ).min( 8, 'cep precisa ter no mínimo 8 caracteres' ),
    street: z.string( { invalid_type_error: "street", description: "234243" } ).min( 3, 'rua precisa ter no mínimo 3 caracteres' ),
    neighborhood: z.string( { invalid_type_error: "neighborhood", description: "234243" } ).min( 3, 'bairro precisa ter no mínimo 3 caracteres' ),
    city: z.string( { invalid_type_error: "city", description: "234243" } ).min( 3, 'cidade precisa ter no mínimo 3 caracteres' ),
    state: z.string( { invalid_type_error: "state", description: "234243" } ).min( 2, 'estado precisa ter no mínimo 2 caracteres' ),
    complement: z.string( { invalid_type_error: "complement", description: "234243" } ).min( 3, 'complemento precisa ter no mínimo 3 caracteres' ),
    paymentMethod: z.enum( ['CREDIT_ON_DELIVERY', 'DEBIT_ON_DELIVERY', 'PIX', 'MONEY'] )
} );

type checkoutData = z.infer<typeof checkoutSchema>

export function useCheckout() {

    const { user } = useUserContext();

    const router = useRouter();

    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<checkoutData>( {
        resolver: zodResolver( checkoutSchema ),
        defaultValues: {
            name: user?.name,
            phone: user?.phone,
            cep: user?.address?.cep,
            street: user?.address?.street,
            neighborhood: user?.address?.neighborhood,
            city: user?.address?.city,
            state: user?.address?.state,
            complement: user?.address?.complement,
        }
    } );

    async function handleCreateOrder( data: any ) {

        await delay( 1500 );
        await postOrder( data )
        await revalidateTagAction( '@req.cart' )
        router.push( '/perfil/pedidos?p=1' )

    }



    React.useEffect( () => {

        setTimeout( () => {


            if ( watch( 'cep' ).length < 8 ) return

            async function fetch() {

                const response = await getCEP( watch( 'cep' ) )
                const data = response

                if ( data.erro ) return;
                setValue( 'street', data.logradouro )
                setValue( 'neighborhood', data.bairro )
                setValue( 'city', data.localidade )
                setValue( 'state', data.uf )
            }


            fetch()

        }, 500 )

    }, [watch( 'cep' )] )






    return { register, handleSubmit, handleCreateOrder, errors, watch }

}