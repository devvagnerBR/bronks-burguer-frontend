import type { Metadata } from "next";
import "./globals.css";
import { Truculenta } from 'next/font/google'

const truculenta = Truculenta( {
  weight: ['300', '500', '600', '900'],
  subsets: ['latin'],
  variable: '--font-truculenta',
} )

export const metadata: Metadata = {
  title: "Bronks Burguer | Delivery",
  description: "Peça seu lanche favorito sem sair de casa!",
};

export default function RootLayout( { children, }: Readonly<{ children: React.ReactNode; }> ) {
  return (
    <html lang="pt-BR" >
      <body className={` ${truculenta.variable} `}>
        {children}
      </body>
    </html>
  );
}
