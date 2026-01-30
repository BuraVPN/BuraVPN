import { Ellipsis, Wifi, WifiOff, Clock, Router } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  vpnIP?: string;
  isConnected: boolean;
  lastSeen?: string;
  id: string;
};

function formatLastSeen(lastSeen?: string): string {
  if (!lastSeen) return "Never";

  const diff = Date.now() - new Date(lastSeen).getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 30) return "Just now";
  if (seconds < 60) return `${seconds}s ago`;
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export default function DeviceMetadata({
  name,
  vpnIP,
  isConnected,
  lastSeen,
  id,
}: Props) {
  return (
    <div className="w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 mb-3 border border-gray-700 hover:border-gray-600 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`relative p-3 rounded-lg ${isConnected ? "bg-green-500/10" : "bg-gray-700/50"}`}
          >
            <Router
              className={`w-6 h-6 ${isConnected ? "text-green-400" : "text-gray-500"}`}
            />
            <span
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${isConnected ? "bg-green-500 animate-pulse" : "bg-gray-500"}`}
            />
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <div className="flex items-center gap-3 mt-1">
              {vpnIP && (
                <span className="text-sm text-gray-400 font-mono bg-gray-700/50 px-2 py-0.5 rounded">
                  {vpnIP}
                </span>
              )}
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <Clock className="w-3 h-3" />
                <span>{formatLastSeen(lastSeen)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${isConnected ? "bg-green-500/10 text-green-400" : "bg-gray-700/50 text-gray-400"}`}
          >
            {isConnected ? (
              <Wifi className="w-4 h-4" />
            ) : (
              <WifiOff className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {isConnected ? "Online" : "Offline"}
            </span>
          </div>

          <Link
            href={`/dashboard/devices/${id}`}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            <Ellipsis className="w-5 h-5 text-gray-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
