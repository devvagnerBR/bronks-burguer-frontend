import React from "react";
import { twMerge } from "tailwind-merge";



interface ButtonContentProps extends React.ComponentProps<"button"> {
    text: string,
    className?: string
}


export function ButtonContent( { text, className }: ButtonContentProps ) {
    return (
        <button className={twMerge( "", className )}>{text}</button>
    );
}