"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

type FormState = {
  fullName: string;
  email: string;
  role: string;
  organization: string;
  frustration: string;
};

export default function EarlyAccessPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    role: "",
    organization: "",
    frustration: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "You're on the PeakMotion early access list.");

      setForm({
        fullName: "",
        email: "",
        role: "",
        organization: "",
        frustration: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAF9] px-6 py-10 text-[#0F172A]">
      <Link href="/" className="mx-auto flex max-w-6xl items-center gap-3">
        <Image
          src="/pm-logo.png"
          alt="PeakMotion Logo"
          width={52}
          height={52}
        />

        <div>
          <p className="text-xl font-bold">PeakMotion</p>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0D8B6F]">
            Built Around How Therapists Think
          </p>
        </div>
      </Link>

      <section className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#0D8B6F]">
            Private Beta
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight tracking-tight">
            Help shape the future of HEP software.
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            PeakMotion is being built around real clinical workflows. Join the
            early access list to follow the build, test new features, and help
            create software that thinks like a therapist.
          </p>

          <div className="mt-10 grid gap-4">
            <Benefit text="Get first access to the private beta" />
            <Benefit text="Share feedback that shapes the product" />
            <Benefit text="Follow product updates before launch" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl">
          <h2 className="text-3xl font-bold">Join Early Access</h2>

          <p className="mt-3 text-slate-600">
            Tell us a little about yourself.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <Field
              label="Full Name"
              placeholder="Drew Pate"
              value={form.fullName}
              onChange={(value) => updateField("fullName", value)}
              required
            />

            <Field
              label="Email"
              placeholder="drew.pate@peakmotionhealth.com"
              type="email"
              value={form.email}
              onChange={(value) => updateField("email", value)}
              required
            />

            <Field
              label="Role"
              placeholder="SPT, PT, PTA, OT, AT, Clinic Owner..."
              value={form.role}
              onChange={(value) => updateField("role", value)}
            />

            <Field
              label="School / Clinic"
              placeholder="Your school or clinic name"
              value={form.organization}
              onChange={(value) => updateField("organization", value)}
            />

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Biggest frustration with current HEP software
              </label>

              <textarea
                value={form.frustration}
                onChange={(event) =>
                  updateField("frustration", event.target.value)
                }
                placeholder="Searching for exercises takes too long..."
                className="mt-2 min-h-32 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-[#0D8B6F] focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-[#0D8B6F] px-6 py-4 font-semibold text-white transition hover:bg-[#0B735C] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading"
                ? "Submitting..."
                : "Submit Early Access Request"}
            </button>

            {message && (
              <div
                className={`rounded-2xl p-4 text-sm font-semibold ${
                  status === "success"
                    ? "bg-emerald-50 text-[#0D8B6F]"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {message}
              </div>
            )}

            <p className="text-center text-sm text-slate-500">
              No spam. Just product updates and beta invitations.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">{label}</label>

      <input
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-[#0D8B6F] focus:ring-4 focus:ring-emerald-100"
      />
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      ✓ {text}
    </div>
  );
}