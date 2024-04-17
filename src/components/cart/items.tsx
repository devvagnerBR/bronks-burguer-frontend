
import { Cart } from "@/src/actions/cart/get-cart";
import CartItem from "./item";
import { Button } from "../button";

//icons
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";

export interface CartItemsProps {
    cart: Cart;
}

export default async function CartItems( { cart }: CartItemsProps ) {

    const items = cart.items
    const total = cart.total_order


    return (
        <div className="w-full mt-4 flex flex-col gap-8">
            {items?.map( ( product ) => {
                return <CartItem key={`${product.id + "item"}`} product={product} />
            } )}
            <div className="flex w-full items-center justify-end max-xl:px-4 mt-4">
                <p>Total:</p>
                <p className="flex w-[200px] border-b mx-4 border-vermelho border-dashed" />
                <div className="flex items-center justify-center gap-1">
                    <sub className="text-[16px] font-black uppercase text-marrom">rs</sub>
                    <span className="text-[32px] font-black">{total?.toFixed( 2 )}</span>
                </div>
            </div>
            <div className="w-full flex justify-end items-center  max-xl:px-4">

                <Button.Wrapper className=" bg-verde" path="/checkout" >
                    <Button.Content text="ENDEREÇO DE ENTREGA" />
                    <Button.Icon icon={ArrowRight} />
                </Button.Wrapper>

            </div>
        </div>
    );
}