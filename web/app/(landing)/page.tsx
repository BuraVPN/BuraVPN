import HeroSection from "@/components/landing/HeroSection";
import Kickastarter from "@/components/landing/Kickstarter";
import Comparison from "@/components/landing/Comparison";
import RouterFresh from "@/components/landing/RouterFresh";
import MilestoneSection from "@/components/landing/MilestoneSection";
export const metadata = {
  title: "Home | BuraVPN",
  description: "Welcome to the BuraVPN Home page",
};

import { singleOpalRouterLi, pairOpalRoutersLi } from "@/lib/opalsSpecs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <Kickastarter />
      <Comparison />
      <div className="container mx-auto px-4 py-10 md:py-20">
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
      <MilestoneSection />
    </main>
  );
}
