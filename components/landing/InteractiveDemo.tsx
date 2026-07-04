"use client";

import { useState } from "react";

const cases = [
  {
    title: "Patient lacks knee flexion",
    diagnosis: "Total Knee Arthroplasty",
    impairment: "Limited knee flexion ROM",
    function: "Difficulty with stairs and sit-to-stand transfers",
    goal: "Improve knee mobility and functional strength",
    reasoning:
      "PeakMotion prioritizes low-irritability range of motion, quad activation, and functional strengthening to improve carryover to transfers and stairs.",
    exercises: [
      ["Heel Slides", "Mobility", "Improve knee flexion ROM"],
      ["Stationary Bike", "ROM", "Low-load repetitive motion"],
      ["Sit to Stand", "Functional", "Improve transfers"],
      ["Step Ups", "Strength", "Improve stair carryover"],
    ],
  },
  {
    title: "Patient lacks shoulder abduction",
    diagnosis: "Shoulder Impingement",
    impairment: "Limited shoulder abduction",
    function: "Difficulty reaching overhead",
    goal: "Restore pain-free overhead motion",
    reasoning:
      "PeakMotion selects exercises that improve pain-free mobility, scapular control, and progressive overhead tolerance.",
    exercises: [
      ["Table Slides", "Mobility", "Improve pain-free shoulder motion"],
      ["Scapular Retractions", "Motor Control", "Improve posture and control"],
      ["Wall Slides", "Mobility", "Improve overhead reach"],
      [
        "Isometric External Rotation",
        "Strength",
        "Improve rotator cuff activation",
      ],
    ],
  },
  {
    title: "Patient has poor single-leg balance",
    diagnosis: "Ankle Sprain",
    impairment: "Balance and proprioception deficits",
    function: "Difficulty walking on uneven surfaces",
    goal: "Improve dynamic balance and ankle control",
    reasoning:
      "PeakMotion emphasizes progressive proprioception, single-leg control, and functional stability to support return to uneven surfaces.",
    exercises: [
      ["Tandem Balance", "Balance", "Build static balance foundation"],
      ["Single-Leg Stance", "Balance", "Improve ankle control"],
      ["Clock Taps", "Dynamic Control", "Improve multi-directional stability"],
      ["Lateral Step Downs", "Strength", "Improve functional control"],
    ],
  },
];

type DemoCase = (typeof cases)[number];

export default function InteractiveDemo() {
  const [selectedCase, setSelectedCase] = useState<DemoCase>(cases[0]);
  const [hepGenerated, setHepGenerated] = useState(false);

  function chooseCase(newCase: DemoCase) {
    setSelectedCase(newCase);
    setHepGenerated(false);
  }

  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0D8B6F]">
            Interactive Demo
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Search by the clinical problem, not the exercise name.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            PeakMotion turns diagnosis, impairments, function, and patient goals
            into a ready-to-customize home exercise program.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAF9] p-6 shadow-sm">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Choose a Clinical Problem
            </p>

            <div className="space-y-4">
              {cases.map((demoCase) => (
                <button
                  key={demoCase.title}
                  onClick={() => chooseCase(demoCase)}
                  className={`w-full rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:shadow-md ${
                    selectedCase.title === demoCase.title
                      ? "border-[#0D8B6F] bg-emerald-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-lg font-bold text-slate-900">
                    {demoCase.title}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {demoCase.diagnosis}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D8B6F]">
                What makes this different
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Instead of forcing the therapist to remember the exact exercise
                name, PeakMotion starts with how clinicians already think:
                impairments, function, goals, and clinical reasoning.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#0B1220] p-6 text-white shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-emerald-300">
                  PeakMotion Clinical Engine
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {selectedCase.title}
                </h3>
              </div>

              <div className="rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-bold text-emerald-300">
                Live Preview
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ClinicalDetail label="Diagnosis" value={selectedCase.diagnosis} />
              <ClinicalDetail
                label="Impairment"
                value={selectedCase.impairment}
              />
              <ClinicalDetail label="Function" value={selectedCase.function} />
              <ClinicalDetail label="Goal" value={selectedCase.goal} />
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Clinical Reasoning
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {selectedCase.reasoning}
              </p>
            </div>

            <button
              onClick={() => setHepGenerated(true)}
              className="mt-5 w-full rounded-xl bg-[#0D8B6F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0B735C]"
            >
              Generate HEP →
            </button>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white p-5 text-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D8B6F]">
                    {hepGenerated ? "HEP Ready" : "Recommended HEP"}
                  </p>

                  <h4 className="mt-1 text-lg font-black">
                    {hepGenerated
                      ? `Plan generated for ${selectedCase.diagnosis}`
                      : "Preview recommendations"}
                  </h4>
                </div>

                {hepGenerated && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-[#0D8B6F]">
                    Ready
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {selectedCase.exercises.map(([name, type, reason]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-900">
                          {hepGenerated ? "✓ " : ""}
                          {name}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">{reason}</p>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                        {type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {hepGenerated && (
                <button className="mt-5 w-full rounded-xl bg-[#0B1220] px-5 py-3 text-sm font-bold text-white">
                  Send to Patient →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClinicalDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>
    </div>
  );
}