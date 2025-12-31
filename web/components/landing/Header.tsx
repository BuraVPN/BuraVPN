import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full relative flex flex-col items-center justify-center z-20 border-b border-gray-600 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
      <nav className="w-full lg:w-[75%] pl-2 pr-8 lg:px-16 flex items-center justify-between py-4">
        <Image
          src="/logo-wide.png"
          width={100}
          height={100}
          alt="company logo, wind icon and company name"
          className="w-[150px] hidden lg:block"
        ></Image>
        <Image
          src="/logo-small.png"
          width={100}
          height={100}
          alt="company logo, wind icon"
          className="w-[75px] lg:hidden"
        ></Image>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/docs"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/how-it-works"
            className="text-white hover:text-gray-300 transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:from-orange-500 hover:to-red-600"
          >
            Dashboard
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
