const links = [
  { label: 'Meet Your Artist', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Inquire For Editorial Hair & Makeup', href: '#' },
  { label: 'Inquire For Occasion Hair & Makeup', href: '#' },
]

export default function TransitionSection() {
  return (
    <section className="grid grid-cols-2 min-h-[70vh]">
      <div className="flex flex-col">
        <img
          src="/images/banner-left.png"
          alt=""
          className="w-full h-64 object-cover"
        />
        <div className="p-16 flex items-center gap-8">
          <div className="shrink-0 origin-center -rotate-90">
            <span className="font-sans font-bold uppercase text-black text-2xl md:text-3xl">
              EXPLORE
            </span>
          </div>
          <nav className="flex-1 min-w-0">
            <ul className="w-full">
              {links.map(({ label, href }) => (
                <li key={label} className="w-full border-b border-gray-300 py-3">
                  <a
                    href={href}
                    className="block text-xs uppercase text-black hover:text-neutral-600 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="relative h-full min-h-[400px]">
        <img
          src="/images/img-4.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute bottom-8 right-8 z-10 max-w-48">
          <p className="text-[10px] text-white text-justify leading-relaxed font-sans">
            A moda transcende tendências. É uma narrativa visual que conecta arte, identidade e movimento. Cada imagem captura um instante de autenticidade.
          </p>
        </div>
      </div>
    </section>
  )
}
