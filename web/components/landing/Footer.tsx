import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0D0D0D] via-[#171717] to-[#0D0D0D] text-gray-300 py-12 px-8 md:px-16 border-t border-gray-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-left">
            <Image
              src="/logo-wide.png"
              width={100}
              height={100}
              alt="company logo, wind icon and company name"
              className="w-[150px] hidden lg:block"
            ></Image>
            <p className="text-gray-400 text-sm max-w-xs">
              Secure your entire network with one-time purchase. No monthly
              fees, unlimited protection.
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Know Us</h4>
            <div className="space-y-2">
              <Link
                href="/contact/#about-us"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/how-it-works/#core-components"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Setup Components
              </Link>
              <Link
                href="/how-it-works/#setup-proces"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Setup Proces
              </Link>
              <Link
                href="/shop"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Shop
              </Link>
              <Link
                href="/contact/#contact-form"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Affiliate
              </Link>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-base font-semibold mb-4 text-white">
              Policies
            </h4>
            <div className="space-y-2">
              <Link
                href="/shipping-policy"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Shipping Policy
              </Link>
              <Link
                href="/payment-methods"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Payment Methods
              </Link>
              <Link
                href="/return-refund"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Return and Refund
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-base font-semibold mb-4 text-white">
              Follow Us
            </h4>
            <div className="flex gap-3 justify-start">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-1 rounded hover:bg-gray-800/50"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://x.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-1 rounded hover:bg-gray-800/50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-1 rounded hover:bg-gray-800/50"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-1 rounded hover:bg-gray-800/50"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-1 rounded hover:bg-gray-800/50"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-6 text-center text-gray-500 text-sm">
          © 2025 BuraVPN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
