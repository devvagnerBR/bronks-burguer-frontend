import { OrderInterface } from "@/src/app/(bronks-burguer)/(pages)/perfil/pedidos/page";

export default async function OrderItem( { order }: { order: OrderInterface } ) {

    return (
        <div className="flex">
            <div className="flex flex-col gap-2 pr-16">
                <p className="uppercase font-black">Nº do pedido</p>
                <h1 className="uppercase text-vermelho font-black">#00{order.order_number}</h1>
            </div>
            <div className="flex flex-col gap-2 min-w-[130px]">
                <p className="uppercase font-black">Data do pedido</p>
                <h1>{order.created_at}</h1>
            </div>
            <div className="flex flex-col gap-2 pl-16 min-w-[260px]">
                <p className="uppercase font-black">Forma de pagamento</p>
                <h1>{order.payment_method}</h1>
            </div>
            <div className="flex flex-col gap-2 pl-16 min-w-[130px]">
                <p className="uppercase font-black">total</p>
                <h1>{order.total}</h1>
            </div>
            <div className="flex flex-col gap-2 pl-16">
                <p className="uppercase font-black">itens</p>
                <p className="uppercase text-vermelho font-black cursor-pointer">ver mais</p>
            </div>
            
        </div>
    );
}