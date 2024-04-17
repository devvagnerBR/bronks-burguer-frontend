'use client'

import { CartProduct } from "@/src/actions/cart/get-cart";
import { cartMutations } from "@/src/requests/react-query/mutations/cart";

//icons
import { MinusCircle } from '@phosphor-icons/react/MinusCircle'
import { PlusCircle } from '@phosphor-icons/react/PlusCircle'

export interface CartItemProps {
    product: CartProduct
}

export default function CartItem( { product }: CartItemProps ) {

    const { handleAddToCart, handleRemoveToCart } = cartMutations();

    return (
        <div className="flex max-xsm:flex-col  max-xl:px-4 mt-2">

            <div className="flex gap-4 items-center justify-center w-fit">
                <MinusCircle onClick={() => handleRemoveToCart( product.id )} size={39} weight="fill" className="fill-vermelho cursor-pointer " />
                <span className="text-[22px] font-black w-4">{product.quantity}</span>
                <PlusCircle onClick={() => handleAddToCart( product.id )} size={39} weight="fill" className="fill-vermelho cursor-pointer" />
            </div>

            <div className="flex items-center xsm:pl-4  justify-center w-full">

                <div className="flex flex-col items-start justify-center max-xsm:mt-4">
                    <p className="text-[32px] max-xsm:text-[22px] font-black uppercase truncate max-xsm:max-w-[190px] max-md:max-w-[220px]">{product.name}</p>
                    <p className="text-[16px] font-semibold text-vermelho">{product.description}</p>
                </div>

                <p className="flex flex-1 mx-4 border-b border-dashed border-vermelho" />

                <div className="flex items-center justify-center gap-1">
                    <sub className="text-[16px] font-black uppercase text-marrom">rs</sub>
                    <span className="text-[32px] font-black">{product.price.toFixed( 2 )}</span>
                </div>

            </div>
        </div>
    );
}