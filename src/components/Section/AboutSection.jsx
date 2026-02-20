export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-16 lg:gap-24 items-start">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="font-sans text-xs md:text-sm text-neutral-600 uppercase tracking-[0.2em]">
            I pose as if the world is my apocalypse scene.
          </p>
          <h2 className="font-sans font-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl uppercase leading-tight text-black">
            I'm not interested in being perfect... I am the signal.
          </h2>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              type="button"
              className="rounded-full border border-black bg-transparent px-6 py-3 text-xs uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white transition-colors"
            >
              SEE ALL
            </button>
            <span className="font-sans font-bold uppercase text-sm text-black">
              Larissa Antonelli — Artist & Creative Director
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-end md:items-end">
          <h3 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight text-black mb-6 md:mb-8 text-right w-full">
            About me
          </h3>
          <div className="w-full aspect-[3/4] max-h-[600px] overflow-hidden bg-neutral-100">
            <img
              src="https://placehold.co/600x800/f5f5f5/e5e5e5?text=Portrait"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
