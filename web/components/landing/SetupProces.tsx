"use client";
import { motion } from "framer-motion";
import { MapPin, Plug, Smartphone, Settings, CheckCircle } from "lucide-react";

const SetupSteps = [
  {
    step: "1",
    title: "Place Your Routers",
    description:
      "Put the routers in the desired locations in your home or office.",
    icon: MapPin,
  },
  {
    step: "2",
    title: "Plug & Connect",
    description: "Plug the routers in and connect them to the internet.",
    icon: Plug,
  },
  {
    step: "3",
    title: "Add Devices to Your Network",
    description:
      "Go to the dashboard and add your routers to your private network.",
    icon: Smartphone,
  },
  {
    step: "4",
    title: "Choose Exit & Travel Routers",
    description:
      "Select which router will be your exit point and which one will be your travel router.",
    icon: Settings,
  },
  {
    step: "5",
    title: "Connect & Go",
    description:
      "Connect your device to the travel router's Wi-Fi. That's it — done in a few clicks, no technical knowledge required.",
    icon: CheckCircle,
  },
];

export default function SetupProces() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-4" id="setup-proces">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Setup
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {" "}
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow these simple steps to get your private network running
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {SetupSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-2">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <span className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm font-bold">
                    Step {item.step}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
