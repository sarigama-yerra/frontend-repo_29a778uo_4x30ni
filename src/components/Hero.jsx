import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.15),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200 backdrop-blur">
            Futuristic • V12 Performance
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Lamborghini
            <span className="block bg-gradient-to-r from-zinc-100 via-red-200 to-zinc-100 bg-clip-text text-transparent">Aventador Vision</span>
          </h1>
          <p className="mt-5 max-w-xl text-zinc-300">
            A sleek, dark vision of speed. Sculpted aerodynamics, glowing interiors, and a symphony of engineering designed to move you beyond limits.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#build"
              className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(220,38,38,0.4)] transition hover:bg-red-500"
            >
              Build Yours
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
