function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-black tracking-tight text-white">Lamborghini</a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#build" className="hover:text-white">Build</a>
        </nav>
        <a href="#build" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">Order</a>
      </div>
    </header>
  );
}

export default Navbar;
