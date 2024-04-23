import { NextResponse, type NextRequest } from "next/server";
import verifyToken from "./utils/verify-token";
import { Cart, getCart } from "./actions/cart/get-cart";


export async function middleware( req: NextRequest ) {

    const token = req.cookies.get( 'token' )?.value;
    let cart;

    try {
        cart = await getCart() as Cart;
    } catch ( error ) {
        console.error( 'Failed to fetch cart:', error );
        // Handle error as appropriate for your application
        return;
    }

    const cartIsEmpty = cart?.items?.length === 0 ? true : false;


    const authenticated = token ? await verifyToken( token ) : false;

    if ( authenticated && req.nextUrl.pathname.startsWith( '/entrar' ) ) {
        return NextResponse.redirect( new URL( '/', req.url ) )
    }
    if ( authenticated && req.nextUrl.pathname.startsWith( '/cadastro' ) ) {
        return NextResponse.redirect( new URL( '/', req.url ) )
    }
    if ( authenticated && cartIsEmpty && req.nextUrl.pathname.startsWith( '/carrinho' ) ) {
        console.log( 'carrinho está vazio, redirecionando para a home' )
        return NextResponse.redirect( new URL( '/perfil/pedidos', req.url ) )
    }
    if ( !authenticated && req.nextUrl.pathname.startsWith( '/checkout' ) ) {
        return NextResponse.redirect( new URL( '/', req.url ) )
    }
    if ( !authenticated && req.nextUrl.pathname.startsWith( '/carrinho' ) ) {
        return NextResponse.redirect( new URL( '/', req.url ) )
    }
    if ( authenticated && cartIsEmpty && req.nextUrl.pathname.startsWith( '/checkout' ) ) {
        return NextResponse.redirect( new URL( '/perfil/pedidos', req.url ) )
    }

}

export const config = {
    matcher: ['/entrar/:path*', '/cadastro/:path*', '/carrinho/:path*', '/checkout/:path*']
}