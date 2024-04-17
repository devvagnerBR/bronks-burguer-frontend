import { getOrders } from "@/src/actions/get-orders";
import OrderItems from "@/src/components/pedidos/order-items";
import Title from "@/src/components/title";
import { momentJs } from "../../../../../libs/moment-js";





export interface OrderInterface {
    id: string;
    total: number;
    created_at: string;
    order_number: number;
    payment_method: string;
    user: {
        name: string;
        email: string;
        phone: string;
        address: {
            cep: string;
            bairro: string;
        }
    };
    itens: {
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[]
}


export default async function PedidosPage() {

    const orders = await getOrders() as OrderInterface[];



   


    return (
        <div className="max-w-[1280px] min-h-[calc(100vh-300px)] m-auto mt-8">
            <Title text="HISTÓRICO DE PEDIDOS" />
            <OrderItems orders={orders} />
        </div>
    );
}

/*



*/