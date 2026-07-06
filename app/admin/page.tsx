"use client";

import { useEffect, useState } from "react";

type Signup = {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  created_at?: string;
  createdAt?: string;
};

export default function AdminPage() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSignups() {
      try {
        const res = await fetch("/api/admin/signups");

        if (!res.ok) {
          throw new Error("Failed to load signups");
        }

        const data = await res.json();

        setSignups(Array.isArray(data) ? data : data.signups || []);
      } catch (err) {
        setError("Could not load early access signups.");
      } finally {
        setLoading(false);
      }
    }

    loadSignups();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">PeakMotion Admin</h1>
          <p className="mt-2 text-gray-400">
            View early access signups and admin information.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Early Access Signups</h2>

          {loading && <p className="text-gray-400">Loading signups...</p>}

          {error && <p className="text-red-400">{error}</p>}

          {!loading && !error && signups.length === 0 && (
            <p className="text-gray-400">No signups yet.</p>
          )}

          {!loading && !error && signups.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Email</th>
                    <th className="py-3 pr-4">Role</th>
                    <th className="py-3 pr-4">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {signups.map((signup, index) => (
                    <tr key={signup.id || index} className="border-bborder-white/10">
                      <td className="py-3 pr-4">{signup.name || "—"}</td>
                      <td className="py-3 pr-4">{signup.email || "—"}</td>
                      <td className="py-3 pr-4">{signup.role || "—"}</td>
                      <td className="py-3 pr-4">
                        {signup.created_at || signup.createdAt
                          ? new Date(
                              signup.created_at || signup.createdAt || ""
                            ).toLocaleDateString()
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}