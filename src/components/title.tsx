'use client'

export default function Title( { text }: { text: string } ) {

    return (
        <h1 className="text-[64px] font-black uppercase max-xsm:text-[48px] mt-16">{text}</h1>
    );
}