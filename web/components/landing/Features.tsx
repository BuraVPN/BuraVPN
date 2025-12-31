import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: "one-time-payment",
      title: "One-Time Payment",
      description: [
        "No subscriptions, no monthly bills.",
        "A single purchase for a lifetime of access.",
        "Secure your internet without recurring costs.",
      ],
      image: "/card.png",
      alt: "paying with card icon",
      reverse: false,
    },
    {
      id: "router",
      title: "Router Protection",
      description: [
        "Protects your entire network, not just one device.",
        "No software to install on individual devices.",
        "A simple and reliable hardware solution.",
      ],
      image: "/router.png",
      alt: "router icon",
      reverse: true,
    },
    {
      id: "plug-and-play",
      title: "Plug & Play Simplicity",
      description: [
        "Instantly protected with zero configuration.",
        "Easy to set up in just a few minutes.",
        "Enjoy security without the technical hassle.",
      ],
      image: "/plug.png",
      alt: "plug icon",
      reverse: false,
    },
    {
      id: "works-everywhere",
      title: "Works Everywhere",
      description: [
        "Bypass censorship and geo-restrictions.",
        "Access content as if you were home.",
        "Ultimate tool for internet freedom abroad.",
      ],
      image: "/world.png",
      alt: "world icon",
      reverse: true,
    },
    {
      id: "residential-ip",
      title: "Residential IP",
      description: [
        "Access to your Home IP from everywhere.",
        "Avoid detection and online flagging.",
        "Enjoy unblocked access to online services.",
      ],
      image: "/home.png",
      alt: "home icon",
      reverse: false,
    },
  ];

  return (
    <section className="relative z-20 text-white bg-black">
      {features.map((feature, index) => (
        <article
          key={feature.id}
          className={`${
            index === 0 ? "scroll-mt-20" : ""
          } w-full py-14 md:py-20 flex flex-col ${
            feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } md:items-stretch gap-6 md:gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D] hover:from-[#111111] hover:via-[#1F1F1F] hover:to-[#111111] transition-all duration-500 ease-in-out group`}
        >
          <div
            className={`max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-6 md:gap-10 items-stretch w-full`}
          >
            <div className="w-full md:w-[45%] flex flex-col justify-center group-hover:transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2
                id={feature.id}
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight break-words"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 group-hover:from-white group-hover:to-gray-300 block transition-all duration-300">
                  {feature.title}
                </span>
              </h2>
              <hr className="w-24 h-1 bg-gray-600 group-hover:bg-gray-400 group-hover:w-32 my-4 rounded-full transition-all duration-300 ease-in-out" />
              <ul className="custom-list-style space-y-2 text-gray-300 group-hover:text-gray-100 text-base md:text-lg transition-colors duration-300">
                {feature.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[55%] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full bg-[#171717] group-hover:bg-[#1F1F1F] rounded-xl p-8 md:p-12 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-gray-800/50">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  priority={index === 0}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  style={{
                    height: "90%",
                    width: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
