import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Bronks Burguer | Delivery",
    description: "Peça seu lanche favorito sem sair de casa!",
};

export default function AuthLayout( { children, }: { children: React.ReactNode; } ) {
    return (
        <div className=" w-screen h-screen flex">
            <div className="bg-vermelho flex-1 max-lg:hidden">
                <h1>layout do auth</h1>
            </div>
            {children}
        </div>
    );
}
