import { momentJs } from "@/src/libs/moment-js";




interface Address {
    id: string;
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    complement: string;
    user_id: string;
}

interface User {
    name: string;
    email: string;
    phone: string;
    address: Address;
}

interface Item {
    product: {
        id: string;
        name: string;
        price: number;
        description: string;
        image: string | null;
        created_at: string;
        updated_at: string;
        is_active: boolean;
        is_deleted: boolean;
        category: string;
        client_id: string;
        order_id: string;
    }
    quantity: number;
}
export interface OrderResponseInterface {
    order_number: number;
    id: string;
    total: number;
    created_at: string;
    payment_method: string;
    user: User;
    itens: Item[];
}

interface Order {
    order_number: number;
    id: string;
    total: number;
    created_at: string;
    payment_method: string;
    user: User;
    itens: Item[];
}


class OrderMapper {

    toFrontend( order: Order ): MappedOrdersResponse {
        let paymentMethodFormatted = '';

        switch ( order.payment_method ) {
            case 'CREDIT_ON_DELIVERY':
                paymentMethodFormatted = 'crédito (pagamento na entrega)';
                break;
            case 'DEBIT_ON_DELIVERY':
                paymentMethodFormatted = 'débito (pagamento na entrega)';
                break;
            case 'MONEY':
                paymentMethodFormatted = 'dinheiro'
                break;
            case 'PIX':
                paymentMethodFormatted = 'PIX';
                break;
        }

        return {
            orderNumber: order.order_number,
            id: order.id,
            total: order.total.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ),
            createdAt: momentJs( order.created_at ).format( 'DD/MM/YYYY HH:mm' ),
            paymentMethod: paymentMethodFormatted,
            user: {
                name: order.user.name,
                email: order.user.email,
                phone: order.user.phone,
                address: {
                    cep: order.user.address.cep,
                    street: order.user.address.street,
                    neighborhood: order.user.address.neighborhood,
                    city: order.user.address.city,
                    state: order.user.address.state,
                    complement: order.user.address.complement,
                }

            },
            itens: order.itens.map( ( item ) => {
                return {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ),
                    description: item.product.description,
                    image: item.product.image,
                    category: item.product.category,
                    quantity: item.quantity
                }
            } )
        }
    }


}

export default new OrderMapper();


export interface MappedOrdersResponse {
    orderNumber: number;
    id: string;
    total: string;
    createdAt: string;
    paymentMethod: string;
    user: {
        name: string;
        email: string;
        phone: string;
        address: {
            cep: string;
            street: string;
            neighborhood: string;
            city: string;
            state: string;
            complement: string;
        }
    }
    itens: {
        id: string;
        name: string;
        price: string;
        description: string;
        image: string | null;
        category: string;
        quantity: number;
    }[]
}