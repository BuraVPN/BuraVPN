"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import {
  Wifi,
  Plug,
  Router,
  EthernetPort,
  Cpu,
  ShieldCheck,
  Wind,
  RulerDimensionLineIcon,
} from "lucide-react";

export default function RouterDetailsPage() {
  const params = useParams();
  const { slug } = params;

  const isPair = slug?.includes("pair") ?? false;
  const qty = isPair ? 2 : 1;
  const price = isPair ? 150 : 85;
  const sale = isPair ? 195 : 120;
  const stock = true;

  const images = ["/1-router.webp", "/2-router.webp", "/3-router.webp"];
  const [current, setCurrent] = React.useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="w-[95vw] md:w-[70vw] min-h-screen text-gray-200 px-4 md:px-20 py-12 flex flex-col gap-10 justify-self-center bg-transprent">
      <section className="md:flex md:gap-10">
        <div className="md:flex-1 flex flex-col items-center mb-6 md:mb-0">
          <div className="relative w-full md:w-[400px] h-[300px] md:h-[400px] overflow-hidden rounded-lg border border-gray-700">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={400}
                height={400}
                alt={`Router image ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                  index === current
                    ? "translate-x-0 z-10 opacity-100"
                    : "translate-x-full z-0 opacity-0"
                }`}
              />
            ))}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded hover:bg-black/70 z-20"
              aria-label="Previous Image"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded hover:bg-black/70 z-20"
              aria-label="Next Image"
            >
              ▶
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={80}
                height={60}
                alt={`Thumbnail ${index + 1}`}
                className={`cursor-pointer border rounded ${
                  current === index ? "border-green-400" : "border-gray-600"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>

        <div className="md:flex-1 flex flex-col justify-start gap-6">
          <h1 className="text-5xl font-bold">
            {`GL.Inet Opal ${isPair ? "Pair" : "Single"}`}
          </h1>

          <p className="text-gray-400 text-lg">
            Compact VPN router with plug-and-play setup. Provides secure, dual-band WiFi 
            for all your devices with no technical skills required. Perfect for home or travel.
          </p>

          <section
            aria-label="Purchase Information"
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">${price}</div>
              <div className="text-lg text-gray-500 line-through">${sale}</div>
              <div className="text-sm text-green-400">Save ${sale - price}</div>
            </div>

            <a
              href="https://www.kickstarter.com/projects/your-project-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all"
            >
              Buy Now
            </a>
          </section>
        </div>
      </section>

      <section aria-label="Technical Specifications" className="mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
        <ul className="mt-6 space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0">
          <li className="flex items-center gap-2">
            <EthernetPort className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">
                Ethernet Ports:
              </span>{" "}
              3
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">CPU:</span> SF19A28,
              Dual-Core @1GHz
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Wifi className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">Wi-Fi:</span>{" "}
              300Mbps (2.4GHz), 867Mbps (5GHz)
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Router className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">Antennas:</span> 2 x
              undetachable external Wi-Fi antennas
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">
                Ethernet Speed:
              </span>{" "}
              10/100/1000Mbps
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Plug className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">Power Input:</span>{" "}
              Type-C, 5V/3A
            </span>
          </li>

          <li className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">
                Power Consumption:
              </span>{" "}
              &lt;6W
            </span>
          </li>

          <li className="flex items-center gap-2">
            <RulerDimensionLineIcon className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">
              <span className="font-semibold text-gray-200">
                Dimension / Weight:
              </span>{" "}
              118 x 85 x 30mm / 145g
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
