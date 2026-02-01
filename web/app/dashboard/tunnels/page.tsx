"use client";

import { useEffect, useState } from "react";

const USER_ID = "4c9ab938-757c-4ed4-99e7-7fd3dc1a6e84";

interface PeerInfo {
  id: string;
  name: string;
  ip: string | null;
  connected: boolean;
  hostname: string | null;
  countryCode?: string | null;
  cityName?: string | null;
}

interface TravelRouterEntry {
  peer: PeerInfo;
}

interface Tunnel {
  id: string;
  name: string | null;
  enabled: boolean;
  exitNode: PeerInfo;
  travelRouters: TravelRouterEntry[];
  createdAt: string;
}

type Step = "idle" | "exit-node" | "travel-routers" | "confirm" | "creating";

export default function Tunnels() {
  const [tunnels, setTunnels] = useState<Tunnel[]>([]);
  const [peers, setPeers] = useState<PeerInfo[]>([]);
  const [loading, setLoading] = useState(true);

  // Wizard state
  const [step, setStep] = useState<Step>("idle");
  const [selectedExitNode, setSelectedExitNode] = useState<PeerInfo | null>(
    null
  );
  const [selectedTravelRouters, setSelectedTravelRouters] = useState<
    PeerInfo[]
  >([]);
  const [tunnelName, setTunnelName] = useState("");

  const fetchTunnels = async () => {
    const res = await fetch(`/api/tunnels?userId=${USER_ID}`);
    return res.json();
  };

  const fetchPeers = async () => {
    const res = await fetch("/api/heartbeat");
    return res.json();
  };

  const loadData = async () => {
    const [t, p] = await Promise.all([fetchTunnels(), fetchPeers()]);
    setTunnels(t);
    setPeers(p);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startWizard = () => {
    setStep("exit-node");
    setSelectedExitNode(null);
    setSelectedTravelRouters([]);
    setTunnelName("");
  };

  const cancelWizard = () => setStep("idle");

  const pickExitNode = (peer: PeerInfo) => {
    setSelectedExitNode(peer);
    setStep("travel-routers");
  };

  const toggleTravelRouter = (peer: PeerInfo) => {
    setSelectedTravelRouters((prev) => {
      const exists = prev.find((p) => p.id === peer.id);
      if (exists) return prev.filter((p) => p.id !== peer.id);
      if (prev.length >= 3) return prev;
      return [...prev, peer];
    });
  };

  const createTunnel = async () => {
    if (!selectedExitNode || selectedTravelRouters.length === 0) return;
    setStep("creating");

    const res = await fetch("/api/tunnels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: USER_ID,
        exitNodeId: selectedExitNode.id,
        travelRouterIds: selectedTravelRouters.map((p) => p.id),
        name: tunnelName || null,
      }),
    });

    if (res.ok) {
      await loadData();
      setStep("idle");
    } else {
      const err = await res.json();
      alert(err.error || "Failed to create tunnel");
      setStep("confirm");
    }
  };

  const deleteTunnel = async (id: string) => {
    if (!confirm("Delete this tunnel?")) return;
    await fetch(`/api/tunnels?id=${id}`, { method: "DELETE" });
    await loadData();
  };

  if (loading) {
    return <div className="p-6 text-gray-400">Loading...</div>;
  }

  if (step === "exit-node") {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Step 1: Select Exit Node</h2>
          <button
            onClick={cancelWizard}
            className="text-sm text-gray-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
        <div className="space-y-2">
          {peers.map((peer) => (
            <button
              key={peer.id}
              onClick={() => pickExitNode(peer)}
              className="w-full text-left p-4 rounded-lg border border-gray-700 hover:border-blue-500 bg-gray-900 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{peer.name}</span>
                  <span className="text-gray-400 text-sm ml-2">
                    {peer.ip || "no ip"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {peer.cityName && (
                    <span className="text-gray-400">
                      {peer.cityName}
                      {peer.countryCode ? `, ${peer.countryCode}` : ""}
                    </span>
                  )}
                  <span
                    className={
                      peer.connected ? "text-green-400" : "text-red-400"
                    }
                  >
                    {peer.connected ? "● online" : "● offline"}
                  </span>
                </div>
              </div>
              {peer.hostname && (
                <p className="text-gray-500 text-sm mt-1">{peer.hostname}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "travel-routers") {
    const available = peers.filter((p) => p.id !== selectedExitNode?.id);
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Step 2: Select Travel Routers (max 3)
          </h2>
          <button
            onClick={cancelWizard}
            className="text-sm text-gray-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Exit node:{" "}
          <span className="text-white">{selectedExitNode?.name}</span> — select
          1–3 travel routers
        </p>
        <div className="space-y-2 mb-6">
          {available.map((peer) => {
            const selected = selectedTravelRouters.some(
              (p) => p.id === peer.id
            );
            const disabled = !selected && selectedTravelRouters.length >= 3;
            return (
              <button
                key={peer.id}
                onClick={() => !disabled && toggleTravelRouter(peer)}
                disabled={disabled}
                className={`w-full text-left p-4 rounded-lg border transition ${
                  selected
                    ? "border-blue-500 bg-blue-950"
                    : disabled
                      ? "border-gray-800 bg-gray-950 opacity-50 cursor-not-allowed"
                      : "border-gray-700 hover:border-blue-500 bg-gray-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{peer.name}</span>
                    <span className="text-gray-400 text-sm ml-2">
                      {peer.ip || "no ip"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {selected && <span className="text-blue-400">✓</span>}
                    <span
                      className={
                        peer.connected ? "text-green-400" : "text-red-400"
                      }
                    >
                      {peer.connected ? "● online" : "● offline"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => selectedTravelRouters.length > 0 && setStep("confirm")}
          disabled={selectedTravelRouters.length === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-40 hover:bg-blue-500 transition"
        >
          Continue ({selectedTravelRouters.length} selected)
        </button>
      </div>
    );
  }

  if (step === "confirm" || step === "creating") {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Step 3: Confirm Tunnel</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">
            Tunnel name (optional)
          </label>
          <input
            type="text"
            value={tunnelName}
            onChange={(e) => setTunnelName(e.target.value)}
            placeholder={`${selectedExitNode?.name} ↔ ${selectedTravelRouters.map((p) => p.name).join(", ")}`}
            className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 text-white"
          />
        </div>
        <div className="p-4 rounded-lg bg-gray-900 border border-gray-700 mb-6 space-y-3">
          <div>
            <span className="text-sm text-gray-400">Exit Node:</span>
            <p className="font-medium">
              {selectedExitNode?.name}{" "}
              <span className="text-gray-400 text-sm">
                ({selectedExitNode?.ip || "no ip"})
              </span>
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-400">Travel Routers:</span>
            {selectedTravelRouters.map((p) => (
              <p key={p.id} className="font-medium">
                {p.name}{" "}
                <span className="text-gray-400 text-sm">
                  ({p.ip || "no ip"})
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={cancelWizard}
            className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
          >
            Cancel
          </button>
          <button
            onClick={createTunnel}
            disabled={step === "creating"}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-40 hover:bg-blue-500 transition"
          >
            {step === "creating" ? "Creating..." : "Create Tunnel"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Tunnels</h1>
        <button
          onClick={startWizard}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          + New Tunnel
        </button>
      </div>

      {tunnels.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 mb-4">No tunnels configured yet.</p>
          <button
            onClick={startWizard}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition text-lg"
          >
            Create Your First Tunnel
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {tunnels.map((t) => (
            <div
              key={t.id}
              className="p-5 rounded-xl border border-gray-700 bg-gray-900"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  {t.name ||
                    `${t.exitNode.name} ↔ ${t.travelRouters.map((tr) => tr.peer.name).join(", ")}`}
                </h3>
                <button
                  onClick={() => deleteTunnel(t.id)}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Exit Node</span>
                  <p className="mt-1">
                    <span
                      className={
                        t.exitNode.connected ? "text-green-400" : "text-red-400"
                      }
                    >
                      ●
                    </span>{" "}
                    {t.exitNode.name}{" "}
                    <span className="text-gray-500">{t.exitNode.ip}</span>
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Travel Routers</span>
                  {t.travelRouters.map((tr) => (
                    <p key={tr.peer.id} className="mt-1">
                      <span
                        className={
                          tr.peer.connected ? "text-green-400" : "text-red-400"
                        }
                      >
                        ●
                      </span>{" "}
                      {tr.peer.name}{" "}
                      <span className="text-gray-500">{tr.peer.ip}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
