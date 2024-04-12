import Link from "next/link";

export default async function EntrarPage() {

    return (
        <main className="flex flex-col bg-creme-300 w-full max-w-[460px]  max-lg:items-center max-lg:justify-center  pt-16 max-lg:max-w-none p-4 border">
            <div className="max-lg:flex max-lg:items-center max-lg:flex-col">
                <h1 className="text-[80px] font-black">Entrar</h1>
                <h1 className="text-[39px] font-black">Bem vindo de volta!</h1>
            </div>
            <form className="mt-16  max-w-[460px] flex flex-col items-center justify-center gap-4 w-full">
                <label
                    htmlFor="email"
                    className="text-lg font-semibold w-full">
                    Email:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="email"
                        type="email"
                    />
                </label>
                <label htmlFor="password" className="text-lg font-semibold w-full">
                    Senha:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="password"
                        type="password"
                    />
                </label>

                <button
                    type="submit"
                    className="h-[72px] text-branco text-2xl font-black w-full max-w-[460px] rounded-[20px] border-marrom border-[1.8px] bg-vermelho hover:shadow-hover  shadow-marrom">
                    ENTRAR
                </button>

                <p className="w-full text-end font-semibold text-marrom text-lg">Ainda não tem uma conta? <Link href="/cadastro"><span className="font-bold">Cadastre-se</span></Link> </p>

            </form>
        </main>
    );
}