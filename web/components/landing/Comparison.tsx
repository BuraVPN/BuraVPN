"use client";
import { Shield, Wifi, Timer, DollarSign, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const traditionVpnOffers = [
  {
    threat: "Monthly Fees",
    cost: "$10-15/month",
    desc: "Pay $150+ per year forever",
    icon: DollarSign,
    color: "text-red-400",
  },
  {
    threat: "Complex Setup",
    cost: "Hours of config",
    desc: "Each device needs manual setup",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
  {
    threat: "Speed Loss",
    cost: "50-80% slower",
    desc: "Traffic bottlenecks kill speed",
    icon: Timer,
    color: "text-orange-400",
  },
  {
    threat: "Limited Devices",
    cost: "5-10 device limit",
    desc: "Extra fees for more protection",
    icon: Wifi,
    color: "text-red-400",
  },
];

export default function Comparison() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-red-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Why choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                {" "}
                BuraVPN
              </span>
              ?
            </h2>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-red-400">
              Because Traditional VPNs Are Broken.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {traditionVpnOffers.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/60 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all"
                >
                  <Icon className={`h-8 w-8 ${item.color} mb-4`} />
                  <h3 className="text-lg font-bold mb-2 text-red-200">
                    {item.threat}
                  </h3>
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    {item.cost}
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="text-center bg-gradient-to-r from-green-950/30 to-blue-950/30 border border-green-500/20 rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              BuraVPN:{" "}
              <span className="text-green-400">Hardware-Level Protection</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              One router protects everything. Zero monthly fees. Perfect
              security with full speed.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-green-400">
                  ✓ What You Get:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Open-source and fully transparent</li>
                  <li>• Full internet speed maintained</li>
                  <li>• Access your home IP globally</li>
                  <li>• Zero configuration needed</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-red-400">
                  ✗ What You Don&apos;t Pay:
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Monthly subscription fees</li>
                  <li>• Software licensing costs</li>
                  <li>• Per-device charges</li>
                  <li>• Technical support fees</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
