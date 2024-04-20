'use client'

import { Button } from "@/src/components/button";
import Title from "@/src/components/title";
import { useCheckout } from "@/src/hooks/use-checkout";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";


import { useRouter } from "next/navigation";
import React from "react";

export default function CheckoutPage() {

    const router = useRouter();
    const { register, handleSubmit, handleCreateOrder } = useCheckout();

    return (
        <form onSubmit={handleSubmit( handleCreateOrder )} className="max-w-[1280px] m-auto w-full min-h-screen mt-8">
            <div className="flex items-center gap-4">
                <CaretLeft onClick={() => router.back()} weight="bold" size={48} className="cursor-pointer transition-all hover:scale-110" />
                <Title text="SEUS DADOS" />
            </div>

            <section className="mt-4 gap-4 flex max-md:flex-col w-full items-center justify-center max-xl:px-4">

                <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                    Seu nome:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "name" )}
                        required id="name"
                        type="name"
                    />
                </label>
                <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                    Seu telefone:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "phone" )}
                        required id="name"
                        type="name"
                    />
                </label>
            </section>

            <h1 className="text-[64px] font-black uppercase mt-8 max-xl:pl-4 max-xsm:text-center max-xsm:pl-0 max-xsm:text-[48px]">ENDEREÇO DE ENTREGA</h1>

            <section className="mt-4 gap-4 flex max-md:flex-col w-full items-center justify-center max-xl:px-4">

                <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                    Seu CEP:
                    <input
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "cep" )}
                        maxLength={8}
                        required
                        id="name"
                        type="name"
                    />
                </label>
                <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                    Seu Bairro:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "neighborhood" )}
                        required
                        id="name"
                        type="name"
                    />
                </label>
            </section>

            <section className="gap-4 flex max-md:flex-col w-full items-center justify-center max-xl:px-4">

                <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                    Rua:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "street" )}
                        required
                        id="name"
                        type="name"
                    />
                </label>
                <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                    Cidade:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "city" )}
                        required
                        id="name"
                        type="name"
                    />
                </label>
            </section>
            <section className="gap-4 flex max-md:flex-col w-full items-center justify-start max-xl:px-4">

                <label htmlFor="name" className="text-lg font-semibold w-2/4 max-md:w-full flex flex-col">
                    Complemento:
                    <input
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "complement" )}
                        required
                        id="name"
                        type="name"
                    />
                </label>
            </section>
            <h1 className="text-[64px] font-black uppercase mt-8 max-xl:pl-4 max-xsm:text-center max-xsm:pl-0 max-xsm:text-[48px]">FORMA DE PAGAMENTO</h1>

            <section className="mt-4 gap-4 flex max-md:flex-col w-full items-center justify-start max-xl:px-4">

                <label htmlFor="name" className="text-lg w-2/4 font-semibold max-md:w-full flex flex-col">
                    Forma de pagamento:
                    <select
                        required
                        {...register( "paymentMethod" )}
                        className="h-[72px] cursor-pointer rounded-[20px] w-full text-[22px] max-sm:text-[18px]  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-marrom font-light"
                        id="name">
                        <option value="CREDIT_ON_DELIVERY">Cartão de crédito (Pagamento na entrega)</option>
                        <option value="DEBIT_ON_DELIVERY">Cartão de débito (Pagamento na entrega)</option>
                        <option value="MONEY">Dinheiro</option>
                        <option value="PIX">PIX</option>
                    </select>
                </label>

                <Button.ButtonWrapper
                    type="submit"
                    onClick={handleSubmit( handleCreateOrder )}
                    className="mb-[5px] max-xl:mb-0 max-md:w-full bg-verde">
                    <Button.Content text="ENVIAR PEDIDO" />
                    <Button.Icon icon={ArrowRight} />
                </Button.ButtonWrapper>
            </section>

        </form>
    );
}
