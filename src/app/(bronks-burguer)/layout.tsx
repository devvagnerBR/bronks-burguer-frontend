import "../globals.css";
import type { Metadata } from "next";
import { Truculenta } from 'next/font/google';
import { UserContextProvider } from "../../context/user-context";
import { User, getProfile } from "@/src/actions/get-profile";
import { Providers } from "@/src/providers/react-query-provider";
import { Toaster } from "react-hot-toast";

const truculenta = Truculenta( {
  weight: ['300', '500', '600', '900'],
  subsets: ['latin'],
  variable: '--font-truculenta',
} )

export const metadata: Metadata = {
  title: "Bronks Burguer | Delivery",
  description: "Peça seu lanche favorito sem sair de casa!",
};

export default async function RootLayout( { children, }: Readonly<{ children: React.ReactNode; }> ) {

  const user = await getProfile() as User;

  return (

    <Providers>

      <html lang="pt-BR" >
        <body className={` ${truculenta.variable} bg-creme-300`}>
          <UserContextProvider user={user}>
            {children}
          </UserContextProvider>
        </body>
      </html >
    </Providers>

  );
}
