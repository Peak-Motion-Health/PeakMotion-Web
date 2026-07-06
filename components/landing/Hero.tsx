import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F3EC] px-6 pt-32 pb-24 text-[#1F2A24]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#DDE7D4] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-96 w-96 rounded-full bg-[#E8DDC8] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-[#D6CCB8] bg-white/70 px-4 py-2 text-sm font-semibold text-[#5A645A] shadow-sm">
            Built for physical therapy workflows
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Smarter physical therapy software for clinical reasoning and patient
            progress.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5A645A]">
            PeakMotion helps physical therapy students, clinicians, and clinics
            organize patient information, treatment plans, goals, home exercise
            programs, and progress tracking in one clean workspace.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/early-access"
              className="rounded-full bg-[#1F2A24] px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-[#334238]"
            >
              Join Early Access
            </Link>

            <Link
              href="#demo"
              className="rounded-full border border-[#1F2A24] px-7 py-4 text-center font-semibold text-[#1F2A24] transition hover:bg-[#1F2A24] hover:text-white"
            >
              View Demo
            </Link>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#6F7F67]">
              Designed for
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "PT Students",
                "Clinicians",
                "Sports Rehab",
                "Outpatient Clinics",
                "Patient Care",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D6CCB8] bg-white/70 px-4 py-2 text-sm font-medium text-[#5A645A]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side dashboard preview */}
        <div className="relative">
          <div className="rounded-[2rem] border border-[#D6CCB8] bg-white p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-[#1F2A24] p-5 text-white">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-[#B7C8A6]">PeakMotion Preview</p>
                  <h2 className="text-xl font-bold">Patient Dashboard</h2>
                </div>

                <span className="rounded-full bg-[#B7C8A6] px-3 py-1 text-xs font-bold text-[#1F2A24]">
                  Beta
                </span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-white p-5 text-[#1F2A24]">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#6F7F67]">
                      Patient Goal
                    </p>
                    <span className="rounded-full bg-[#DDE7D4] px-3 py-1 text-xs font-semibold">
                      Active
                    </span>
                  </div>

                  <h3 className="text-lg font-bold">
                    Return to pain-free stair negotiation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5A645A]">
                    Connect prior level of function, current limitations,
                    interventions, and measurable progress.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-[#B7C8A6]">Current Limitation</p>
                    <h4 className="mt-2 font-semibold">Difficulty with stairs</h4>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-2/3 rounded-full bg-[#B7C8A6]" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-[#B7C8A6]">Treatment Focus</p>
                    <h4 className="mt-2 font-semibold">Strength + control</h4>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-1/2 rounded-full bg-[#B7C8A6]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-[#B7C8A6]">
                      Home Exercise Program
                    </p>
                    <p className="text-xs text-white/70">Updated today</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>Step-ups</span>
                      <span className="text-sm text-[#B7C8A6]">3 x 10</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>Sit-to-stands</span>
                      <span className="text-sm text-[#B7C8A6]">3 x 8</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>Balance training</span>
                      <span className="text-sm text-[#B7C8A6]">2 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#D6CCB8] bg-white p-5 shadow-xl md:block">
            <p className="text-sm font-semibold text-[#6F7F67]">
              Clinical reasoning
            </p>
            <p className="mt-1 text-2xl font-bold">Connected</p>
          </div>
        </div>
      </div>
    </section>
  );
}