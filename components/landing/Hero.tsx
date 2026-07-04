import DashboardPreview from "./DashboardPreview";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,#D8F8EC,transparent_35%),radial-gradient(circle_at_80%_70%,#CFF7E8,transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 py-32 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <div>
            <div className="mb-8 inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-[#0D8B6F]">
              🚧 Building in Public
            </div>

            <h1 className="text-6xl font-black leading-[1.05] tracking-tight md:text-8xl">
              Built around how therapists{" "}
              <span className="text-[#0D8B6F]">think.</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-600">
              The fastest way to create personalized home exercise programs
              using diagnosis, impairments, function, and patient goals — not
              endless exercise searches.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-[#0D8B6F] px-8 py-4 font-semibold text-white transition hover:bg-[#0B735C] hover:-translate-y-0.5">
                Join Early Access →
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold transition hover:-translate-y-0.5 hover:shadow-md">
                ▶ Watch Demo
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <DashboardPreview />
        </FadeIn>
      </div>
    </section>
  );
}