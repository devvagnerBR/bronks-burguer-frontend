'use client'

import React from "react"




interface UserContextInterface {

    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;



}

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    phone: string;
    address: {
        id: string;
        cep: string;
        street: string;
        neighborhood: string;
        city: string;
        state: string;
        complement: string;
        user_id: string;
    };
}

const UserContext = React.createContext<UserContextInterface | null>( null )

export function UserContextProvider( { children, user}: { children: React.ReactNode, user: User | null } ) {

    const [userState, setUserState] = React.useState<User | null>( user )
    return (
        <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    const context = React.useContext( UserContext );
    if ( context === null ) {
        throw new Error( 'useUserContext must be used within a UserContextProvider' )
    }
    return context
}