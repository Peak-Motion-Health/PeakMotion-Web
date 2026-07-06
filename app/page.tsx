"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ForPatients from "./components/landing/ForPatients";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "For Providers", href: "#providers" },
  { label: "For Patients", href: "#patients" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

const trustedBy = [
  "Summit PT",
  "Apex Performance",
  "Elevate Sports Medicine",
  "Next Level Rehab",
  "Peak Athletics",
];

const features = [
  {
    icon: "👥",
    title: "Patient Management",
    description:
      "Keep patients, appointments, notes, care plans, and communication organized in one simple dashboard.",
  },
  {
    icon: "🏋️",
    title: "HEP Builder",
    description:
      "Create personalized home exercise programs with clear instructions, progressions, and patient-friendly layouts.",
  },
  {
    icon: "🎥",
    title: "Exercise Library",
    description:
      "Build from a growing library of exercises with videos, cues, regressions, progressions, and clinical notes.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description:
      "Track outcomes, pain, strength, range of motion, adherence, and patient progress over time.",
  },
  {
    icon: "🔒",
    title: "Secure Care Tools",
    description:
      "Designed with privacy, security, and clinical workflows in mind as the platform continues to grow.",
  },
  {
    icon: "🌎",
    title: "Access Anywhere",
    description:
      "Use PeakMotion from the clinic, gym, field, training room, or wherever care and performance happen.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    audience: "For solo providers, students, or early testers.",
    price: "Early Access",
    description:
      "A simple way to start organizing patients, building HEPs, and testing the PeakMotion workflow.",
    features: [
      "Patient dashboard",
      "HEP builder",
      "Exercise library access",
      "Basic progress tracking",
      "Early product updates",
    ],
  },
  {
    name: "Clinic",
    audience: "For outpatient clinics and small rehab teams.",
    price: "Most Popular",
    description:
      "Built for providers who need better systems for patient care, adherence, and team workflows.",
    features: [
      "Everything in Starter",
      "Team-ready workflows",
      "Provider dashboard",
      "Outcome tracking",
      "Patient engagement tools",
    ],
  },
  {
    name: "Performance Team",
    audience: "For sports teams, ATs, and performance facilities.",
    price: "Team Access",
    description:
      "Designed for athlete management, return-to-sport tracking, and performance-based rehab.",
    features: [
      "Athlete management",
      "Return-to-sport tracking",
      "Performance notes",
      "Team communication tools",
      "Advanced reporting roadmap",
    ],
  },
];

const resourceCards = [
  {
    title: "Clinical Templates",
    description:
      "Future templates for evals, progress notes, outcome measures, and patient education.",
  },
  {
    title: "Exercise Guides",
    description:
      "Helpful exercise breakdowns with cues, regressions, progressions, and clinical reasoning.",
  },
  {
    title: "Product Updates",
    description:
      "Follow along as PeakMotion grows from early access into a full rehab platform.",
  },
];

function PeakMotionLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/peakmotion-logo.png"
        alt="PeakMotion Logo"
        width={48}
        height={48}
        priority
        className="h-12 w-12 rounded-full object-contain"
      />

      <div className="flex flex-col leading-none">
        <div className="text-xl font-black tracking-tight text-slate-950">
          PEAK<span className="text-emerald-700">MOTION</span>
        </div>

        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
          Rehab & Performance
        </div>
      </div>
    </Link>
  );
}

