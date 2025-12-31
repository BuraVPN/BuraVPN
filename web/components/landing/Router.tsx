"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Wifi,
  Settings,
  Plug,
  Router,
  EthernetPort,
  ShoppingBasket,
  CircleChevronRight,
} from "lucide-react";
type Props = {
  price: "85" | "150";
  alt: string;
  sale?: string;
  name: string;
  stock: boolean;
  qty: 1 | 2 | 4;
  isShop?: boolean;
  ethPorts: number;
};

export default function Routers({
  price,
  alt,
  sale,
  name,
  stock,
  qty,
  isShop,
  ethPorts,
}: Props) {
  const images = ["/1-router.webp", "/2-router.webp", "/3-router.webp"];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="flex flex-col border border-gray-500 rounded-lg p-4 w-[95%] bg-[linear-gradient(120deg,#121212_35%,#262626_80%,#242424_100%)]">
      <p className="text-3xl font-bold my-5">{name}</p>
      <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <div className="relative w-full h-[300px] rounded border border-gray-700 overflow-hidden">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={400}
              height={300}
              alt={`${alt}-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                index === current
                  ? "translate-x-0 z-10 opacity-100"
                  : "translate-x-full z-0 opacity-0"
              }`}
            />
          ))}
          <button
            onClick={prevImage}
            className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded hover:bg-black/70 z-10"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded hover:bg-black/70 z-10"
          >
            ▶
          </button>
        </div>
      </div>
      <p
        className={`font-medium ${
          stock ? "text-green-500" : "text-red-500"
        } self-end`}
      >
        <span className={`mr-2 ${stock ? "animate-pulse" : ""}`}>●</span>
        {stock ? "available" : "out of stock"}
      </p>

      <ul className="mt-4 text-base text-gray-300 space-y-2">
        <li className="flex items-center gap-2">
          <Router className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            <span className="font-semibold text-gray-200">Model:</span> GL.Inet
            Opal
          </span>
        </li>
        <hr className="custom-hr-product-card" />
        <li className="flex items-center gap-2">
          <ShoppingBasket className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            <span className="font-semibold text-gray-200">Quantity:</span>{" "}
            {`${qty} ${qty > 1 ? "routers" : "router"}`}
          </span>
        </li>
        <hr className="custom-hr-product-card" />
        <li className="flex items-center gap-2">
          <Wifi className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            <span className="font-semibold text-gray-200">WiFi:</span> Dual-band
            2.4GHz & 5GHz
          </span>
        </li>
        <hr className="custom-hr-product-card" />
        <li className="flex items-center gap-2">
          <EthernetPort className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            <span className="font-semibold text-gray-200">Ethernet Ports:</span>{" "}
            {ethPorts}
          </span>
        </li>
        <hr className="custom-hr-product-card" />
        <li className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            <span className="font-semibold text-gray-200">Configuration:</span>{" "}
            Pre-configured
          </span>
        </li>
        <hr className="custom-hr-product-card" />
        <li className="flex items-center gap-2">
          <Plug className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            <span className="font-semibold text-gray-200">Setup:</span> Plug &
            Play
          </span>
        </li>
      </ul>
      <div className="flex justify-between items-center mt-8 mb-2">
        <p
          className={`font-bold text-4xl ${
            sale ? "text-green-400" : "text-white"
          }`}
        >
          €{price}
          {sale && (
            <span className="text-lg line-through text-red-500 ml-2">
              €{sale}
            </span>
          )}
        </p>
        <div className="flex flex-wrap items-center justify-end gap-3 w-full">
          <Link
            href={`/router-details/opal-${qty === 1 ? "single" : "pair"}`}
            className="group px-3 py-2 border border-gray-400/50 rounded-lg flex-shrink-0 
    transition-colors duration-300 ease-in-out
    hover:bg-white/10 hover:border-white hover:shadow-md"
          >
            <CircleChevronRight className="text-gray-300 transition-colors duration-300 group-hover:text-white" />
          </Link>

          <a
            href="https://www.kickstarter.com/projects/your-project-id"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-6 py-2 md:px-12 text-gray-800 font-bold 
      bg-gray-100 border border-transparent rounded-lg 
      hover:bg-transparent hover:border-gray-200 hover:text-gray-200 
      transition duration-300 ease-in-out text-center flex-shrink-0"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
