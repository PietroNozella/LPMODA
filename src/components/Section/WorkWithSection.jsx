export default function WorkWithSection({ name = 'KATIE' }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <h2 className="text-center font-sans font-black uppercase text-3xl text-black mb-16">
        WORK WITH {name}
      </h2>
      <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto px-6">
        <article className="flex flex-col">
          <div className="relative w-full aspect-[3/4] overflow-visible">
            <img
              src="/images/img-5.png"
              alt="Bridal Services"
              className="w-full h-full object-cover grayscale"
            />
            <span className="absolute -left-6 top-6 font-['Great_Vibes'] text-3xl md:text-4xl text-white drop-shadow-md z-10">
              Bridal Services
            </span>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed mt-4 mb-4 max-w-sm">
            Criação de looks exclusivos para o dia mais especial da sua vida.
          </p>
          <button
            type="button"
            className="w-fit border border-black bg-transparent px-4 py-2 text-xs uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            INQUIRE FOR BRIDAL SERVICE
          </button>
        </article>
        <article className="flex flex-col mt-24">
          <div className="relative w-full aspect-[3/4] overflow-visible">
            <img
              src="/images/img-6.png"
              alt="Occasion Services"
              className="w-full h-full object-cover grayscale"
            />
            <span className="absolute -left-6 top-6 font-['Great_Vibes'] text-3xl md:text-4xl text-white drop-shadow-md z-10">
              Occasion Services
            </span>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed mt-4 mb-4 max-w-sm">
            Estilização completa para eventos e ocasiões memoráveis.
          </p>
          <button
            type="button"
            className="w-fit border border-black bg-transparent px-4 py-2 text-xs uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            INQUIRE FOR OCCASION HAIR & MAKEUP
          </button>
        </article>
      </div>
    </section>
  )
}
