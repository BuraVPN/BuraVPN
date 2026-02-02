import { Smartphone, Store } from "lucide-react";

export default function MilestoneSection() {
  const roadmapItems = [
    {
      id: 1,
      title: "Mobile/Desktop App",
      subtitle: "Remote Control & Monitoring",
      description: ["Software on your device", "No need for 2 routers"],
      icon: Smartphone,
      status: "In Development",
      color: "bg-gradient-to-r from-orange-600 to-red-600",
    },
    {
      id: 2,
      title: "Routers Market",
      subtitle: "Airbnb for VPN Routers",
      description: [
        "Rent your router to other users",
        "Earn passive income from your router",
        "Access routers worldwide",
      ],
      icon: Store,
      status: "Planned",
      color: "bg-gradient-to-r from-orange-600 to-red-600",
    },
  ];

  return (
    <section className="relative z-20 text-white">
      <article className="w-full py-20 bg-gradient-to-b from-gray-900/50 to-[#0a0a0a]">
        <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Product</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}
                Roadmap
              </span>
            </h2>
            <hr className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey doesn&apos;t end with the router. Discover what&apos;s
              coming next in our mission to revolutionize online privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {roadmapItems.map((item, index) => (
              <div key={item.id} className="text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full ${item.color}`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-2 rounded-full text-sm font-medium text-white bg-orange-500/80">
                      {item.status}
                    </span>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 px-1">
                  {item.title}
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 mb-4">
                  {item.subtitle}
                </h3>
                <hr className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 my-4 rounded-full" />

                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
