import { OrderInterface } from "@/src/app/(bronks-burguer)/(pages)/perfil/pedidos/page";
import { momentJs } from "@/src/libs/moment-js";

class OrderMapper {

    toFrontend( order: OrderInterface ) {


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

        if ( !order.itens ) return
        return {
            id: order.id,
            total: order.total.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ),
            created_at: momentJs( order.created_at ).format( 'DD/MM/YYYY HH:mm' ),
            order_number: order.order_number,
            payment_method: paymentMethodFormatted,
            user: {
                name: order.user.name,
                email: order.user.email,
                phone: order.user.phone,
                address: {
                    cep: order.user.address.cep,
                    bairro: order.user.address.bairro
                }
            },
            itens: order.itens.map( ( item ) => {
                return {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                }
            } )
        }
    }




}

export default new OrderMapper();