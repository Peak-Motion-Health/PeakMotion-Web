const features = [
  {
    icon: "👥",
    title: "Patient Management",
    description:
      "Keep patient information, goals, notes, care plans, and communication organized in one simple workspace.",
  },
  {
    icon: "🏋️",
    title: "HEP Builder",
    description:
      "Create personalized home exercise programs with clear instructions, progressions, and patient-friendly details.",
  },
  {
    icon: "📚",
    title: "Exercise Library",
    description:
      "Access exercises organized by body region, diagnosis, functional goal, and treatment focus.",
  },
  {
    icon: "🧠",
    title: "Clinical Reasoning",
    description:
      "Connect prior level of function, current limitations, interventions, and measurable goals more clearly.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description:
      "Track patient improvement over time using functional goals, outcome measures, and treatment progressions.",
  },
  {
    icon: "📝",
    title: "Documentation Support",
    description:
      "Support cleaner notes by organizing subjective findings, objective data, assessment details, and plan updates.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24 text-[#1F2A24]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6F7F67]">
            Features
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to organize care and think through patient
            progress.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#5A645A]">
            PeakMotion is being designed to help physical therapy students,
            clinicians, and clinics simplify treatment planning, documentation,
            home exercise programs, and clinical reasoning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[2rem] border border-[#DED6C8] bg-[#F7F3EC] p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm transition group-hover:bg-[#DDE7D4]">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-[#5A645A]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#DED6C8] bg-[#1F2A24] p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B7C8A6]">
                Built around the PT workflow
              </p>

              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                From evaluation to treatment progression, PeakMotion keeps the
                whole picture connected.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#D8DED3]">
                The goal is to make it easier to understand why a patient is
                limited, what they are working toward, and how each treatment
                decision supports their return to function.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-4 text-[#1F2A24]">
                  <p className="text-sm font-semibold text-[#6F7F67]">
                    Prior Level of Function
                  </p>
                  <p className="mt-1 font-bold">Independent with stairs</p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-[#1F2A24]">
                  <p className="text-sm font-semibold text-[#6F7F67]">
                    Current Limitation
                  </p>
                  <p className="mt-1 font-bold">Pain and weakness with steps</p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-[#1F2A24]">
                  <p className="text-sm font-semibold text-[#6F7F67]">
                    Treatment Goal
                  </p>
                  <p className="mt-1 font-bold">Return to pain-free stair use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}