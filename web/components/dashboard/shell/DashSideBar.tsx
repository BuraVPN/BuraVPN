"use client";

import Navigation from "../ui/Navigation";
import { Shrink, Expand } from "lucide-react";
import { useState } from "react";

export default function DashSidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const toggleMinimizetion = () => {
    setIsMinimized((s) => !s);
  };
  return (
    <aside className="hidden md:flex w-auto flex-col bg-gray-900 text-white self-start h-screen pt-10">
      <button
        className="border-t border-l border-b border-gray self-end mb-10 p-2 cursor-pointer"
        onClick={toggleMinimizetion}
      >
        {!isMinimized ? <Shrink /> : <Expand />}
      </button>

      <Navigation isMinimized={isMinimized} />
    </aside>
  );
}
