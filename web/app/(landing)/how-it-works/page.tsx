import HowWorksHero from "@/components/landing/HowWorksHero";
import CoreComponents from "@/components/landing/CoreComponents";
import SetupProces from "@/components/landing/SetupProces";
import CallToAction from "@/components/landing/CallToAction";

export const metadata = {
  title: "How it works | BuraVPN",
  description: "BuraVPN How it Works page",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HowWorksHero />
      <CoreComponents />
      <SetupProces />
      <CallToAction
        btnCTA_text="Get Your VPN Router - $85"
        titleCTA_span="Monthly Fees?"
        titleCTA="Ready to Stop"
        paragraphCTA="Join 50,000+ users who chose one-time payment over monthly
            subscriptions."
        caption="✓ No monthly fees"
      />
    </main>
  );
}
