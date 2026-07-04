export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D8B6F] text-white font-bold">
            PM
          </div>

          <div>
            <h1 className="font-bold text-xl tracking-tight">
              PeakMotion
            </h1>

            <p className="text-xs text-gray-500 uppercase tracking-[0.25em]">
              Rehabilitation Software
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-600">

          <a href="#">Features</a>

          <a href="#">Mission</a>

          <a href="#">Roadmap</a>

          <button className="rounded-xl bg-[#0D8B6F] px-5 py-2 text-white">
            Early Access
          </button>

        </nav>

      </div>
    </header>
  )
}