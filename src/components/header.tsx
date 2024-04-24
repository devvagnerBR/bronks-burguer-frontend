import Image from "next/image";
import Link from "next/link";
import { User, getProfile } from "../actions/get-profile";

export default async function Header() {

    const user = await getProfile() as User

    return (
        <div className="flex w-full max-xl:px-2 max-xl:pl-4 mt-[60px] max-sm:flex-col  max-md:items-center max-md:justify-center    justify-between  max-w-[1280px] m-auto ">
            <Link href="/" className="max-md:hidden">
                <Image
                    src="/logos/logo-header.svg"
                    alt="logo bronks burguer"
                    width={203}
                    height={75}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                    quality={100} />
            </Link>
            <div className="flex gap-9 max-sm:mt-8  items-center">
                <Link href="/#menu" className="text-[22px] font-black cursor-pointer">CARDÁPIO</Link>
                {user ? <Link href="/perfil/pedidos?p=1" className="text-[22px] font-black text-vermelho cursor-pointer uppercase">@{user?.username}</Link> :
                    <Link href="/entrar" className="text-[22px] font-black text-vermelho cursor-pointer">ENTRAR</Link>}
            </div>
        </div>
    );
}
