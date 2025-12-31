"use client";
import SubscribeForm from "./SubscribeForm";
import { motion } from "framer-motion";

export default function Kickastarter() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-[95vw] lg:max-w-[65vw] mx-auto">
            <div className="w-full md:w-1/2 text-left text-gray-300 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 px-1">
                Kickstarter Launch — Soon
              </h2>
              <hr className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 my-4 rounded-full" />
              <div className="space-y-4 text-gray-200 flex-grow">
                <p className="text-2xl md:text-3xl text-gray-400">
                  Early Bird Offers — Save up to 35%!
                </p>
                <ul className="space-y-2 text-lg md:text-xl">
                  <li>
                    <span className="font-semibold">Pair of devices:</span>{" "}
                    <span className="text-green-300 font-bold">€150</span>{" "}
                    <span className="line-through text-gray-500">€195</span>{" "}
                    <span className="text-green-400">(Save €45)</span>
                  </li>
                  <li>
                    <span className="font-semibold">Single device:</span>{" "}
                    <span className="text-green-300 font-bold">€85</span>{" "}
                    <span className="line-through text-gray-500">€120</span>{" "}
                    <span className="text-green-400">(Save €35)</span>
                  </li>
                </ul>
                <ul className="custom-list-style">
                  <li>Lifetime priority support</li>
                  <li>Early shipping before public release</li>
                  <li>Exclusive backer updates & community access</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col bg-gray-900/60 border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all">
              <div className="w-full p-6 rounded-lg mt-6">
                <h3 className="text-xl mb-1 text-white font-bold">
                  Join Our Early Access Newsletter
                </h3>
                <p className="text-gray-300 mb-4">
                  Be the first to know about launches, exclusive discounts, and
                  behind-the-scenes updates.
                </p>

                <SubscribeForm />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
