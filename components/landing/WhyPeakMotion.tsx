const reasons = [
  {
    number: "01",
    title: "Connect the full clinical picture",
    description:
      "PeakMotion helps connect prior level of function, current limitations, treatment goals, interventions, and patient progress so care feels more organized and intentional.",
  },
  {
    number: "02",
    title: "Make documentation feel less scattered",
    description:
      "Instead of jumping between notes, goals, exercises, and patient updates, PeakMotion is built to keep the most important information in one clear workflow.",
  },
  {
    number: "03",
    title: "Support better patient progression",
    description:
      "Track what is improving, what barriers remain, and how the plan should change based on function, symptoms, strength, mobility, and tolerance.",
  },
];

export default function WhyPeakMotion() {
  return (
    <section id="providers" className="bg-[#F7F3EC] px-6 py-24 text-[#1F2A24]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6F7F67]">
              For providers
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Built to help clinicians think clearly, document efficiently, and
              progress patients with confidence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5A645A]">
              PeakMotion is being designed around the way physical therapy
              actually works: understanding the patient, identifying functional
              limitations, choosing the right interventions, and tracking
              meaningful progress over time.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#DED6C8] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6F7F67]">
                Core focus
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Less clicking. More clinical thinking.
              </h3>

              <p className="mt-3 leading-7 text-[#5A645A]">
                The goal is not to replace clinical reasoning. The goal is to
                support it by making patient information, treatment decisions,
                and progress easier to see and explain.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="rounded-[2rem] border border-[#DED6C8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE7D4] text-sm font-bold text-[#1F2A24]">
                    {reason.number}
                  </div>

                  <h3 className="text-2xl font-bold">{reason.title}</h3>
                </div>

                <p className="leading-7 text-[#5A645A]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#DED6C8] bg-white p-7 text-center shadow-sm">
            <p className="text-4xl font-bold text-[#1F2A24]">1</p>
            <p className="mt-2 font-semibold text-[#6F7F67]">
              Organized patient dashboard
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#DED6C8] bg-white p-7 text-center shadow-sm">
            <p className="text-4xl font-bold text-[#1F2A24]">3</p>
            <p className="mt-2 font-semibold text-[#6F7F67]">
              Connected clinical areas
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#DED6C8] bg-white p-7 text-center shadow-sm">
            <p className="text-4xl font-bold text-[#1F2A24]">∞</p>
            <p className="mt-2 font-semibold text-[#6F7F67]">
              Room to grow with your clinic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}