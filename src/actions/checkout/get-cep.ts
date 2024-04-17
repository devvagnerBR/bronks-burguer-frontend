'use server'

export async function getCEP( cep: string ) {

    const response = await fetch( `https://viacep.com.br/ws/${cep}/json/` );
    const data = await response.json();

    return data;

}