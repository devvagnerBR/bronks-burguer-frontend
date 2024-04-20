import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


interface ButtonWrapperProps extends React.ComponentProps<'button'> {
    children: React.ReactNode
    path?: string,
    className?: string,
    onClick?: () => void
    disabled?: boolean


}

export function ButtonWrapper( { children, className, onClick, disabled }: ButtonWrapperProps ) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={twMerge( "transition-all flex items-center justify-center gap-2 w-full max-w-[326px] max-md:max-w-none  shadow-marrom  mt-8 max-md:mt-2 font-black text-marrom hover:shadow-hover uppercase text-[24px] bg-branco h-[72px] rounded-[20px] border-2 border-marrom", className )}>
            {children}
        </button>
    )
}
