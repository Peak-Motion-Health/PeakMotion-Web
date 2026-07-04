import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] px-6 py-10 text-[#0F172A]">
      <Link href="/" className="mx-auto flex max-w-6xl items-center gap-3">
        <Image src="/pm-logo.png" alt="PeakMotion Logo" width={52} height={52} />
        <div>
          <p className="text-xl font-bold">PeakMotion</p>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0D8B6F]">
            Built Around How Therapists Think
          </p>
        </div>
      </Link>

      <section className="mx-auto mt-20 grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl md:grid-cols-2">
        <div className="bg-[#0B1220] p-10 text-white">
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm font-semibold text-emerald-300">
              PeakMotion Preview
            </p>
            <h2 className="mt-6 text-4xl font-bold">
              Welcome back to smarter rehab software.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Sign in to continue building faster HEPs, reviewing patient
              adherence, and organizing care around clinical reasoning.
            </p>

            <div className="mt-8 space-y-3">
              <PreviewItem text="Clinical search by impairment" />
              <PreviewItem text="HEP builder in under 60 seconds" />
              <PreviewItem text="Patient adherence dashboard" />
            </div>
          </div>
        </div>

        <div className="p-10">
          <h1 className="text-4xl font-bold">Log in</h1>
          <p className="mt-3 text-slate-600">
            Access your PeakMotion workspace.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="drew.pate@peakmotionhealth.com"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-[#0D8B6F] focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-[#0D8B6F] focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" />
                Remember me
              </label>

              <a className="font-semibold text-[#0D8B6F]" href="#">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-[#0D8B6F] px-6 py-4 font-semibold text-white transition hover:bg-[#0B735C]"
            >
              Log In
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-500">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold transition hover:bg-slate-50">
            Continue with Google
          </button>

          <p className="mt-8 text-center text-sm text-slate-600">
            Don&apos;t have access yet?{" "}
            <Link href="/early-access" className="font-semibold text-[#0D8B6F]">
              Join Early Access
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function PreviewItem({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 text-sm text-slate-200">
      ✓ {text}
    </div>
  );
}