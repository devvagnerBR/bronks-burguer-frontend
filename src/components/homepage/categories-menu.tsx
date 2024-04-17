'use client'

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoriesMenu() {

    const query = useSearchParams();
    let busca = query.get( 'categoria' );

    if ( busca === 'undefined' || busca === null ) {
        busca = 'lanches'
    }

    const isLanches = busca === 'lanches'
    const isBebidas = busca === 'bebidas'
    const isBatatas = busca === 'batatas'

    return (
        <div className="mt-8 flex gap-4  w-full max-w-[1280px] m-auto items-center justify-center">

  
            <Link scroll={false} href="/?categoria=lanches" className={`group hover:shadow-hover  max-md:max-w-[80px] cursor-pointer ${isLanches && 'bg-vermelho shadow-hover'}   hover:shadow-marrom transition-all flex items-center justify-center gap-2 w-full max-w-[248px] hover:bg-vermelho shadow-marrom h-[72px] font-black  uppercase text-text-btn hover:text-branco max-sm:px-3 px-6 py-1 rounded-[20px] border-2 border-marrom`}>
                <Image
                    src='/icons-category/svg/burguer.svg'
                    alt='seta'
                    width={45}
                    height={30}
                    quality={100}
                    style={{ width: 'auto', height: 'auto' }}
                />
                <p className={`max-md:hidden font-black  uppercase text-[26px] group-hover:text-branco ${isLanches && 'text-branco'}`}>LANCHES</p>
            </Link>

            <Link scroll={false} href="/?categoria=bebidas" className={`group hover:shadow-hover max-md:max-w-[80px] cursor-pointer ${isBebidas && 'bg-vermelho shadow-hover'}  hover:shadow-marrom transition-all flex items-center justify-center gap-2 w-full max-w-[248px] hover:bg-vermelho shadow-marrom h-[72px] font-black  uppercase text-text-btn hover:text-branco max-sm:px-3 px-6 py-1 rounded-[20px] border-2 border-marrom`}>
                <Image
                    className="w-3"
                    src='/icons-category/svg/refrigerante.svg'
                    alt='seta'
                    width={100}
                    height={100}
                    quality={100}
                />

                <p className={`max-md:hidden font-black  uppercase text-[26px] group-hover:text-branco ${isBebidas && 'text-branco'}`}>BEBIDAS</p>
            </Link>

            <Link scroll={false} href="/?categoria=batatas" className={`group hover:shadow-hover max-md:max-w-[80px] cursor-pointer ${isBatatas && 'bg-vermelho shadow-hover'}  hover:shadow-marrom transition-all flex items-center justify-center gap-2 w-full max-w-[248px] hover:bg-vermelho shadow-marrom h-[72px] font-black  uppercase text-text-btn hover:text-branco max-sm:px-3 px-6 py-1 rounded-[20px] border-2 border-marrom`}>
                <Image
                    src='/icons-category/svg/batata.svg'
                    alt='seta'
                    width={45}
                    height={30}
                    quality={100}
                    style={{ width: 'auto', height: 'auto' }}
                />
                <p className={`max-md:hidden font-black  uppercase text-[26px] group-hover:text-branco ${isBatatas && 'text-branco'}`}>BATATAS</p>
            </Link>
        </div >
    );
}