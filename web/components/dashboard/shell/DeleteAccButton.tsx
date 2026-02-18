"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteAccountButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (confirmText !== "DELETE") return;

    setIsDeleting(true);
    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/login");
      } else {
        alert("Failed to delete account");
      }
    } catch (error) {
      alert("Failed to delete account");
    } finally {
      setIsDeleting(false);
    }
  };

  if (!showConfirm) {
    return (
      <button
        onClick={() => setShowConfirm(true)}
        className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
      >
        Delete Account
      </button>
    );
  }

  return (
    <div className="p-4 border border-red-300 rounded-lg bg-red-50">
      <h3 className="font-medium text-red-800">Are you sure?</h3>
      <p className="mt-1 text-sm text-red-600">
        This will permanently delete your account, all your devices, tunnels,
        and NetBird resources. This action cannot be undone.
      </p>
      <p className="mt-3 text-sm text-gray-700">
        Type <span className="font-mono font-bold">DELETE</span> to confirm:
      </p>
      <input
        type="text"
        value={confirmText}
        onChange={(e) => setConfirmText(e.target.value)}
        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="DELETE"
      />
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleDelete}
          disabled={confirmText !== "DELETE" || isDeleting}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDeleting ? "Deleting..." : "Delete My Account"}
        </button>
        <button
          onClick={() => {
            setShowConfirm(false);
            setConfirmText("");
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
