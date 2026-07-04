const appointments = [
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
  },
];

const exercises = [
  ["Heel Slides", "Mobility", "92%", "Improve knee flexion ROM"],
  ["Stationary Bike", "ROM", "88%", "Low-load repetitive motion"],
  ["Sit to Stand", "Functional", "85%", "Improve transfers"],
  ["Step Ups", "Strength", "82%", "Carryover to stairs"],
];

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[3rem] bg-emerald-300/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition duration-500 hover:-translate-y-2">
        <div className="grid min-w-[900px] grid-cols-[180px_1fr]">
          <aside className="bg-[#0B1220] p-5 text-white">
            <div className="mb-8 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#0D8B6F]" />
              <p className="font-bold">PeakMotion</p>
            </div>

            {[
              "Dashboard",
              "Patients",
              "HEPs",
              "Exercises",
              "Templates",
              "Analytics",
              "Messages",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`mb-2 rounded-xl px-3 py-2 text-sm ${
                  index === 0 ? "bg-[#0D8B6F] text-white" : "text-slate-400"
                }`}
              >
                {item}
              </div>
            ))}

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Quick Create</p>
              <p className="mt-2 text-xs text-slate-400">
                Create a new HEP in under 60 seconds.
              </p>
              <button className="mt-4 w-full rounded-xl bg-[#0D8B6F] py-2 text-sm font-semibold">
                + New HEP
              </button>
            </div>
          </aside>

          <main className="bg-[#F8FAF9] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Good morning, Drew 👋
                </h3>
                <p className="text-sm text-slate-500">
                  Here’s what’s happening in your practice today.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-400">
                Search patients, HEPs, or exercises...
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Metric label="Patients Today" value="12" note="+2 from yesterday" />
              <Metric label="HEPs Created" value="8" note="+3 from yesterday" />
              <Metric label="Adherence" value="78%" note="+6% from last week" />
              <Metric label="Time Saved" value="5.4 hrs" note="This week" />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <Card title="Upcoming Appointments">
                <div className="space-y-3">
                  {appointments.map((patient) => (
                    <PatientAppointment key={patient.name} patient={patient} />
                  ))}
                </div>
              </Card>

              <Card title="Adherence Overview">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Weekly completion</p>
                      <p className="mt-2 text-4xl font-black text-[#0D8B6F]">
                        78%
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-[#0D8B6F]">
                      +6% this week
                    </span>
                  </div>

                  <div className="mt-6 flex h-28 items-end gap-2">
                    {[
                      ["Mon", 62],
                      ["Tue", 74],
                      ["Wed", 58],
                      ["Thu", 81],
                      ["Fri", 88],
                      ["Sat", 72],
                      ["Sun", 91],
                    ].map(([day, height]) => (
                      <div
                        key={day}
                        className="flex flex-1 flex-col items-center justify-end gap-2"
                      >
                        <div className="flex h-24 w-full items-end rounded-full bg-white">
                          <div
                            className="w-full rounded-full bg-[#0D8B6F]"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                        <p className="text-xs font-semibold text-slate-500">
                          {day}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <MiniStat label="Completed" value="42" />
                  <MiniStat label="Missed" value="8" />
                  <MiniStat label="Pain Flags" value="3" />
                </div>

                <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Needs Review
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Ashley White reported increased pain with wall slides.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
              <Card title="Clinical Search">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D8B6F]">
                    Search Input
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-900">
                    Patient lacks knee flexion
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <ClinicalTag label="Diagnosis" value="TKA" />
                  <ClinicalTag label="Impairment" value="Limited knee flexion" />
                  <ClinicalTag label="Function" value="Stairs" />
                  <ClinicalTag label="Goal" value="Improve transfers" />
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Reasoning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Prioritize low-irritability ROM, functional strengthening,
                    and stair carryover based on current limitations.
                  </p>
                </div>

                <button className="mt-4 w-full rounded-xl bg-[#0D8B6F] px-5 py-3 text-sm font-semibold text-white">
                  Generate HEP →
                </button>
              </Card>

              <Card title="Recommended Exercises">
                <div className="space-y-4">
                  {exercises.map(([name, type, percent, reason]) => (
                    <div
                      key={name}
                      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-bold text-[#0D8B6F]">
                            ✓
                          </div>

                          <div>
                            <p className="text-sm font-bold text-slate-900">
                              {name}
                            </p>
                            <p className="text-xs text-slate-500">{reason}</p>
                          </div>
                        </div>

                        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                          {type}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-2 flex-1 rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-[#0D8B6F]"
                            style={{ width: percent }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-500">
                          {percent}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function PatientAppointment({
  patient,
}: {
  patient: {
    time: string;
    name: string;
    initials: string;
    diagnosis: string;
    phase: string;
    type: string;
    adherence: string;
    status: string;
    color: string;
  };
}) {
  const badgeStyle =
    patient.color === "emerald"
      ? "bg-emerald-100 text-emerald-700"
      : patient.color === "amber"
      ? "bg-amber-100 text-amber-700"
      : "bg-blue-100 text-blue-700";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
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

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyle}`}>
          {patient.status}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {patient.type}
        </span>

        <div className="flex w-32 items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-[#0D8B6F]"
              style={{ width: patient.adherence }}
            />
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {patient.adherence}
          </span>
        </div>
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

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
      <p className="text-lg font-bold text-slate-900">{value}</p>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
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