import { OrderInterface } from "@/src/app/(bronks-burguer)/(pages)/perfil/pedidos/page";
import OrderItem from "./order-item";









export default async function OrderItems( { orders }: { orders: OrderInterface[] } ) {



    return (
        <div className=" mt-16">
            {orders.map( ( order ) => {
                return <section className="flex flex-col gap-8 pb-8">
                    <OrderItem key={order.id} order={order} />
                    <p className="w-[800px] border-b border-dashed border-marrom/40" />
                </section>
            } )}
        </div >
    );
}