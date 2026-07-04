import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-slate-200/70 bg-white/85 px-6 py-4 shadow-lg shadow-slate-200/60 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/pm-logo.png"
            alt="PeakMotion Logo"
            width={54}
            height={54}
            className="rounded-full"
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-slate-900">PeakMotion</h1>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0D8B6F]">
              Built Around How Therapists Think
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-slate-700 md:flex">
          <a href="/#features" className="hover:text-[#0D8B6F]">
            Features
          </a>

          <a href="/#mission" className="hover:text-[#0D8B6F]">
            Mission
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
             href="/early-access"
              className="rounded-xl bg-[#0D8B6F] px-6 py-3 font-semibold text-white transition hover:bg-[#0B735C]"
          >     
             Join Early Access
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
}