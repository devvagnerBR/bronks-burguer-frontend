import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonWrapperProps extends React.ComponentProps<"button"> {
    children: React.ReactNode
    path?: string,
    className?: string,
    onClick?: () => void
}

export function ButtonWrapper( { children, path, className, onClick }: ButtonWrapperProps ) {

    return (
        <Link
            href={path ?? ''}
            onClick={onClick}
            className={twMerge( "className='hover:shadow-hover  transition-all flex items-center justify-center gap-2 w-full max-w-[326px] max-md:max-w-none  shadow-marrom  mt-8 max-md:mt-2 font-black text-marrom hover:shadow-hover uppercase text-[24px] bg-branco h-[72px] rounded-[20px] border-2 border-marrom", className )}>
            {children}
        </Link>
    )
}
