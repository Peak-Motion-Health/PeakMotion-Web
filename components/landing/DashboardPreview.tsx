"use client";

import type { ReactNode } from "react";
import { useState } from "react";

const patients = [
  {
    time: "9:00 AM",
    name: "James Smith",
    initials: "JS",
    diagnosis: "ACL Reconstruction",
    phase: "Week 6",
    type: "Follow Up",
    adherence: "92%",
    status: "Ready for Progression",
    color: "emerald",
    pain: "2/10",
    rom: "118° knee flexion",
    searchInput: "Patient lacks knee flexion",
    goals: ["Improve stairs", "Return to jogging", "Single-leg control"],
    hep: [
      ["Heel Slides", "Mobility", "3 sets × 10 reps", "Improve knee flexion ROM"],
      ["Stationary Bike", "ROM", "8 minutes", "Low-load repetitive motion"],
      ["Sit to Stand", "Functional", "3 sets × 8 reps", "Improve transfers"],
      ["Step Ups", "Strength", "2 sets × 10 reps", "Carryover to stairs"],
    ],
  },
  {
    time: "10:00 AM",
    name: "Ashley White",
    initials: "AW",
    diagnosis: "Shoulder Impingement",
    phase: "Re-Eval",
    type: "Re-Eval",
    adherence: "74%",
    status: "Needs Reassessment",
    color: "amber",
    pain: "6/10",
    rom: "95° shoulder abduction",
    searchInput: "Patient lacks shoulder abduction",
    goals: ["Reach overhead", "Reduce pain", "Improve scapular control"],
    hep: [
      ["Table Slides", "Mobility", "3 sets × 10 reps", "Improve pain-free motion"],
      ["Scapular Retractions", "Motor Control", "3 sets × 12 reps", "Improve posture and control"],
      ["Wall Slides", "Mobility", "2 sets × 8 reps", "Improve overhead reach"],
      ["Isometric ER", "Strength", "3 sets × 10 sec", "Improve rotator cuff activation"],
    ],
  },
  {
    time: "11:30 AM",
    name: "Michael Carter",
    initials: "MC",
    diagnosis: "Low Back Pain",
    phase: "Visit 3",
    type: "Follow Up",
    adherence: "81%",
    status: "Improving",
    color: "blue",
    pain: "3/10",
    rom: "Improved lumbar flexion",
    searchInput: "Patient has low back pain with lifting",
    goals: ["Return to lifting", "Improve sitting tolerance", "Core endurance"],
    hep: [
      ["Lower Trunk Rotations", "Mobility", "2 sets × 12 reps", "Reduce stiffness"],
      ["Bridges", "Strength", "3 sets × 10 reps", "Improve posterior chain strength"],
      ["Bird Dogs", "Motor Control", "2 sets × 8 reps", "Improve trunk stability"],
      ["Hip Hinge Practice", "Functional", "3 sets × 8 reps", "Improve lifting mechanics"],
    ],
  },
];

type Patient = (typeof patients)[number];

