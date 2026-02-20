export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-[12px] py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-sans font-bold uppercase text-xs md:text-sm tracking-[0.2em] text-black">
        LARISSA ANTONELLI.
        </span>
        <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#work" className="font-['Playfair_Display'] italic text-sm text-black hover:opacity-70 transition-opacity">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="font-['Playfair_Display'] italic text-sm text-black hover:opacity-70 transition-opacity">
              About
            </a>
          </li>
          <li>
            <a href="#inquire" className="font-['Playfair_Display'] italic text-sm text-black hover:opacity-70 transition-opacity">
              Inquire
            </a>
          </li>
        </ul>
        </nav>
      </div>
    </header>
  )
}
