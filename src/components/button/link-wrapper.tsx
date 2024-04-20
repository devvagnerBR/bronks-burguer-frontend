import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LinkWrapperProps extends React.ComponentProps<typeof Link> {
    children: React.ReactNode
    className?: string,
    onClick?: () => void

}

export function LinkWrapper( { children, href, className, onClick }: LinkWrapperProps ) {

    return (
        <Link
            href={href}
            onClick={onClick}
            className={twMerge( " transition-all flex items-center justify-center gap-2 w-full max-w-[326px] max-md:max-w-none  shadow-marrom  mt-8 max-md:mt-2 font-black text-marrom hover:shadow-hover uppercase text-[24px] bg-branco h-[72px] rounded-[20px] border-2 border-marrom", className )}>
            {children}
        </Link>
    )
}
