function Feature({ title, desc, icon }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
      <div className="mb-4 text-red-400">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative z-10 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineering Highlights</h2>
          <p className="mt-4 text-zinc-300">Cutting-edge innovation under every panel. Precision-built to dominate road and track.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Carbon Monocoque"
            desc="Ultra-light, ultra-rigid chassis for razor-sharp handling and unmatched safety."
            icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M3 7l9-4 9 4-9 4-9-4z'/><path d='M3 17l9 4 9-4'/><path d='M3 12l9 4 9-4'/></svg>}
          />
          <Feature
            title="Active Aero"
            desc="Adaptive wings and vents sculpt airflow for stability and downforce at speed."
            icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M3 12h18'/><path d='M4 6h16'/><path d='M6 18h12'/></svg>}
          />
          <Feature
            title="V12 Hybrid"
            desc="Electrified thrust meets analog emotion — brutal power with instant response."
            icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M13 2L3 14h7l-1 8 10-12h-7l1-8z'/></svg>}
          />
          <Feature
            title="Race-Tuned Dynamics"
            desc="Torque vectoring and magnetic dampers read the road in milliseconds."
            icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='3'/><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.06A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09c0 .67.39 1.27 1 1.51h.06c.63.24 1.35.1 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.51.51-.66 1.25-.33 1.82v.06c.24.63.84 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.67 0-1.27.39-1.51 1z'/></svg>}
          />
          <Feature
            title="Forged Alloys"
            desc="Featherweight wheels reduce unsprung mass for explosive acceleration."
            icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M12 6v12M6 12h12'/></svg>}
          />
          <Feature
            title="Signature Sound"
            desc="A visceral soundtrack — meticulously tuned intake and exhaust harmonics."
            icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M9 18V5l12-2v13'/><path d='M6 9v6'/><circle cx='4' cy='12' r='1'/></svg>}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
