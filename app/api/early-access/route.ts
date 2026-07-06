 "use client";

import { FormEvent, useState } from "react";

export default function EarlyAccessPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      role: String(formData.get("role") || "").trim(),
      school_clinic: String(formData.get("school_clinic") || "").trim(),
      frustration: String(formData.get("frustration") || "").trim(),
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setMessage("Please enter your name and email.");
      return;
    }

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("You are on the early access list!");

      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong submitting the form."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f8f6] text-slate-900">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              PeakMotion
            </p>

            <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
              Join the early access list.
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-700">
              PeakMotion is being built around real clinical workflows. Join the
              early access list to follow the build, test new features, and help
              create software that thinks like a therapist.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
              <p className="text-lg">✓ Get first access to the private beta</p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
              <p className="text-lg">✓ Share feedback that shapes the product</p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
              <p className="text-lg">✓ Follow product updates before launch</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-xl md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Request Early Access
              </h2>
              <p className="mt-3 text-slate-600">
                Fill this out so we know who is interested in PeakMotion.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="SPT, PT, PTA, CI..."
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="school_clinic"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  School / Clinic
                </label>
                <input
                  id="school_clinic"
                  name="school_clinic"
                  type="text"
                  placeholder="Your school or clinic name"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="frustration"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Biggest frustration with current HEP software
                </label>
                <textarea
                  id="frustration"
                  name="frustration"
                  placeholder="Searching for exercises takes too long..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-emerald-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Submit Early Access Request"}
              </button>

              {message && (
                <div
                  className={`rounded-2xl p-4 font-semibold ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              <p className="text-center text-sm text-slate-500">
                No spam. Just product updates and beta invitations.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}