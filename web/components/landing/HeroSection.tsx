"use client";
import { motion } from "framer-motion";
import { DollarSign, Router, GitPullRequest } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Zero Monthly Fees",
    desc: "Pay once, protected forever. Save $1,200+ vs traditional VPNs",
    color: "text-green-400",
  },
  {
    icon: Router,
    title: "Plug & Protect",
    desc: "No software installs. Secures ALL devices instantly",
    color: "text-blue-400",
  },
  {
    icon: GitPullRequest,
    title: "Open-Source",
    desc: "Take back control of your internet — safely and openly.",
    color: "text-purple-400",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-red-950/10 via-[#0a0a0a] to-blue-950/10">
      <div className="container mx-auto py-10 px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Stop Paying Monthly for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                {" "}
                Privacy
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
              Protect Your{" "}
              <strong className="text-white">Entire Network</strong> with
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                {" "}
                BuraVPN{" "}
              </strong>{" "}
              Routers
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              <strong className="text-green-400">$85 once.</strong> No monthly
              fees. No subscriptions. Military-grade security for every device
              in your home.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
                >
                  <Icon className={`h-8 w-8 ${benefit.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
