'use client'

import { twMerge } from "tailwind-merge";

interface TitleProps extends React.ComponentProps<"h1"> {
    text: string
    className?: string,

}
export default function Title( { text, className }: TitleProps ) {

    return (
        <h1 className={twMerge( "text-[64px] font-black uppercase max-xsm:text-[48px] mt-16", className )}>{text}</h1>
    );
}