'use client'

import React from "react"

export function getPageWidth() {
    const [size, setSize] = React.useState( 0 );

    React.useEffect( () => {
        const handleResize = () => {
            setSize( window.innerWidth );
        };

        window.addEventListener( 'resize', handleResize );

        handleResize();

        return () => {
            window.removeEventListener( 'resize', handleResize );
        };
    }, [] );

    return { size };
}
