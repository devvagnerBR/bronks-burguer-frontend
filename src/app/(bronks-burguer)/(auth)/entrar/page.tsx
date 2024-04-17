'use client';

import Link from "next/link";
import React from "react";
import { useEntrar } from "@/src/hooks/use-entrar-page";

export default function EntrarPage() {

    const {
        error,
        register,
        handleSubmit,
        handleLogin,
        isSubmitting
    } = useEntrar();


    return (
        <main className="flex flex-col bg-creme-300 w-full max-w-[460px]  max-lg:items-center max-lg:justify-center  max-lg:pt-0 pt-16 max-lg:max-w-none p-4 border">
            <div className="max-lg:flex max-lg:items-center max-lg:flex-col">
                <h1 className="text-[80px] font-black">Entrar</h1>
                <h1 className="text-[39px] font-black">Bem vindo de volta!</h1>
            </div>
            <form
                onSubmit={handleSubmit( handleLogin )}
                className="mt-16  max-w-[460px] flex flex-col items-center justify-center gap-4 w-full">
                <label
                    htmlFor="email"
                    className="text-lg font-semibold w-full">
                    Email:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        required id="email"
                        {...register( "email" )}
                        type="email"
                    />
                </label>
                <label htmlFor="password" className="text-lg font-semibold w-full">
                    Senha:
                    <input
                        autoComplete="off"
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "password" )}
                        required id="password"
                        type="password"
                    />
                </label>
                <p className="w-full text-end mt-1 h-4 text-red-700">{error && error}</p>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[72px] disabled:bg-vermelho/60 text-branco text-2xl font-black w-full max-w-[460px] rounded-[20px] border-marrom/60 border-[1.8px] bg-vermelho hover:shadow-hover  shadow-marrom">
                    {isSubmitting ? 'ENTRANDO...' : 'ENTRAR'}
                </button>

                <p className="w-full text-end font-semibold text-marrom text-lg">Ainda não tem uma conta? <Link href="/cadastro"><span className="font-bold">Cadastre-se</span></Link> </p>

            </form>
        </main>
    );
}