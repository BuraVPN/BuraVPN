"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent"
      id="about-us"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {" "}
              Us
            </span>
          </h2>

          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              <strong className="text-orange-400">BuraVPN</strong> is a European
              open-source startup. We’re a team of developers with experience
              across different industries, passionate about creating tools that
              give people back control over their online privacy. With our
              open-source BuraVPN router, you can securely access your home IP
              from anywhere in the world — no endless subscriptions, no hassle.
              Our mission is to help you protect all your devices while keeping
              you in full control of your network.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
