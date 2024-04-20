'use client'

import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export const Providers = ( { children }: { children: React.ReactNode } ) => {


    const [queryClient] = React.useState(
        () =>
            new QueryClient( {
                defaultOptions: {
                    queries: {

                        refetchOnWindowFocus: false,
                        refetchOnReconnect: false,

                    },
                },
            } ),
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
