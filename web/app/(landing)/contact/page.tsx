import ContactForm from "@/components/landing/ContactForm";
import AboutUs from "@/components/landing/AboutUs";
import CallToAction from "@/components/landing/CallToAction";
export const metadata = {
  title: "Contact | BuraVPN",
  description: "BuraVPN Contact page",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ContactForm />
      <AboutUs />
      <CallToAction
        btnCTA_text="Get VPN Router - $85"
        titleCTA="Ready to Get"
        titleCTA_span="Protected?"
        paragraphCTA="Join thousands who chose our one-time payment VPN over monthly subscriptions."
        caption="✓ 24/7 support"
      />
    </main>
  );
}
