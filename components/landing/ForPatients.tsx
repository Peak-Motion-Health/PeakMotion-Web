const patientBenefits = [
  {
    title: "Clearer Home Exercises",
    description:
      "Patients can better understand what exercises they need to complete, why they matter, and how they support their recovery.",
  },
  {
    title: "Better Progress Visibility",
    description:
      "PeakMotion helps make progress easier to explain by connecting goals, symptoms, strength, mobility, and function over time.",
  },
  {
    title: "More Personalized Care",
    description:
      "Treatment plans can be built around each patient’s prior level of function, current limitations, and personal goals.",
  },
];

export default function ForPatients() {
  return (
    <section id="patients" className="bg-white px-6 py-24 text-[#1F2A24]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6F7F67]">
              For patients
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Helping patients understand their care, their progress, and their
              path back to function.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5A645A]">
              PeakMotion is designed to make physical therapy feel more
              connected for patients by clearly showing what they are working
              on, why it matters, and how their progress relates to their daily
              life.
            </p>

            <div className="mt-8 grid gap-5">
              {patientBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-[2rem] border border-[#DED6C8] bg-[#F7F3EC] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>

                  <p className="mt-3 leading-7 text-[#5A645A]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#DED6C8] bg-[#F7F3EC] p-6 shadow-xl">
            <div className="rounded-[1.5rem] bg-[#1F2A24] p-6 text-white">
              <div className="mb-6 border-b border-white/10 pb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B7C8A6]">
                  Patient view
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Recovery Snapshot
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#D8DED3]">
                  A simple way to show the patient what they are working toward.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-5 text-[#1F2A24]">
                  <p className="text-sm font-semibold text-[#6F7F67]">
                    Patient Goal
                  </p>

                  <h4 className="mt-2 text-xl font-bold">
                    Walk around the block without pain
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#5A645A]">
                    Goal connected to strength, tolerance, balance, and symptom
                    response.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#B7C8A6]">
                      Progress
                    </p>

                    <p className="text-sm text-white/70">68%</p>
                  </div>

                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-2/3 rounded-full bg-[#B7C8A6]" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#D8DED3]">
                    Improved walking tolerance, reduced pain, and better
                    confidence with daily activity.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-[#B7C8A6]">HEP Focus</p>
                    <p className="mt-2 font-semibold">Strength + mobility</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-[#B7C8A6]">Next Step</p>
                    <p className="mt-2 font-semibold">Increase walking time</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="mb-3 text-sm font-semibold text-[#B7C8A6]">
                    Home Exercises
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>Heel raises</span>
                      <span className="text-sm text-[#B7C8A6]">3 x 12</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>Walking program</span>
                      <span className="text-sm text-[#B7C8A6]">10 min</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>Calf stretch</span>
                      <span className="text-sm text-[#B7C8A6]">2 x 30 sec</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-[#DED6C8] bg-[#F7F3EC] p-8 text-center shadow-sm md:p-10">
          <p className="mx-auto max-w-3xl text-2xl font-bold leading-snug md:text-3xl">
            When patients understand the purpose behind their plan, they are
            more likely to stay engaged, complete their exercises, and see the
            value in their progress.
          </p>
        </div>
      </div>
    </section>
  );
}