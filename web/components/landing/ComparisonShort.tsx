"use client";
import { motion } from "framer-motion";

export default function ComparisonShort() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-200">
                Traditional VPNs
              </h3>
              <ul className="space-y-3 text-red-300">
                <li>❌ $10-15 per month forever</li>
                <li>❌ Install software on every device</li>
                <li>❌ 50-80% speed loss</li>
                <li>❌ 5-10 device limits</li>
                <li>❌ Complex configuration</li>
                <li>❌ Constant connection drops</li>
              </ul>
            </div>
            <div className="bg-green-950/20 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-200">
                Our VPN Router
              </h3>
              <ul className="space-y-3 text-green-300">
                <li>✅ $85 once, protected forever</li>
                <li>✅ Zero software installations</li>
                <li>✅ Full speed maintained</li>
                <li>✅ Unlimited devices protected</li>
                <li>✅ Plug and play setup</li>
                <li>✅ Rock-solid connection</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
