import type { Metadata } from "next";
import "../globals.css";
import { Truculenta } from 'next/font/google'
import { UserContextProvider } from "../../context/user-context";
import { User, getProfile } from "@/src/actions/get-profile";
import { ReactQueryClientProvider } from "@/src/providers/react-query-provider";


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

    <ReactQueryClientProvider>
      <html lang="pt-BR" >
        <body className={` ${truculenta.variable} bg-creme-300`}>
          <UserContextProvider user={user}>
            {children}
          </UserContextProvider>
        </body>
      </html >
    </ReactQueryClientProvider>

  );
}
