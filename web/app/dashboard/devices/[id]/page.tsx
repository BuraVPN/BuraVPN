"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  Trash2,
  X,
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
  error?: string;
  message?: string;
};

type DetailField = {
  icon: LucideIcon;
  label: string;
  value: (peer: Peer) => string;
  className?: string;
};

const CONFIRM_STRING = "DELETE_PEER";

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
    label: "Registration Date",
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
    <div className="flex items-center gap-3 p-4 border-[1px] border-b border-gray-800 last:border-b-0">
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
  const router = useRouter();
  const [peerDetails, setPeerDetails] = useState<Peer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [peerId, setPeerId] = useState<string | null>(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    params.then(({ id }) => setPeerId(id));
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
      } else {
        throw new Error(data.message || data.error || "Failed to fetch peer");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (peerId) fetchPeer();
  }, [peerId]);

  const handleDelete = async () => {
    if (!peerId || confirmInput !== CONFIRM_STRING) return;
    try {
      setDeleting(true);
      setDeleteError(null);
      const res = await fetch(`/api/peers/${peerId}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to delete peer");
      }
      router.push("/dashboard/devices");
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setDeleting(false);
    }
  };

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
      <div className="flex justify-between items-center mx-3 my-6">
        <h1 className="text-3xl font-bold">{peerDetails.name}</h1>
        <button
          onClick={() => {
            setConfirmInput("");
            setDeleteError(null);
            setDeleteModalOpen(true);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition flex items-center gap-2"
        >
          <Trash2 size={16} />
          Delete
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

      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Delete Peer</h2>
              <button onClick={() => setDeleteModalOpen(false)}>
                <X size={20} className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-2">
              Ova akcija će obrisati peer iz baze i s NetBirda, te resetirati
              device. Uređaj će se isključiti s mreže.
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Upiši{" "}
              <span className="font-mono text-red-400">{CONFIRM_STRING}</span>{" "}
              za potvrdu:
            </p>

            <input
              type="text"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              placeholder={CONFIRM_STRING}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 font-mono mb-4"
            />

            {deleteError && (
              <p className="text-red-400 text-sm mb-4">{deleteError}</p>
            )}

            <button
              onClick={handleDelete}
              disabled={confirmInput !== CONFIRM_STRING || deleting}
              className="w-full py-2 bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-700 transition"
            >
              <Trash2 size={16} />
              {deleting ? "Deleting..." : "Delete Peer"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
