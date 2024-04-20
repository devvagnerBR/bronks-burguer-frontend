import { Button } from "../button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";

export default async function HomepageHero() {

    return (
        <div className="w-full max-w-[1280px] m-auto">
            <div className="max-md:items-center max-md:flex max-md:flex-col">
                <h1 className="text-[108px] font-black leading-[80px] max-sm:text-[98px] max-[400px]:text-[82px]">BRONKS</h1>
                <h1 className="text-[108px] font-black max-sm:text-[98px] max-[400px]:text-[82px]">BURGUER</h1>
                <h2 className="text-[34px] max-sm:text-[22px] max-sm:max-w-[360px] max-sm:text-center font-medium max-w-[480px] mt-4">
                    O {" "}
                    <span className="text-vermelho font-black">
                        melhor{" "}
                    </span>
                    e mais{" "}
                    <span
                        className="text-vermelho font-black">
                        suculento
                    </span> hambúrguer de carne que você já comeu.
                </h2>
                <Button.LinkWrapper href="/#menu">
                    <Button.Content text="FAZER PEDIDO" />
                    <Button.Icon icon={ArrowRight} />
                </Button.LinkWrapper>

                <p className="text-[22px] max-sm:text-[18px] font-light mt-4">Entregas em todo Rio de Janeiro - RJ</p>
            </div>
        </div>
    );
}