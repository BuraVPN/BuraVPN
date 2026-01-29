"use client";
import {
  House,
  Router,
  BookText,
  ChevronsLeftRightEllipsis,
  CircleUserRound,
} from "lucide-react";
import Link from "next/link";

type Props = {
  onLinkClick?: () => void;
  isMinimized?: boolean;
};

export default function Navigation({ onLinkClick, isMinimized }: Props) {
  const navLinks = [
    { name: "Home", href: "/", icon: <House color="#cccccc" /> },
    {
      name: "Devices",
      href: "/dashboard/devices",
      icon: <Router color="#cccccc" />,
    },
    {
      name: "Tunnels",
      href: "/dashboard/tunnels",
      icon: <ChevronsLeftRightEllipsis color="#cccccc" />,
    },
    {
      name: "Account",
      href: "/dashboard/account",
      icon: <CircleUserRound color="#cccccc" />,
    },
    {
      name: "Docs",
      href: "/linkceicposli",
      icon: <BookText color="#cccccc" />,
    },
  ];

  return (
    <nav className="w-full">
      {navLinks.map((l) => (
        <div key={l.name} className="w-full">
          <Link
            href={l.href}
            className="py-6 mr-5 ml-5 flex flex-row items-center justify-between text-lg md:text-xl text-white hover:text-gray-400 cursor-pointer"
            onClick={onLinkClick}
          >
            {!isMinimized ? (
              <>
                <p className="md:mr-30">{l.name}</p>
                {l.icon}
              </>
            ) : (
              l.icon
            )}
          </Link>
          <hr className="w-full h-[1px] bg-gray-500 border-0" />
        </div>
      ))}
    </nav>
  );
}
