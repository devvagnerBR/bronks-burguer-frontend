'use client'

import React from "react";
import { MappedOrdersResponse } from "./order-mappers";


export default function OrderItem( { order }: { order: MappedOrdersResponse } ) {

    const [showMore, setShowMore] = React.useState( false );

    function formatPhoneNumber( phoneNumber: string ) {
        const cleaned = ( '' + phoneNumber ).replace( /\D/g, '' ); // Remove todos os caracteres não numéricos
        const match = cleaned.match( /^(\d{2})(\d{5})(\d{4})$/ ); // Divide o número em grupos (DD)(XXXXX)(XXXX)
        if ( match ) {
            return `(${match[1]}) ${match[2]}-${match[3]}`; // Formata o número como (DD) XXXXX-XXXX
        }
        return phoneNumber; // Retorna o número original se não puder ser formatado
    }

    async function handleSendOrderByWhatsApp( order: MappedOrdersResponse ) {

        const message = `Olá, meu nome é *${order.user.name}* e gostaria de fazer um pedido com os seguintes itens: \n\n${order.itens.map( ( item ) => `✅ ${item.quantity} ${item.name}` ).join( '\n' )}\n\n🏠 Endereço de entrega:\n${order.user.address.street}, ${order.user.address.neighborhood}, ${order.user.address.city} - ${order.user.address.state}, ${order.user.address.cep}\nComplemento: ${order.user.address.complement}\n\n\☎️ Telefone de contato: ${formatPhoneNumber( order.user.phone )} \n\n💰 Forma de pagamento: ${order.paymentMethod}\n\nTotal: ${order.total}\n\nNº do pedido: #00${order.orderNumber}\nPedido feito em: ${order.createdAt}\n`;

        const url = `https://api.whatsapp.com/send?phone=5522997759060&text=${encodeURIComponent( message )}`;

        window.open( url, "_blank" );
    }


    return (
        <div className="flex max-sm:flex-col ">

            <div className="flex">

                <div className="flex flex-col gap-2 pr-16 max-lg:pr-0 max-lg:min-w-[120px]">
                    <p className="uppercase font-black">Nº do pedido</p>
                    <h1 className="uppercase text-vermelho font-black">#00{order.orderNumber}</h1>
                </div>
                <div className="flex flex-col gap-2 min-w-[160px]">
                    <p className="uppercase font-black">Data do pedido</p>
                    <h1>{order.createdAt}</h1>
                </div>

            </div>

            <div className="flex max-sm:flex-col max-sm:mt-8">

                <div className="flex flex-col gap-2 pl-12 max-lg:pl-0 min-w-[260px] max-lg:min-w-[200px]">
                    <p className="uppercase font-black">Forma de pagamento</p>
                    <h1 className="capitalize">{order.paymentMethod}</h1>
                </div>

                <div className="flex">

                    <div className="flex flex-col gap-2 pl-16 max-lg:pl-0 min-w-[130px] max-lg:min-w-[90px]">
                        <p className="uppercase font-black max-sm:mt-4">total</p>
                        <h1>{order.total}</h1>
                    </div>

                    <div className="flex flex-col items-end gap-2 pl-16 max-lg:pl-0 ">
                        <p className="uppercase font-black max-sm:mt-4">itens</p>
                        {showMore && order.itens.map( ( item ) => {
                            return <div key={item.id} className="flex justify-between">
                                <p className="text-vermelho">{item.quantity}x --- {item.name} </p>
                            </div>
                        }
                        )}
                        <p onClick={() => setShowMore( state => !state )} className="uppercase text-vermelho font-black cursor-pointer">{showMore ? "ver menos" : "ver itens"}</p>
                        <p onClick={() => handleSendOrderByWhatsApp( order )} className="text-emerald-600 uppercase border p-2 rounded-md cursor-pointer border-emerald-500">ENVIAR PEDIDO VIA whatsApp</p>
                    </div>

                </div>


            </div>
        </div>
    );
}