'use client'
import { Product, getProducts } from "@/src/actions/get-products";
import CategoriesMenu from "./categories-menu";
import { useSearchParams } from "next/navigation";
import { MenuItem } from "./menu-item";
import { getPageWidth } from "@/src/utils/get-page-width";

//phosphor icons
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// tailwind merge
import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";



interface Props {
    cartIsEmpty: boolean;
}

export default function MenuItems( { cartIsEmpty }: Props ) {

    const query = useSearchParams();
    const search = query.get( 'categoria' ) || 'lanches';

    const { size } = getPageWidth()
    const isMobile = size < 969

    const { data } = useQuery( {
        queryKey: ['products'],
        queryFn: async () => await getProducts(),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 60 * 60 // 1 hour 
    } )

    const products = Array.isArray( data ) ? data.filter( ( product: Product ) => product.category === search ) : [];

    return (


        <div className="mt-8  flex  flex-col items-center relative  justify-center overflow-hidden">
            <h1 id="menu" className="text-[64px] font-black">CARDÁPIO</h1>
            <CategoriesMenu />

            {
                isMobile ?
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        width={630}
                        className={twMerge( " ml-4 mt-16 " )}>
                        {products && products.map( ( product: Product ) => <SwiperSlide key={product.id}><MenuItem className="ml-4" product={product} /> </SwiperSlide> )}

                    </Swiper>
                    :
                    <div className="flex   max-w-[1280px] flex-wrap items-center justify-center w-full mt-16 gap-4 ">
                        {products && products.map( ( product: Product ) => <MenuItem key={product.id} product={product} /> )}
                    </div>


            }


            {!cartIsEmpty &&
                <Link href="/carrinho" className=" flex items-center gap-4 justify-center fixed animate-bounce transition-all duration-[4000] min-w-[145px] w-[194px] rounded-tr-[20px] rounded-br-[20px] h-[70px] z-40 left-0 bottom-2 font-black bg-amarelo border-[2.8px]  text-[32px] border-marrom text-marrom">
                    <ShoppingCart weight="fill" />
                    <p className="font-black">CARRINHO</p>
                </Link>
            }

        </div>
    );
}