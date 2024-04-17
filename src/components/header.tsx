import Image from "next/image";
import Link from "next/link";
import { User, getProfile } from "../actions/get-profile";

export default async function Header() {

    const user = await getProfile() as User

    return (
        <div className="flex w-full max-xl:px-2 mt-[60px] max-sm:flex-col max-sm:items-center max-sm:justify-center    justify-between  max-w-[1280px] m-auto ">


            <Link href="/">
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
                <a className="text-[22px] font-black cursor-pointer">CARDÁPIO</a>
                {user.username ?
                    <Link href="/perfil" className="text-[22px] font-black text-vermelho cursor-pointer uppercase">@{user.username}</Link> :
                    <Link href="/entrar" className="text-[22px] font-black text-vermelho cursor-pointer">ENTRAR</Link>}
            </div>
        </div>
    );
}
