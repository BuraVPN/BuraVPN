"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function SetupPending() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 2000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
        <p className="text-lg font-medium">Setting up your account...</p>
        <p className="text-sm text-gray-500">This may take a few seconds</p>
      </div>
    </div>
  );
}
