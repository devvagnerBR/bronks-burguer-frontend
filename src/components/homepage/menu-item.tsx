'use client'


import { addToCart } from "@/src/actions/cart/add-to-cart";
import { Product } from "@/src/actions/get-products";
import Image from "next/image";
import { twMerge } from 'tailwind-merge';

import { addItemToCartNotificationHome } from "@/src/libs/react-hot-toasts";

export type MenuItemsProps = React.ComponentProps<'div'> & {
    product: Product;
    className?: string;
}


export function MenuItem( { product, className }: MenuItemsProps ) {

    let productImage = ''
    switch ( product.category ) {
        case 'lanches':
            productImage = '/images-products/1.png'
            break;
        case 'bebidas':
            productImage = '/images-products/coca-cola.png'
            break;
        case 'batatas':
            productImage = '/images-products/batata.png'
            break;
        default:
            productImage = '/images-products/1.png'
            break;
    }


    async function handleAddToCart( product: Product ) {
        await addToCart( product.id )
        addItemToCartNotificationHome( product.name )
    }

    return (
        <div
            className={twMerge( " w-full max-w-[308px]  min-h-[380px] group hover:shadow-hover  cursor-pointer border-2 border-marrom flex flex-col items-center justify-center rounded-[20px]  relative overflow-hidden", className )}>

            <div className="w-full  h-full flex flex-col items-start justify-center bg-blue-600">
                <div className="h-[120px]  absolute top-0 bg-vermelho w-full flex items-center justify-center ">

                    <Image
                        className="w-fit min-h-[20px] h-[140px] max-h-[150px] min-w-[70px] shrink-0 group-hover:scale-105 transition-all duration-500 ease-out absolute top-[17px]"
                        src={productImage}
                        alt={product.name}
                        style={{ width: 'auto', height: '130px' }}
                        width={200}
                        height={0}
                        quality={100}
                    />
                </div>

                <section className="absolute  bottom-[-10px] w-full h-fit  flex flex-col items-center justify-center max-sm:px-2">

                    <h4 className="text-[34px] uppercase font-black ">{product.name}</h4>
                    <p className="text-base font-semibold text-center text-vermelho pt-2  items-center flex  justify-center">{product?.description}</p>
                    <sub className="uppercase text-[32px] pt-2 font-black">rs<span className="text-[64px] font-black">{product.price}</span></sub>

                    <button
                        onClick={() => handleAddToCart( product )}
                        className="hover:shadow-hover h-[70px]    transition-all flex items-center justify-center w-full min-w-[326px]  shadow-marrom pb-2 mt-4  font-black text-branco uppercase text-[22px] bg-vermelho  rounded-br-[20px] rounded-bl-[20px] border-t-[2.8px] border-marrom">
                        ADICIONAR AO CARRINHO
                    </button>
                </section>

            </div>
        </div>
    );
}