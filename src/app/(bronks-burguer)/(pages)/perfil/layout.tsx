import MenuProfile from "@/src/components/perfil/menu-profile";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Bronks Burguer | Perfil",
    description: "Peça seu lanche favorito sem sair de casa!",
};

export default function profileLayout( { children, }: { children: React.ReactNode; } ) {

    return (
        <div className="">
            <MenuProfile />
            {children}
        </div>
    );
}
