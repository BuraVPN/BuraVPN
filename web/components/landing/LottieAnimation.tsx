"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

type Props = {
  animation:
    | "p-and-p.lottie"
    | "home-ip.lottie"
    | "p-p-new.lottie"
    | "payment.lottie"
    | "router.lottie"
    | "globe.lottie"
    | "home-ip.lottie"
    | "email.lottie";
  speed?: number;
};

export default function LottieAnimation({ animation, speed }: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DotLottieReact
        src={animation}
        loop
        autoplay
        speed={speed}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
