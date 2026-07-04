import FadeIn from "./FadeIn";

const features = [
  [
    "Clinical Search",
    "Find exercises by diagnosis, impairment, function, and patient goals.",
  ],
  [
    "Smart Templates",
    "Start from common rehab pathways instead of rebuilding from scratch.",
  ],
  [
    "HEP Builder",
    "Customize sets, reps, resistance, weight, tempo, holds, and notes.",
  ],
  [
    "Patient App",
    "Patients get daily checklists, reminders, videos, and pain reporting.",
  ],
  [
    "Adherence Dashboard",
    "See completion rates, missed sessions, and patient feedback.",
  ],
  [
    "Built for Speed",
    "Designed to create and send HEPs before the patient leaves.",
  ],
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <FadeIn>
        <div className="mb-16 max-w-3xl">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#0D8B6F]">
            Product Features
          </span>

          <h2 className="mt-8 text-5xl font-bold tracking-tight">
            Everything needed to create better HEPs faster.
          </h2>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map(([title, body], index) => (
          <FadeIn key={title} delay={index * 0.08}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-[#0D8B6F]">
                ✓
              </div>

              <h3 className="text-xl font-bold">{title}</h3>

              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}