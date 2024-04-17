import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Bronks Burguer | Início",
    description: "Peça seu lanche favorito sem sair de casa!",
};

export default function PagesLayout( { children, }: { children: React.ReactNode; } ) {
    return (
        <div className="">
            <Header />
            {children}
            <Footer/>
        </div>
    );
}
