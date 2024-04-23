'use client'

import { Button } from "@/src/components/button";
import { useEndereco } from "@/src/hooks/use-endereco";


export default function EnderecoPage() {

    const { register, handleSubmit, handleUpdateAddress, isSubmitting, watch } = useEndereco();


    return (
        <form onSubmit={handleSubmit( handleUpdateAddress )} className="max-w-[1280px] animeLeft m-auto w-full min-h-screen mt-8 flex flex-col gap-4">
            <div className='flex gap-4 max-md:flex-col max-xl:px-4'>
                <label htmlFor="cep" className="text-lg font-semibold w-full flex flex-col">
                    CEP:
                    <input
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "cep" )}
                        required
                        id="cep"
                        type="text"
                        maxLength={8}
                    />
                </label>
                <label htmlFor="city" className="text-lg font-semibold w-full flex flex-col">
                    Cidade:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "city" )}
                        required
                        id="city"
                        type="text"
                    />
                </label>
                <label htmlFor="state" className="text-lg max-w-[100px] font-semibold w-full flex flex-col">
                    Estado:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "state" )}
                        required
                        id="state"
                        type="text"
                    />
                </label>
            </div>
            <div className='flex gap-4 max-md:flex-col max-xl:px-4'>

                <label htmlFor="street" className="text-lg font-semibold w-full flex flex-col">
                    Rua:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "street" )}
                        required
                        id="street"
                        type="text"
                    />
                </label>
                <label htmlFor="neighborhood" className="text-lg font-semibold w-full flex flex-col">
                    Bairro:
                    <input
                        disabled
                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "neighborhood" )}
                        required
                        id="neighborhood"
                        type="text"
                    />
                </label>

            </div>
            <div className='flex gap-4 max-md:flex-col max-xl:px-4'>

                <label htmlFor="complement" className="text-lg font-semibold w-full flex flex-col">
                    Complemento:
                    <input

                        className="h-[72px] rounded-[20px] w-full  border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black"
                        {...register( "complement" )}
                        required
                        id="complement"
                        type="text"
                    />
                </label>

                <Button.ButtonWrapper
                    onClick={handleSubmit( handleUpdateAddress )}
                    disabled={isSubmitting}
                    type="submit"
                    className="mt-7 group bg-verde disabled:bg-verde/60 disabled:border-marrom/40 disabled:text-marrom/40">
                    {isSubmitting ? <Button.Content className="text-marrom/50" text="Salvando alterações..." /> : <Button.Content className="" text="Salvar" />}
                </Button.ButtonWrapper>
            </div>
        </form>
    );
}