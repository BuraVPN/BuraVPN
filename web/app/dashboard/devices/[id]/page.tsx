"use client";
import { useState, useEffect } from "react";
import {
  Network,
  Globe,
  Laptop,
  Monitor,
  Server,
  MapPin,
  Clock,
  LucideIcon,
  Calendar,
} from "lucide-react";

type Peer = {
  id: string;
  netbirdPeerId: string;
  name: string;
  ip?: string;
  connectionIp?: string;
  connected: boolean;
  hostname?: string;
  os?: string;
  lastSeen?: string;
  countryCode?: string;
  cityName?: string;
  kernelVersion?: string;
  countryName?: string;
  createdAt?: string;
};

type ApiResponse = {
  success: boolean;
  data: Peer;
  synced?: boolean;
  updated?: boolean;
  message?: string;
  error?: string;
};

type DetailField = {
  icon: LucideIcon;
  label: string;
  value: (peer: Peer) => string;
  className?: string;
};

const detailFields: DetailField[] = [
  {
    icon: Network,
    label: "BuraVPN IP Address",
    value: (peer) => peer.ip || "N/A",
    className: "font-mono",
  },
  {
    icon: Globe,
    label: "Public IP",
    value: (peer) => peer.connectionIp || "N/A",
    className: "font-mono",
  },
  {
    icon: Laptop,
    label: "Hostname",
    value: (peer) => peer.hostname || "N/A",
  },
  {
    icon: Monitor,
    label: "Operating System",
    value: (peer) => peer.os || "N/A",
  },
  {
    icon: Server,
    label: "Kernel Version",
    value: (peer) => peer.kernelVersion || "N/A",
    className: "font-mono text-sm",
  },
  {
    icon: MapPin,
    label: "Location",
    value: (peer) =>
      peer.cityName && peer.countryCode
        ? `${peer.cityName}, ${peer.countryName}`
        : "N/A",
  },
  {
    icon: Clock,
    label: "Last Seen",
    value: (peer) =>
      peer.lastSeen ? new Date(peer.lastSeen).toLocaleString() : "Never",
  },
  {
    icon: Calendar,
    label: "Regstration Date",
    value: (peer) =>
      peer.createdAt ? new Date(peer.createdAt).toLocaleString() : "N/A",
  },
];

function DetailRow({
  icon: Icon,
  label,
  value,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-3 p-4 border-[1px] border-b border-gray-800  last:border-b-0">
      <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-sm text-gray-200">{label}</p>
        <p className={`text-gray-500 ${className}`}>{value}</p>
      </div>
    </div>
  );
}

export default function DeviceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [peerDetails, setPeerDetails] = useState<Peer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [peerId, setPeerId] = useState<string | null>(null);

  useEffect(() => {
    params.then(({ id }) => {
      setPeerId(id);
    });
  }, [params]);

  const fetchPeer = async () => {
    if (!peerId) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/peers/${peerId}`);
      const data: ApiResponse = await response.json();

      if (data.success) {
        setPeerDetails(data.data);
        console.log(`Loaded peer: ${data.data.name}`);

        if (data.updated) {
          console.log(`Peer was updated from NetBird`);
        }
      } else {
        throw new Error(data.message || data.error || "Failed to fetch peer");
      }
    } catch (err) {
      console.error("Fetch peer error:", err);
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  const handleSync = () => {
    setSyncing(true);
    fetchPeer();
  };

  useEffect(() => {
    if (peerId) {
      fetchPeer();
    }
  }, [peerId]);

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
            onClick={fetchPeer}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!peerDetails) {
    return (
      <div className="p-8">
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">Peer not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mx-3 my-6 ">
        <h1 className="text-3xl font-bold">{peerDetails.name}</h1>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {syncing ? "Syncing..." : "Sync"}
        </button>
      </div>

      <div className="w-full border-b-[0.5px] border-gray-700 overflow-hidden">
        <div className="flex items-center gap-2 p-3 border-b border-gray-200">
          <div
            className={`w-3 h-3 rounded-full ${
              peerDetails.connected
                ? "bg-green-500 animate-pulse"
                : "bg-gray-400"
            }`}
          />
          <span className="text-sm font-medium text-gray-300">
            {peerDetails.connected ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {detailFields.map((field, index) => (
        <DetailRow
          key={index}
          icon={field.icon}
          label={field.label}
          value={field.value(peerDetails)}
          className={field.className}
        />
      ))}
    </div>
  );
}
