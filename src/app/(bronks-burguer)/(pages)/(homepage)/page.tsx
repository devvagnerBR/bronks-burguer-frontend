import { getCart } from "@/src/actions/cart/get-cart";
import { getCookie } from "@/src/actions/cookies/get-cookie";
import BannerHomepage from "@/src/components/homepage/banner";
import HomepageHero from "@/src/components/homepage/hero";
import MenuItems from "@/src/components/homepage/menu-items";


export default async function Home() {

  const cart = await getCart();
  const cartIsEmpty = cart?.items?.length === 0 || cart === undefined;



  return (
    <div className="mt-16  mb-20">
      <HomepageHero />
      <BannerHomepage />
      <MenuItems cartIsEmpty={cartIsEmpty} />
    </div>

  );
}
