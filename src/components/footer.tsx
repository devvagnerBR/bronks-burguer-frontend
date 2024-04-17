import Image from 'next/image';

export default async function Footer() {

    return (
        <footer className="bg-vermelho mt-16 bottom-0 w-full relative left-0 lg:pl-8">
            <div className='w-full max-w-[1280px] m-auto py-16'>

                <div className='max-lg:items-center  max-lg:justify-center max-lg:flex'>
                    <Image
                        className=''
                        src="/logos/logo-footer.svg"
                        alt="logo footer"
                        width={182}
                        height={49}
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                        quality={100} />
                </div>

                <div className='mt-16 flex max-lg:flex-col gap-16 max-xl:gap-8 items-start justify-start'>

                    <div className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center w-full'>
                        <h1 className='text-[64px] max-sm:text-[48px] font-black uppercase text-branco max-md:text-subtitle'>informações</h1>
                        <p className='mt-8 text-branco font-medium max-w-[360px] text-[18px] max-md:text-center max-md:text-[18px] max-md:max-w-[330px]'>Rua Oliver de Andrade. Nº49 Rio de Janeiro - Brasil 28890-400</p>
                        <p className='text-branco font-medium mt-4 text-[18px]'>www.bronksburguer.com.br</p>
                        <p className='text-branco font-medium mt-4 text-[18px]'>(22) 99947-9999</p>
                    </div>
                    <div className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center w-full'>
                        <h1 className='text-[64px] max-sm:text-[48px] font-black uppercase text-branco max-md:text-subtitle'>REDE SOCIAL</h1>
                        <div className='mt-8 flex w-full items-start justify-start gap-4 max-lg:items-center max-lg:justify-center'>
                            <Image
                                src="/social-icons/facebook.svg"
                                alt="icon facebook"
                                width="20"
                                height="20"
                                style={{ width: 'auto', height: 'auto' }} className='cursor-pointer' />
                            <Image
                                src="/social-icons/instagram.svg"
                                alt="icon instagram"
                                width="20"
                                height="20"
                                style={{ width: 'auto', height: 'auto' }}
                                className='cursor-pointer' />
                            <Image
                                src="/social-icons/whatsApp.svg"
                                alt="icon whatsApp"
                                width="20"
                                height="20"
                                style={{ width: 'auto', height: 'auto' }}
                                className='cursor-pointer' />
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}