import Image from "next/image";

export default async function BannerHomepage() {

    return (
        <div className="bg-banner w-full mt-16 flex flex-col items-center justify-center relative bg-center bg-no-repeat h-[420px] max-md:h-[160px] overflow-hidden ">

            <Image
                className="absolute  bottom-[-20px] left-[-60px] max-md:hidden"
                src="/burguers/burguer-l-b.png"
                width={200}
                height={370}
                quality={100}
                style={{ width: 'auto', height: 'auto' }}
                alt="top-left" />

            <Image
                className="absolute  top-[120px] right-[-120px] max-md:hidden"
                src="/burguers/burguer-r-b.png"
                width={330}
                height={370}
                quality={100}
                style={{ width: 'auto', height: 'auto' }}
                alt="bottom-left-burguer deco" />


            <div className="w-full text-center h-full  max-xl:pt-[90px] pt-[140px]  max-md:pt-5  max-xl:max-w-[600px] max-lg:max-w-[400px] max-sm:pt-[24px]  max-sm:max-w-[370px]">
                <h1 className="text-[88px] inline-block text-branco font-black max-lg:text-[60px] max-sm:text-[48px] ">A ENTREGA MAIS RÁPIDA DA CIDADE!</h1>
            </div>
        </div>

    );
}