
import OrderItem from "./order-item";
import { MappedOrdersResponse } from "./order-mappers";



export default async function OrderItems( { orders }: { orders: MappedOrdersResponse[] } ) {

    return (

        <div>
            {orders?.map( ( order ) => {
                return <section key={order.id} className="flex flex-col gap-8 pb-8">
                    <OrderItem order={order} />
                    <p className="w-[800px] max-xl:w-full border-b border-dashed border-marrom/40" />
                </section>
            } )}
        </div >
    );
}