import { Cart, getCart } from "@/src/actions/cart/get-cart";
import { Button } from "@/src/components/button";
import CartItems from "@/src/components/cart/items";

// icons
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";


export default async function CarrinhoPage() {

    const cart = await getCart() as Cart;


    return (


        <div className="max-w-[1280px] m-auto w-full animeLeft mt-8">

            <header className="border-b-[0.5px] max-md:flex max-md:flex-col max-md:items-center border-dashed border-marrom/40 pb-2 max-xl:px-4 ">

                <h1 className="text-[64px] font-black uppercase">Carrinho</h1>

                <div className="flex w-full justify-between max-md:items-center items-end max-md:flex-col">

                    <p className="text-[24px] max-md:text-[18px] font-light">Tempo médio para a entrega: <span className="font-semibold">60min</span></p>
                    <Button.LinkWrapper className="" href="/#menu" >
                        <Button.Icon icon={ArrowLeft} />
                        <Button.Content text="CONTINUAR COMPRANDO" />
                    </Button.LinkWrapper>
                </div>

            </header>

            <CartItems cart={cart} />
        </div>

    );
}