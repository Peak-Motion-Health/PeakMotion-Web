"use client";

import { useState } from "react";

const demoOptions = [
  {
    label: "Patient lacks knee flexion",
    diagnosis: "Total Knee Arthroplasty",
    impairment: "Limited knee flexion ROM",
    function: "Difficulty with stairs and sit-to-stand",
    exercises: ["Heel Slides", "Seated Knee Flexion Stretch", "Stationary Bike", "Sit to Stand"],
  },
  {
    label: "Patient lacks shoulder abduction",
    diagnosis: "Rotator Cuff Repair",
    impairment: "Limited shoulder abduction ROM",
    function: "Difficulty reaching overhead",
    exercises: ["Table Slides", "Wall Slides", "Pulley Abduction", "Scaption AAROM"],
  },
  {
    label: "Patient has poor single-leg balance",
    diagnosis: "Ankle Sprain",
    impairment: "Balance and proprioception deficits",
    function: "Difficulty walking on uneven surfaces",
    exercises: ["Tandem Balance", "Single-Leg Stance", "Clock Taps", "Lateral Step Downs"],
  },
];

export default function InteractiveDemo() {
  const [active, setActive] = useState(demoOptions[0]);

  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#0D8B6F]">
          Clinical Search Demo
        </span>

        <h2 className="mt-8 text-5xl font-bold tracking-tight">
          Search by the problem, not the exercise name.
        </h2>

        <p className="mt-6 text-xl text-slate-600">
          PeakMotion turns clinical reasoning into fast, patient-specific HEP recommendations.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Select a clinical problem
          </p>

          <div className="space-y-3">
            {demoOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setActive(option)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  active.label === option.label
                    ? "border-[#0D8B6F] bg-emerald-50 text-[#0D8B6F]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200"
                }`}
              >
                <p className="font-semibold">{option.label}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#0B1220] p-8 text-white shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-300">
                PeakMotion Clinical Engine
              </p>
              <h3 className="mt-2 text-3xl font-bold">{active.label}</h3>
            </div>

            <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm text-emerald-200">
              HEP Ready
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ClinicalCard title="Diagnosis" value={active.diagnosis} />
            <ClinicalCard title="Impairment" value={active.impairment} />
            <ClinicalCard title="Function" value={active.function} />
          </div>

          <div className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="mb-5 text-sm font-semibold text-emerald-300">
              Recommended HEP
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              {active.exercises.map((exercise) => (
                <div
                  key={exercise}
                  className="rounded-2xl bg-white/5 p-4 text-sm text-slate-200"
                >
                  ✓ {exercise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClinicalCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>
      <p className="mt-3 font-semibold">{value}</p>
    </div>
  );
}