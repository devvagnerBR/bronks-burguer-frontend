import React from "react";
import { twMerge } from "tailwind-merge";



interface ButtonContentProps extends React.ComponentProps<"span"> {
    text: string,
    className?: string
}


export function ButtonContent( { text, className }: ButtonContentProps ) {
    return (
        <span className={twMerge( "", className )}>{text}</span>
    );
}