function DashboardPreview() {
  const schedule = [
    ["9:00 AM", "JS", "John Smith", "TKA · 2 weeks post-op", "85%"],
    ["10:00 AM", "MJ", "Mary Johnson", "Rotator Cuff Repair", "92%"],
    ["11:00 AM", "DW", "David Wilson", "Low Back Pain", "60%"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-emerald-100/50 blur-3xl" />

      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/60">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="hidden rounded-full border border-slate-200 bg-white px-4 py-1 text-[11px] font-bold text-slate-400 sm:block">
            app.peakmotion.com/dashboard
          </div>

          <div className="h-6 w-6 rounded-full bg-slate-200" />
        </div>

        <div className="grid min-h-[430px] grid-cols-[140px_1fr] bg-white">
          <aside className="hidden bg-slate-950 p-4 text-white sm:block">
            <div className="mb-6 text-xs font-black tracking-wide">
              PEAK<span className="text-emerald-400">MOTION</span>
            </div>

            <div className="space-y-1.5 text-xs">
              {[
                "Dashboard",
                "Patients",
                "HEP Builder",
                "Exercise Library",
                "Templates",
                "Messages",
                "Reports",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-xl px-3 py-2 ${
                    index === 0
                      ? "bg-emerald-600 text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-slate-300">
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                DP
              </div>
              <div className="font-black text-white">Drew Pate, SPT</div>
              <div>Provider Account</div>
            </div>
          </aside>

          <div className="p-4">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-black text-slate-950">
                  Good morning, Drew! 👋
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Today’s schedule, adherence, and patient activity.
                </p>
              </div>

              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-lg shadow-emerald-600/20">
                + New Patient
              </button>
            </div>

            <div className="mb-4 grid gap-3 md:grid-cols-3">
              {[
                ["12", "Visits Today"],
                ["86%", "Avg. Adherence"],
                ["4", "Alerts"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3"
                >
                  <p className="text-xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-[11px] font-bold text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-black text-slate-950">
                    Today’s Schedule
                  </h3>
                  <p className="text-xs font-black text-emerald-700">
                    View All →
                  </p>
                </div>

                <div className="space-y-3">
                  {schedule.map(([time, initials, name, detail, progress]) => (
                    <div key={name} className="rounded-2xl bg-slate-50 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-black text-emerald-700">
                            {initials}
                          </div>

                          <div>
                            <p className="text-[11px] font-black text-slate-400">
                              {time}
                            </p>
                            <p className="text-sm font-black text-slate-950">
                              {name}
                            </p>
                            <p className="text-xs text-slate-500">{detail}</p>
                          </div>
                        </div>

                        <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-[11px] font-black text-emerald-700">
                          Start
                        </span>
                      </div>

                      <div className="mt-3 h-1.5 rounded-full bg-slate-200">
                        <div
                          className="h-1.5 rounded-full bg-emerald-600"
                          style={{ width: progress }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="mb-4 text-sm font-black text-slate-950">
                    HEP Adherence
                  </h3>

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[12px] border-emerald-600 bg-white shadow-inner">
                    <div className="text-center">
                      <p className="text-2xl font-black text-slate-950">78%</p>
                      <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                        Overall
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-xs font-bold text-slate-600">
                    <div className="flex justify-between">
                      <span>Completed</span>
                      <span className="text-emerald-700">28</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Partial</span>
                      <span className="text-yellow-600">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Missed</span>
                      <span className="text-red-500">3</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="mb-3 text-sm font-black text-slate-950">
                    Quick Actions
                  </h3>

                  <div className="grid grid-cols-2 gap-2">
                    {["New Patient", "Create HEP", "Search", "Templates"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center text-[11px] font-black text-slate-700"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="mb-3 text-sm font-black text-slate-950">
                    Alerts
                  </h3>

                  <div className="space-y-2">
                    {["Pain increased", "HEP missed", "Ready to progress"].map(
                      (alert) => (
                        <div
                          key={alert}
                          className="rounded-xl bg-slate-50 p-2.5 text-[11px] font-bold text-slate-600"
                        >
                          {alert}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:block">
        <p className="text-[11px] font-black uppercase tracking-wide text-slate-400">
          Weekly Progress
        </p>
        <p className="mt-1 text-2xl font-black text-emerald-700">+18%</p>
      </div>
    </div>
  );
}

function TrustedBy() {
  return (
    <section className="border-y border-slate-100 bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-slate-400">
          Built for movement professionals
        </p>

        <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustedBy.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-center text-sm font-black text-slate-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl transition group-hover:bg-emerald-600">
        <span className="transition group-hover:scale-110">{icon}</span>
      </div>

      <h3 className="text-xl font-black tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <div className="mt-6 text-sm font-black text-emerald-700">
        Learn more →
      </div>
    </div>
  );
}

function ProviderDashboardCard() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200">
      <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-400">
              Provider Dashboard
            </p>
            <h3 className="mt-1 text-2xl font-black">Active Caseload</h3>
          </div>

          <div className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-black text-white">
            Live
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["24", "Active Patients"],
            ["86%", "HEP Adherence"],
            ["12", "Today’s Visits"],
          ].map(([number, label]) => (
            <div key={label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-3xl font-black text-white">{number}</p>
              <p className="mt-1 text-xs font-bold text-slate-300">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {[
            ["9:00 AM", "John Smith", "TKA Progression"],
            ["10:30 AM", "Mia Miller", "ACL Return-to-Run"],
            ["1:00 PM", "David Wilson", "Low Back Pain"],
          ].map(([time, name, plan]) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-2xl bg-white p-4 text-slate-950"
            >
              <div>
                <p className="text-xs font-black text-emerald-700">{time}</p>
                <p className="font-black">{name}</p>
                <p className="text-xs text-slate-500">{plan}</p>
              </div>

              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                Open
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PatientAppMockup() {
  return (
    <div className="mx-auto max-w-sm rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
      <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
        <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-white/20" />

        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-400">
            Patient App
          </p>
          <h3 className="mt-1 text-2xl font-black">Today’s Plan</h3>
          <p className="mt-2 text-sm text-slate-300">
            3 exercises assigned by your provider
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-500 p-5">
          <p className="text-sm font-bold text-emerald-950">HEP Completion</p>
          <p className="mt-2 text-5xl font-black text-white">78%</p>
          <p className="mt-1 text-sm font-bold text-emerald-950">
            Great progress this week
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {[
            ["Goblet Squat", "3 sets x 10 reps"],
            ["Single Leg RDL", "3 sets x 8 reps"],
            ["Step Up", "3 sets x 10 reps"],
          ].map(([exercise, details]) => (
            <div
              key={exercise}
              className="flex items-center justify-between rounded-2xl bg-white p-4 text-slate-950"
            >
              <div>
                <p className="font-black">{exercise}</p>
                <p className="text-xs text-slate-500">{details}</p>
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">
                ✓
              </div>
            </div>
          ))}
        </div>

        <button className="mt-5 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black text-slate-950">
          Message Provider
        </button>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  highlighted = false,
}: {
  plan: {
    name: string;
    audience: string;
    price: string;
    description: string;
    features: string[];
  };
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        highlighted
          ? "border-emerald-600 bg-slate-950 text-white shadow-slate-300"
          : "border-slate-200 bg-white text-slate-950"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-8 rounded-full bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
          Recommended
        </div>
      )}

      <p
        className={`text-sm font-black uppercase tracking-wide ${
          highlighted ? "text-emerald-400" : "text-emerald-700"
        }`}
      >
        {plan.price}
      </p>

      <h3 className="mt-3 text-3xl font-black tracking-tight">{plan.name}</h3>

      <p
        className={`mt-2 text-sm font-bold ${
          highlighted ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {plan.audience}
      </p>

      <p
        className={`mt-5 text-sm leading-7 ${
          highlighted ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {plan.description}
      </p>

      <div className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                highlighted
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-50 text-emerald-700"
              }`}
            >
              ✓
            </div>

            <p
              className={`text-sm font-bold ${
                highlighted ? "text-white" : "text-slate-800"
              }`}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/early-access"
        className={`mt-9 inline-flex w-full justify-center rounded-xl px-5 py-4 text-sm font-black transition ${
          highlighted
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        Join Early Access
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <PeakMotionLogo />

        <div className="flex flex-wrap gap-5 text-sm font-bold text-slate-600">
          <Link href="#features" className="hover:text-emerald-700">
            Features
          </Link>
          <Link href="#providers" className="hover:text-emerald-700">
            Providers
          </Link>
          <Link href="#patients" className="hover:text-emerald-700">
            Patients
          </Link>
          <Link href="#pricing" className="hover:text-emerald-700">
            Pricing
          </Link>
          <Link href="#resources" className="hover:text-emerald-700">
            Resources
          </Link>
        </div>

        <p className="text-sm font-semibold text-slate-400">
          © 2026 PeakMotion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <PeakMotionLogo />

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Log In
            </Link>

            <Link
              href="/early-access"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Get Early Access
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 rounded-full bg-slate-950 transition ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-slate-950 transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-slate-950 transition ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-5 shadow-xl md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-black text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Log In
                </Link>

                <Link
                  href="/early-access"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  Get Early Access
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
              All-in-one rehab & performance platform
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.5rem]">
              Move Better. Recover Faster. Perform at Your{" "}
              <span className="text-emerald-700">Peak.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              PeakMotion helps physical therapists, athletic trainers, and
              coaches deliver better care, track progress, and get athletes back
              to doing what they love.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/early-access"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Get Early Access
              </Link>

              <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:bg-slate-50">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300">
                  ▶
                </span>
                Watch Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-slate-600 sm:grid-cols-4">
              {[
                "HIPAA Compliant",
                "Secure & Private",
                "Data-Driven Care",
                "Access Anywhere",
              ].map((item) => (
                <div key={item} className="flex flex-col gap-2">
                  <div className="h-8 w-8 rounded-xl bg-emerald-50" />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      <TrustedBy />

      <section id="features" className="scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
              Platform Features
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything You Need to Deliver Exceptional Care
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              PeakMotion brings patient management, exercise programming,
              progress tracking, and performance tools together in one clean
              platform.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-emerald-400">
                  Designed for modern rehab
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Care plans, patient progress, and performance data all in one
                  place.
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                  Whether you are working with outpatient patients, athletes,
                  return-to-sport cases, or general rehab, PeakMotion is being
                  built to make care easier to organize, track, and deliver.
                </p>
              </div>

              <Link
                href="/early-access"
                className="inline-flex justify-center rounded-xl bg-emerald-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Join Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="providers"
        className="scroll-mt-28 bg-slate-50 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
              For Providers
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Built for PTs, athletic trainers, and performance professionals.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              PeakMotion gives providers one place to manage patients, build
              HEPs, track progress, review adherence, and keep care moving
              outside the clinic.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Manage active caseloads",
                "Build HEPs faster",
                "Track patient outcomes",
                "Monitor adherence",
                "Review progress trends",
                "Improve patient communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-700">
                    ✓
                  </div>
                  <p className="text-sm font-black text-slate-900">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/early-access"
              className="mt-9 inline-flex rounded-xl bg-emerald-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Join Early Access
            </Link>
          </div>

          <ProviderDashboardCard />
        </div>
      </section>

      <section id="patients" className="scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <PatientAppMockup />

          <div>
            <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
              For Patients
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Keep patients engaged between visits.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Patients get a simple, easy-to-follow view of their exercises,
              progress, messages, and care plan so they can stay consistent
              outside the clinic.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Clear exercise plans",
                  text: "Patients can view their assigned exercises, sets, reps, and instructions.",
                },
                {
                  title: "Progress tracking",
                  text: "Track completion, symptoms, pain scores, and improvement over time.",
                },
                {
                  title: "Better accountability",
                  text: "Help patients stay on top of their plan with simple check-ins and reminders.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-28 bg-slate-50 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
              Pricing
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Simple plans for providers, clinics, and performance teams.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              PeakMotion is still in early access, so pricing can evolve as the
              platform grows. For now, the goal is to build with the right users
              and learn what matters most.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                highlighted={index === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
              Resources
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Built with education, clarity, and better care in mind.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              As PeakMotion grows, this area can become a hub for clinical
              tools, exercise education, templates, product updates, and helpful
              resources for providers and patients.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {resourceCards.map((resource) => (
              <div
                key={resource.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-black text-emerald-700">
                  +
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {resource.description}
                </p>

                <div className="mt-6 text-sm font-black text-emerald-700">
                  Coming soon →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_30%)]" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-wide text-emerald-400">
                Join the movement
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Ready to bring rehab, performance, and patient engagement
                together?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Join PeakMotion Early Access and help shape a platform built for
                modern providers, athletes, patients, and performance teams.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/early-access"
                  className="inline-flex justify-center rounded-xl bg-emerald-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  Get Early Access
                </Link>

                <Link
                  href="#features"
                  className="inline-flex justify-center rounded-xl border border-white/20 px-8 py-4 text-sm font-black text-white transition hover:bg-white/10"
                >
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}