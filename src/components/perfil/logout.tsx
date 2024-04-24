'use client'

import logout from "@/src/actions/auth/logout";


export default function Logout() {


    async function handleLogout() {
        await logout();
    }

    return (
        <button
            onClick={handleLogout}
            className="mt-16 border uppercase p-4 rounded-md text-marrom/60 font-black border-vermelho/60 cursor-pointer hover:bg-vermelho/70 hover:text-branco transition-all">
            Desconectar
        </button>
    );
}