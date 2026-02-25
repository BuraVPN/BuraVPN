"use client";

import { useState, useEffect } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import DeviceMetadata from "@/components/dashboard/ui/DeviceMetadata";

type Device = {
  id: string;
  deviceId: string;
  name?: string;
  lastSeenAt?: string;
  registeredAt?: string;
};

export default function UserDashboard() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/devices");
      const data = await res.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch devices");
      setDevices(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const openModal = () => {
    setDeviceId("");
    setPassword("");
    setSubmitError(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSubmitError(null);
  };

  const handleAddDevice = async () => {
    if (!deviceId.trim() || !password.trim()) {
      setSubmitError("Device ID and password are required.");
      return;
    }

    try {
      setSubmitting(true);
      setSubmitError(null);

      const res = await fetch("/api/devices/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to add device");
      }

      closeModal();
      await fetchDevices();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-between mx-5">
            <h1 className="h1-titles">DEVICES</h1>
            <button
              onClick={openModal}
              className="my-5 px-4 py-2 border-none bg-white text-color-black rounded-xl"
            >
              <Plus color="black" />
            </button>
          </div>
          <hr className="w-full h-[1px] border-none bg-gray-700" />
        </div>

        <section className="w-full mt-5 flex flex-col items-center px-5">
          {loading && (
            <div className="animate-pulse space-y-4 w-full">
              <div className="h-16 bg-gray-200 rounded" />
              <div className="h-16 bg-gray-200 rounded" />
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 w-full">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchDevices}
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && devices.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg w-full">
              <p className="text-gray-500">No devices registered yet.</p>
              <button
                onClick={openModal}
                className="mt-4 px-4 py-2 bg-black text-white rounded-xl"
              >
                Add your first device
              </button>
            </div>
          )}

          {!loading &&
            devices.map((device) => (
              <DeviceMetadata
                key={device.id}
                id={device.id}
                name={device.name || device.deviceId}
                isConnected={
                  !!device.lastSeenAt &&
                  Date.now() - new Date(device.lastSeenAt).getTime() < 60_000
                }
                lastSeen={device.lastSeenAt}
              />
            ))}
        </section>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Add Device</h2>
              <button onClick={closeModal}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Device ID
                </label>
                <input
                  type="text"
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                  placeholder="BURA-XXXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Device password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  onKeyDown={(e) => e.key === "Enter" && handleAddDevice()}
                />
              </div>

              {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
              )}

              <button
                onClick={handleAddDevice}
                disabled={submitting}
                className="w-full py-2 bg-black text-white rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting && <Loader2 size={16} className="animate-spin" />}
                {submitting ? "Adding..." : "Add Device"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
