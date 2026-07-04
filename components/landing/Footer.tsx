import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/pm-logo.png"
                alt="PeakMotion Logo"
                width={60}
                height={60}
              />

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  PeakMotion
                </h3>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D8B6F]">
                  Built Around How Therapists Think
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-600">
              PeakMotion is building the next generation of rehabilitation
              software by organizing home exercise programs around clinical
              reasoning—not exercise names.
            </p>

            <div className="mt-8 rounded-2xl bg-emerald-50 p-5">
              <p className="font-semibold text-[#0D8B6F]">
                🚧 Currently Building in Public
              </p>

              <p className="mt-2 text-slate-600">
                Follow our journey as we build PeakMotion from idea to launch.
              </p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 font-bold text-slate-900">
              Product
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#features" className="hover:text-[#0D8B6F]">
                  Features
                </a>
              </li>

              <li>
                <a href="#mission" className="hover:text-[#0D8B6F]">
                  Our Mission
                </a>
              </li>

              <li>
                <a href="#roadmap" className="hover:text-[#0D8B6F]">
                  Roadmap
                </a>
              </li>

              <li>
                <a href="#">
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 font-bold text-slate-900">
              Company
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#">
                  About
                </a>
              </li>

              <li>
                <a href="#">
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/PeakMotionHealth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} PeakMotion. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>PeakMotionHealth.com</span>
            <span>Version 0.1</span>
          </div>

        </div>
      </div>
    </footer>
  );
}