'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function PaginationMenu( { count }: { count: number } ) {

    const query = useSearchParams();
    let page = Number( query.get( 'p' ) ) ?? 1;

    const take = 3;
    const totalPages = Math.ceil( count / take );

    if ( count === 0 ) return <p>Você ainda não fez nenhum pedido 🥹</p>
    if ( totalPages === 1 ) return null
    return (
        <div className="flex gap-4 w-full max-w-[1250px]">

            {Array.from( { length: totalPages }, ( _, index ) => {
                return <Link
                    href={`/perfil/pedidos?p=${index + 1}`}
                    className={`font-black p-2 px-4 border border-marrom/40 cursor-pointer rounded-md ${page === index + 1 && 'bg-vermelho/80 text-branco'} `}
                    key={index}>
                    {index + 1}
                </Link>
            } )}

        </div>
    );
}