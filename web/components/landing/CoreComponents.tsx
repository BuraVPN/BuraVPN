"use client";
import { motion } from "framer-motion";
import { Shield, Router } from "lucide-react";

export default function CoreComponents() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4" id="core-components">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Core
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {" "}
              Components
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three essential components working together seamlessly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
          >
            <Shield className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">WireGuard</h3>
            <p className="text-gray-300">
              Secure, fast, and reliable VPN protocol powering your private
              network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
          >
            <div className="flex justify-center gap-2 mb-6">
              <Router className="h-8 w-8 text-green-400" />
              <Router className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2 Routers</h3>
            <p className="text-gray-300">
              One exit router at home, one travel router with you — fully
              plug-and-play.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
          >
            <div className="h-16 w-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <div className="text-blue-400 text-2xl font-bold">⚡</div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
            <p className="text-gray-300">
              Easily manage your private network and choose which router is your
              exit or travel device.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
