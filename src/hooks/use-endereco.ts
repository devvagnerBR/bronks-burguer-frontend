'use client'

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from '../context/user-context';
import { revalidateTagAction } from "../utils/revalidate";
import { delay } from "../utils/delay";
import { updateAddress } from "../actions/update-address";
import { getCEP } from "../actions/checkout/get-cep";
import React from "react";



const enderecoSchema = z.object( {
    cep: z.string().max( 8 ),
    street: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    complement: z.string().optional(),
} );

type enderecoData = z.infer<typeof enderecoSchema>

export function useEndereco() {

    const { user } = useUserContext();


    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<enderecoData>( {
        resolver: zodResolver( enderecoSchema ),
        defaultValues: {
            cep: user?.address?.cep,
            street: user?.address?.street,
            neighborhood: user?.address?.neighborhood,
            city: user?.address?.city,
            state: user?.address?.state,
            complement: user?.address?.complement,
        }
    } );

    async function handleUpdateAddress( data: {
        cep?: string,
        city?: string,
        state?: string,
        street?: string,
        neighborhood?: string,
        complement?: string
    } ) {

        // await delay( 1000 );

        const updateAddressData: {
            cep?: string,
            street?: string,
            neighborhood?: string,
            city?: string,
            state?: string,
            complement?: string
        } = {}

        if ( user && user.address ) {

            for ( const key in {
                cep: user.address.cep,
                street: user.address.street,
                neighborhood: user.address.neighborhood,
                city: user.address.city,
                state: user.address.state,
                complement: user.address.complement
            } ) {
                if ( user.address[key as keyof typeof user.address] !== data[key as keyof typeof data] ) {
                    updateAddressData[key as keyof typeof updateAddressData] = data[key as keyof typeof data];
                } else {
                    updateAddressData[key as keyof typeof updateAddressData] = undefined;
                }
            }


            const res = await updateAddress( updateAddressData );
      
            await revalidateTagAction( 'profile' );


        } else {

            const res = await updateAddress(
                {
                    cep: data.cep,
                    street: data.street,
                    neighborhood: data.neighborhood,
                    city: data.city,
                    state: data.state,
                    complement: data.complement
                }
            );

        
            await revalidateTagAction( 'profile' );

        }


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


        }, 100 )


    }, [watch( 'cep' )] )

    return { register, handleSubmit, handleUpdateAddress, errors, watch, isSubmitting }

}
