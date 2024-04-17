import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Bronks Burguer | Entrar",
    description: "Peça seu lanche favorito sem sair de casa!",
};

export default function AuthLayout( { children, }: { children: React.ReactNode; } ) {
    return (
        <div className=" w-dvw h-dvh flex">
            <div className="bg-vermelho flex items-center justify-center flex-1 max-lg:hidden">
                <h1 className="text-branco">IMAGEM COM O HAMBURGER</h1>
            </div>
            {children}
        </div>
    );
}
