import ShopHero from "@/components/landing/ShopHero";
import RouterFresh from "@/components/landing/RouterFresh";
import { singleOpalRouterLi, pairOpalRoutersLi } from "@/lib/opalsSpecs";

export const metadata = {
  title: "Shop | BuraVPN",
  description: "Welcome to the BuraVPN Shop",
};
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ShopHero />
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RouterFresh
              title="Single Router"
              paragraphExplain="Requires a second router to work"
              currentPrice="$85"
              oldPrice="$120"
              discount="$35"
              routersSpecs={singleOpalRouterLi}
              routersNumber={1}
            />
            <RouterFresh
              title="Pair Routers"
              paragraphExplain="Complete setup – ready to use"
              currentPrice="$150"
              oldPrice="$195"
              discount="$45"
              routersSpecs={pairOpalRoutersLi}
              isBestDeal
              routersNumber={2}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