const tabs = ["Dashboard", "Patients", "HEPs", "Exercises", "Analytics"];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedPatient, setSelectedPatient] = useState<Patient>(patients[0]);
  const [hepGenerated, setHepGenerated] = useState(false);

  function selectPatient(patient: Patient) {
    setSelectedPatient(patient);
    setHepGenerated(false);
  }

  function generateHEP() {
    setHepGenerated(true);
  }

  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[3rem] bg-emerald-300/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition duration-500 hover:-translate-y-2">
        <div className="grid min-w-[920px] grid-cols-[180px_1fr]">
          <aside className="bg-[#0B1220] p-5 text-white">
            <div className="mb-8 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#0D8B6F]" />
              <p className="font-bold">PeakMotion</p>
            </div>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mb-2 w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                  activeTab === tab
                    ? "bg-[#0D8B6F] text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Quick Create</p>
              <p className="mt-2 text-xs text-slate-400">
                Create a new HEP in under 60 seconds.
              </p>
              <button
                onClick={() => {
                  setActiveTab("HEPs");
                  generateHEP();
                }}
                className="mt-4 w-full rounded-xl bg-[#0D8B6F] py-2 text-sm font-semibold"
              >
                + New HEP
              </button>
            </div>
          </aside>

          <main className="bg-[#F8FAF9] p-6">
            <Header
              title={
                activeTab === "Dashboard"
                  ? "Good morning, Drew 👋"
                  : activeTab
              }
              subtitle="Here’s what’s happening in your practice today."
            />

            {activeTab === "Dashboard" && (
              <>
                <div className="grid grid-cols-4 gap-4">
                  <Metric label="Patients Today" value="12" note="+2 from yesterday" />
                  <Metric label="HEPs Created" value="8" note="+3 from yesterday" />
                  <Metric label="Adherence" value="78%" note="+6% from last week" />
                  <Metric label="Time Saved" value="5.4 hrs" note="This week" />
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
                  <Card title="Upcoming Appointments">
                    <div className="space-y-3">
                      {patients.map((patient) => (
                        <PatientButton
                          key={patient.name}
                          patient={patient}
                          selected={selectedPatient.name === patient.name}
                          onClick={() => selectPatient(patient)}
                        />
                      ))}
                    </div>
                  </Card>

                  <PatientPanel patient={selectedPatient} onGenerate={generateHEP} />
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
                  <ClinicalSearchCard
                    patient={selectedPatient}
                    onGenerate={generateHEP}
                  />

                  <RecommendedExercisesCard
                    patient={selectedPatient}
                    hepGenerated={hepGenerated}
                  />
                </div>
              </>
            )}

            {activeTab === "Patients" && (
              <Card title="Patients">
                <div className="space-y-3">
                  {patients.map((patient) => (
                    <PatientButton
                      key={patient.name}
                      patient={patient}
                      selected={selectedPatient.name === patient.name}
                      onClick={() => selectPatient(patient)}
                    />
                  ))}
                </div>
              </Card>
            )}

            {activeTab === "HEPs" && (
              <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
                <ClinicalSearchCard
                  patient={selectedPatient}
                  onGenerate={generateHEP}
                />

                <RecommendedExercisesCard
                  patient={selectedPatient}
                  hepGenerated={hepGenerated}
                />
              </div>
            )}

            {activeTab === "Exercises" && (
              <RecommendedExercisesCard
                patient={selectedPatient}
                hepGenerated={true}
              />
            )}

            {activeTab === "Analytics" && (
              <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
                <Card title="Adherence Overview">
                  <p className="text-sm text-slate-500">Weekly completion</p>
                  <p className="mt-2 text-5xl font-black text-[#0D8B6F]">78%</p>

                  <div className="mt-6 flex h-28 items-end gap-2">
                    {[62, 74, 58, 81, 88, 72, 91].map((height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 items-end rounded-full bg-emerald-50"
                      >
                        <div
                          className="w-full rounded-full bg-[#0D8B6F]"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </Card>

                <Card title="Clinic Insights">
                  <Metric label="Avg. HEP Completion" value="78%" note="+6% this week" />
                  <div className="mt-4">
                    <Metric label="Pain Flags" value="3" note="Needs review" />
                  </div>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function PatientButton({
  patient,
  selected,
  onClick,
}: {
  patient: Patient;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        selected ? "border-[#0D8B6F] bg-emerald-50" : "border-slate-100 bg-white"
      }`}
    >
      <div className="grid grid-cols-[64px_1fr] items-center gap-4">
        <div className="text-xs font-semibold text-slate-500">{patient.time}</div>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-300 font-bold text-[#0D8B6F]">
            {patient.initials}
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">{patient.name}</p>
            <p className="text-xs text-slate-500">
              {patient.diagnosis} · {patient.phase}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function PatientPanel({
  patient,
  onGenerate,
}: {
  patient: Patient;
  onGenerate: () => void;
}) {
  return (
    <Card title="Patient Profile">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-300 text-lg font-black text-[#0D8B6F]">
          {patient.initials}
        </div>

        <div>
          <p className="text-lg font-bold text-slate-900">{patient.name}</p>
          <p className="text-sm text-slate-500">
            {patient.diagnosis} · {patient.phase}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <MiniStat label="Pain" value={patient.pain} />
        <MiniStat label="ROM" value={patient.rom} />
        <MiniStat label="Adherence" value={patient.adherence} />
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Current Goals
        </p>

        <div className="space-y-2">
          {patient.goals.map((goal) => (
            <p
              key={goal}
              className="rounded-xl bg-white p-3 text-sm font-semibold text-slate-700"
            >
              ✓ {goal}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={onGenerate}
        className="mt-5 w-full rounded-xl bg-[#0D8B6F] px-5 py-3 text-sm font-semibold text-white"
      >
        Generate HEP for {patient.name.split(" ")[0]} →
      </button>
    </Card>
  );
}

function ClinicalSearchCard({
  patient,
  onGenerate,
}: {
  patient: Patient;
  onGenerate: () => void;
}) {
  return (
    <Card title="Clinical Search">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D8B6F]">
          Search Input
        </p>
        <p className="mt-2 text-lg font-bold text-slate-900">
          {patient.searchInput}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <ClinicalTag label="Diagnosis" value={patient.diagnosis} />
        <ClinicalTag label="Impairment" value={patient.rom} />
        <ClinicalTag label="Function" value={patient.goals[0]} />
        <ClinicalTag label="Goal" value={patient.goals[1]} />
      </div>

      <button
        onClick={onGenerate}
        className="mt-4 w-full rounded-xl bg-[#0D8B6F] px-5 py-3 text-sm font-semibold text-white"
      >
        Generate HEP →
      </button>
    </Card>
  );
}

function RecommendedExercisesCard({
  patient,
  hepGenerated,
}: {
  patient: Patient;
  hepGenerated: boolean;
}) {
  return (
    <Card title={hepGenerated ? `HEP Ready for ${patient.name.split(" ")[0]}` : "Recommended Exercises"}>
      {hepGenerated && (
        <div className="mb-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D8B6F]">
            Generated Plan
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            PeakMotion selected exercises based on diagnosis, impairment,
            functional goals, and current symptoms.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {patient.hep.map(([name, type, dosage, reason]) => (
          <div
            key={name}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">{name}</p>
                <p className="text-xs text-slate-500">{reason}</p>
                <p className="mt-2 text-xs font-semibold text-[#0D8B6F]">
                  {dosage}
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                {type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {hepGenerated && (
        <button className="mt-5 w-full rounded-xl bg-[#0B1220] px-5 py-3 text-sm font-semibold text-white">
          Send HEP to Patient →
        </button>
      )}
    </Card>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-400">
        Search patients, HEPs, or exercises...
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-[#0D8B6F]">{note}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="mb-4 font-bold text-slate-900">{title}</h4>
      {children}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-sm font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

function ClinicalTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xs font-bold text-slate-800">{value}</p>
    </div>
  );
}