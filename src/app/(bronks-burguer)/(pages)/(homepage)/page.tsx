import { getCart } from "@/src/actions/cart/get-cart";
import BannerHomepage from "@/src/components/homepage/banner";
import HomepageHero from "@/src/components/homepage/hero";
import MenuItems from "@/src/components/homepage/menu-items";


export default async function Home() {

  const cart = await getCart();
  const cartIsEmpty = cart?.items?.length === 0;

  return (
    <div className="mt-16  mb-20">
      <HomepageHero />
      <BannerHomepage />
      <MenuItems cartIsEmpty={cartIsEmpty} />
    </div>

  );
}
