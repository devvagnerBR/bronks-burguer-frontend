'use client'

import React from "react";
import { MappedOrdersResponse } from "./order-mappers";


export default function OrderItem( { order }: { order: MappedOrdersResponse } ) {

    const [showMore, setShowMore] = React.useState( false );


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

                    <div className="flex flex-col gap-2 pl-16 max-lg:pl-0">
                        <p className="uppercase font-black max-sm:mt-4">itens</p>
                        {showMore && order.itens.map( ( item ) => {
                            return <div key={item.id} className="flex justify-between">
                                <p className="text-vermelho">{item.quantity}x --- {item.name} </p>
                            </div>
                        }
                        )}
                        <p onClick={() => setShowMore( state => !state )} className="uppercase text-vermelho font-black cursor-pointer">{showMore ? "ver menos" : "ver mais"}</p>
                    </div>

                </div>


            </div>
        </div>
    );
}