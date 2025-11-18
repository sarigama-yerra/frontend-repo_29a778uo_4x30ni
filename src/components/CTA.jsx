function CTA() {
  return (
    <section id="build" className="relative bg-gradient-to-b from-black to-zinc-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Design Your Aventador Vision</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Choose finishes, wheels, and interior trims to craft your own expression of speed. Our specialists will reach out to finalize details.</p>
        <form className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-white/20" placeholder="Full name" />
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-white/20" placeholder="Email address" />
          <select className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20">
            <option>Matte Graphite</option>
            <option>Forged Carbon</option>
            <option>Obsidian Black</option>
          </select>
          <select className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20">
            <option>Forged 20"</option>
            <option>Carbon 21"</option>
            <option>Gunmetal 22"</option>
          </select>
          <textarea className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-white/20" rows="4" placeholder="Any special requests" />
          <button type="button" className="sm:col-span-2 rounded-lg bg-red-600 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(220,38,38,0.4)] transition hover:bg-red-500">Request a consult</button>
        </form>
      </div>
    </section>
  );
}

export default CTA;
