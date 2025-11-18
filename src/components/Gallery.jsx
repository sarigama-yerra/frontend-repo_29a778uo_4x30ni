function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop'
  ];

  return (
    <section id="gallery" className="relative bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Gallery</h2>
            <p className="mt-2 text-zinc-400">Angles, details, and night runs.</p>
          </div>
          <a href="#build" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Build Yours</a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img src={src} alt="Lamborghini" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
