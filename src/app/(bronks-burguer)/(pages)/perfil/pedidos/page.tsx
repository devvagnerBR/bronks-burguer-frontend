import { getOrders } from "@/src/actions/get-orders";
import OrderItems from "@/src/components/perfil/pedidos/order-items";
import PaginationMenu from "@/src/components/perfil/pedidos/pagination-menu";
import { Suspense } from "react";


interface Props {
    params: {},
    searchParams: { p: string }
}
export default async function PedidosPage( { searchParams }: Props ) {

    const { items, ordersCount } = await getOrders( Number( searchParams.p ?? 1 ) );

    return (

        <Suspense fallback="procurando pedidos...">
            <div className="animeLeft">
                <div className={`max-w-[1280px] ${!items ? "min-h-[calc(100vh-300px)]" : "min-h-[calc(100vh-600px)]"}  max-xl:px-4 m-auto `}>
                    <OrderItems orders={items} />
                    <PaginationMenu count={ordersCount} />

                </div>
            </div>
        </Suspense>
    );
}

/*



*/