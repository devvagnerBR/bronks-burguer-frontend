'use client';

import { useCadastro } from "@/src/hooks/use-cadastro-page";
import Link from "next/link";
import React from "react";

export default function CadastroPage() {

    const {
        error,
        errors,
        register,
        handleSubmit,
        isSubmitting,
        handleRegisterNewUser
    } = useCadastro();

    return (
        <main className="flex flex-col bg-creme-300 w-full max-w-[460px]  max-lg:items-center max-lg:justify-center max-lg:max-w-none max-lg:pt-0  mt-2 p-4 border">
            <div className="max-lg:flex max-lg:items-center max-lg:flex-col">
                <h1 className="text-[80px] font-black">Criar conta</h1>
                <h1 className="text-[39px] font-black">Bem vindo!</h1>
            </div>
            <form
                onSubmit={handleSubmit( handleRegisterNewUser )}
                className="mt-8  max-w-[460px] flex flex-col items-center justify-center gap-2 w-full">
                <label
                    htmlFor="name"
                    className="text-lg font-semibold w-full">
                    Nome:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="name"
                        type="text"
                        autoComplete="name"
                        {...register( "name" )}
                    />
                    <p className="w-full text-end mt-1 h-4 text-red-700">{errors?.name && errors?.name.message}</p>
                </label>
                <label
                    htmlFor="phone"
                    className="text-lg font-semibold w-full">
                    Telefone (com DDD):
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="phone"
                        type="text"
                        autoComplete="phone"
                        {...register( "phone" )}
                    />
                    <p className="w-full text-end mt-1 h-4 text-red-700">{errors?.phone && errors?.phone.message}</p>
                </label>
                <label
                    htmlFor="email"
                    className="text-lg font-semibold w-full">
                    Email:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="email"
                        type="email"
                        {...register( "email" )}
                    />
                    <p className="w-full text-end mt-1 h-4 text-red-700">{errors?.email && errors?.email.message}</p>
                </label>
                <label htmlFor="password" className="text-lg font-semibold w-full">
                    Senha:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="password"
                        type="password"
                        {...register( "password" )}
                    />

                    <p className="w-full text-end mt-1 h-4 text-red-700">{errors?.password && errors?.password.message}</p>
                </label>
                <p className="w-full text-end my-2 mt-1 h-4 text-red-700">{error && error}</p>
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="h-[72px] disabled:bg-vermelho/60 text-branco text-2xl font-black w-full max-w-[460px] rounded-[20px] border-marrom/60 border-[1.8px] bg-vermelho hover:shadow-hover  shadow-marrom">
                    {isSubmitting ? 'CRIANDO CONTA...' : 'CRIAR CONTA'}
                </button>

                <p className="w-full text-end font-semibold text-marrom text-lg">Já tem uma conta? <Link href="/entrar"><span className="font-bold">Entrar</span></Link> </p>

            </form>
        </main>
    );
}