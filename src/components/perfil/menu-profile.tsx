'use client'


import { usePathname } from "next/navigation";
import { Button } from "../button"

export default function MenuProfile() {

    const pathName = usePathname();
    const navLinks = [
        {
            id: 1,
            text: 'Meus Pedidos',
            path: '/perfil/pedidos?p=1'
        },
        {
            id: 2,
            text: 'Meus Dados',
            path: '/perfil/meus-dados'
        },
        {
            id: 3,
            text: 'Meu Endereço',
            path: '/perfil/endereco'
        }

    ]


    const isActive = ( path: string ) => path.includes( pathName )

    return (
        <nav className="flex pb-6 mb-8 max-w-[1280px] max-[575px]:gap-2 gap-4 m-auto max-xl:pl-4 max-md:items-center max-md:justify-center max-md:pl-0 mt-16">

            {navLinks.map( link => (
                <Button.LinkWrapper prefetch href={link.path} key={link.id} className={`${isActive( link.path ) && 'bg-vermelho  shadow-hover text-branco'}  w-[170px] max-[575px]:text-[16px] max-[575px]:w-fit max-[575px]:px-2 max-[575px]:h-14`}>
                    <Button.Content text={link.text} className={`${isActive( link.path ) && 'text-branco'} `} />
                </Button.LinkWrapper>
            ) )}

        </nav>
    );
}