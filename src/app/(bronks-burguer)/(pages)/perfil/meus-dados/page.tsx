
'use client'
import { Button } from "@/src/components/button";
import { useMeusDados } from "@/src/hooks/use-meus-dados-page";
import { Suspense } from "react";


export default function MeusDadosPage() {

    const { register, handleSubmit, handleUpdateProfile, isSubmitting } = useMeusDados();

    return (
        <Suspense fallback="Carregando...">
            <form onSubmit={handleSubmit( handleUpdateProfile )} className="max-w-[1280px] animeLeft  m-auto w-full min-h-screen mt-8 flex flex-col gap-4">
                <div className="flex gap-4 max-md:flex-col max-xl:px-4">

                    <label htmlFor="name" className="text-lg font-semibold w-full flex flex-col">
                        Seu nome:
                        <input

                            className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                            {...register( "name" )}
                            required
                            id="name"
                            type="name"
                        />
                    </label>
                    <label htmlFor="username" className="text-lg font-semibold w-full flex flex-col">
                        Nome de usuário:
                        <input
                            className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                            {...register( "username" )}
                            required
                            id="username"
                            type="text"
                        />
                    </label>
                </div>
                <div className="flex gap-4 max-md:flex-col max-xl:px-4">
                    <label htmlFor="email" className="text-lg font-semibold w-full flex flex-col">
                        Seu email:
                        <input
                            disabled
                            className="h-[72px] disabled:text-preto/60 rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                            {...register( "email" )}
                            required
                            id="email"
                            type="email"
                        />
                    </label>
                    <label htmlFor="phone" className="text-lg font-semibold w-full flex flex-col">
                        Telefone(WhatsApp):
                        <input
                            className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                            {...register( "phone" )}
                            required
                            id="phone"
                            type="text"
                        />
                    </label>
                </div>
                <div className="w-full flex  justify-end">
                    <Button.ButtonWrapper
                        onClick={handleSubmit( handleUpdateProfile )}
                        disabled={isSubmitting}
                        type="submit"
                        className="mt-7 group bg-verde disabled:bg-verde/60 disabled:border-marrom/40 disabled:text-marrom/40">
                        {isSubmitting ? <Button.Content className="text-marrom/50" text="Salvando alterações..." /> : <Button.Content className="" text="Salvar" />}
                    </Button.ButtonWrapper>
                </div>
            </form>
        </Suspense>
    );
}

//  HOW  TO USE GROUP IN TAILWIND CSS
