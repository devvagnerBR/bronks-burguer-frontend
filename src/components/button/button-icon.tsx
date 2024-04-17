import { IconProps } from "@phosphor-icons/react";
import React from "react";
import { twMerge } from "tailwind-merge";



interface ButtonProps extends React.ComponentProps<"div"> {
    icon: React.ComponentType<IconProps>
    className?: string
}

export function ButtonIcon( { icon: Icon, className }: ButtonProps ) {
    return (
        <Icon size={32} className={twMerge( "", className )} />
    );
}