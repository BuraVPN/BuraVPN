"use client";
import { motion } from "framer-motion";

export default function HowWorksHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-red-950/10 via-[#0a0a0a] to-blue-950/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              How It
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}
                Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Our system uses{" "}
              <strong className="text-orange-400">WireGuard</strong>, two
              routers, and an intuitive dashboard to make private networking
              incredibly simple.{" "}
              <strong className="text-green-400">
                No tech skills required.
              </strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
