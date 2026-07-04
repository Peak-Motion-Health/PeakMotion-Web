import FadeIn from "./FadeIn";

export default function WhyPeakMotion() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-8 py-32">
      <FadeIn>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#0D8B6F]">
            Why PeakMotion?
          </span>

          <h2 className="mt-8 text-5xl font-bold tracking-tight">
            Traditional HEP software wasn't built around how therapists think.
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            PeakMotion is designed around clinical reasoning, making it faster
            to create individualized home exercise programs.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn delay={0.05}>
          <div className="h-full rounded-3xl border border-red-100 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-8 text-3xl font-bold">❌ Traditional Software</h3>
            <Item text="Search by exercise name" />
            <Item text="Scroll through hundreds of exercises" />
            <Item text="Generic templates" />
            <Item text="Rebuild programs repeatedly" />
            <Item text="Time spent searching instead of treating" />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="h-full rounded-3xl bg-[#0D8B6F] p-10 text-white shadow-2xl transition hover:-translate-y-1">
            <h3 className="mb-8 text-3xl font-bold">✅ PeakMotion</h3>
            <Good text="Search by diagnosis" />
            <Good text="Search by impairments" />
            <Good text="Search by function" />
            <Good text="Search by patient goals" />
            <Good text="Build an individualized HEP in under 60 seconds" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Item({ text }: { text: string }) {
  return <div className="mb-4 rounded-xl bg-slate-50 p-5 text-lg">{text}</div>;
}

function Good({ text }: { text: string }) {
  return <div className="mb-4 rounded-xl bg-white/10 p-5 text-lg">{text}</div>;
}