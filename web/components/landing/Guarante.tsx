"use client";
import { motion } from "framer-motion";
import { Shield, Eye, Server } from "lucide-react";
export default function Guarantee() {
  return (
    <motion.div
      className="text-center mt-16 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
        <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">100% Risk-Free Guarantee</h3>
        <p className="text-lg text-gray-300 mb-6">
          Try your VPN router for 30 days. If you're not completely satisfied,
          we'll refund every penny. No questions asked.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
          <div className="flex flex-col items-center gap-2">
            <Eye className="h-5 w-5 text-blue-400" />
            <span>Zero-Log Policy</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="h-5 w-5 text-green-400" />
            <span>Military Encryption</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Server className="h-5 w-5 text-purple-400" />
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
