export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-6 px-8 md:px-12 flex justify-between items-center">
      <span className="font-sans font-bold uppercase text-xs md:text-sm tracking-[0.2em]">
        KATIE BOYAR.
      </span>
      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#work" className="font-['Playfair_Display'] italic text-sm hover:opacity-70 transition-opacity">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="font-['Playfair_Display'] italic text-sm hover:opacity-70 transition-opacity">
              About
            </a>
          </li>
          <li>
            <a href="#inquire" className="font-['Playfair_Display'] italic text-sm hover:opacity-70 transition-opacity">
              Inquire
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
