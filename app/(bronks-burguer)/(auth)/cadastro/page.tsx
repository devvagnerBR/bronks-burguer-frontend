import Link from "next/link";

export default async function CadastroPage() {

    return (
        <main className="flex flex-col bg-creme-300 w-full max-w-[460px]  max-lg:items-center max-lg:justify-center max-lg:max-w-none  pt-16 p-4 border">
            <div className="max-lg:flex max-lg:items-center max-lg:flex-col">
                <h1 className="text-[80px] font-black">Criar conta</h1>
                <h1 className="text-[39px] font-black">Bem vindo!</h1>
            </div>
            <form className="mt-16  max-w-[460px] flex flex-col items-center justify-center gap-4 w-full">
                <label
                    htmlFor="username"
                    className="text-lg font-semibold w-full">
                    Nome de usuário:
                    <input
                        className="h-[72px] rounded-[20px] w-full max-w-[460px] border-marrom border-[1.8px] outline-none pl-4 focus:shadow-hover text-preto font-black "
                        required id="username"
                        type="username"
                    />
                </label>
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

                <p className="w-full text-end font-semibold text-marrom text-lg">Já tem uma conta? <Link href="/entrar"><span className="font-bold">Entrar</span></Link> </p>

            </form>
        </main>
    );
}