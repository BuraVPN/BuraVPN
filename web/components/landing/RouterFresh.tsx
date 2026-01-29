"use client";
import Link from "next/link";
import { Router, Timer, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  paragraphExplain?: string;
  currentPrice: "$85" | "$150";
  oldPrice?: "$120" | "$195";
  discount?: "$35" | "$45";
  routersNumber: 1 | 2;
  routersSpecs: string[];
  isBestDeal?: boolean;
};

export default function RouterFresh({
  title,
  paragraphExplain,
  currentPrice,
  oldPrice,
  discount,
  routersSpecs,
  isBestDeal,
  routersNumber,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative bg-gray-900/40 border ${
        !isBestDeal ? "border-gray-800" : "border-orange-500/50"
      } rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all`}
    >
      {isBestDeal && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: routersNumber }).map((_, i) => (
            <Router key={i} className="h-20 w-20 text-orange-400" />
          ))}
        </div>
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{paragraphExplain}</p>
      </div>

      <div className="mb-8">
        <div className="text-5xl font-bold text-orange-400 mb-2">
          {currentPrice}
        </div>
        <div className="text-xl text-gray-500 line-through">{oldPrice}</div>
        <div className="text-lg text-green-400 font-semibold">
          Save {discount}
        </div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mt-4">
          <Timer className="h-4 w-4 text-orange-400 inline mr-2" />
          <span className="text-sm text-orange-300">Limited Time Pricing</span>
        </div>
      </div>

      <div className="text-left mb-8">
        <ul className="space-y-3 text-gray-300">
          {routersSpecs.map((s) => (
            <li className="flex items-start gap-3" key={s}>
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <Link
          href={`/router-details/opal-${
            routersNumber === 1 ? "single" : "pair"
          }`}
          className="block text-center"
        >
          <span className="text-gray-400 hover:text-orange-400 transition-colors text-sm underline underline-offset-4">
            View Technical Details
          </span>
        </Link>
        <Link href="/shop">
          <motion.button
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {`Order ${title} - ${currentPrice}`}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
