"use client";

import { useState, useEffect } from "react";
import DeviceMetada from "@/components/dashboard/ui/DeviceMetadata";
import { Plus } from "lucide-react";

type Peer = {
  id: string;
  netbirdId: string;
  name: string;
  connectionIp: string;
  connected: boolean;
  hostname?: string;
  os?: string;
  lastSeen?: string;
  countryCode: string;
  cityName: string;
};

type GroupPeer = {
  id: string;
  peer: Peer;
  addedAt: string;
};

type Group = {
  id: string;
  netbirdId: string;
  name: string;
  peersCount: number;
  resourcesCount: number;
  issued?: string;
  groupPeers: GroupPeer[];
  createdAt: string;
};

type User = {
  id: string;
  name: string;
  email?: string;
  groups: Group[];
  createdAt: string;
};

type ApiResponse = {
  success: boolean;
  data: User;
  error?: string;
  message?: string;
};

export default function UserDashboard() {
  const [user, setUser] = useState<User | null>(null);
  console.log(user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = "4c9ab938-757c-4ed4-99e7-7fd3dc1a6e84";

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/users?userId=${userId}`);
      const data: ApiResponse = await response.json();

      if (data.success) {
        setUser(data.data);
        console.log(`Loaded user: ${data.data.name}`);
      } else {
        throw new Error(data.message || "Failed to fetch user");
      }
    } catch (err) {
      console.error("Fetch user error:", err);
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-800 font-semibold mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchUser}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-8">
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">User not found</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-between mx-5">
            <h1 className="h1-titles">DEVICES</h1>
            <button className="my-5 px-4 py-2 border-none bg-white text-color-black rounded-xl">
              <Plus color="black" />
            </button>
          </div>
          <hr className="w-full h-[1px] border-none bg-gray-700" />
        </div>

        <section className="w-full mt-5 flex flex-col items-center text-black">
          {user.groups
            .flatMap((g) => g.groupPeers)
            .map((element) => (
              <DeviceMetada
                key={element.peer.id}
                name={element.peer.name}
                publicIP={element.peer.connectionIp}
                countryCode={element.peer.countryCode}
                city={element.peer.cityName}
                isConnected={element.peer.connected}
                id={element.peer.id}
              />
            ))}
        </section>
        <button
          onClick={fetchUser}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Refresh
        </button>
      </div>
    </>
  );
}
