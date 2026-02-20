export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-24 px-8 md:px-12">
      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="font-sans uppercase text-6xl md:text-8xl font-black tracking-tighter text-black">
            LARISSA ANTONELLI.
          </h2>
          <div className="flex gap-16 md:justify-end md:items-end">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-[10px] md:text-xs font-sans uppercase text-neutral-500 hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[10px] md:text-xs font-sans uppercase text-neutral-500 hover:text-black transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="mailto:hello@larissaantonelli.com" className="text-[10px] md:text-xs font-sans uppercase text-neutral-500 hover:text-black transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-100 pt-8 mt-16 gap-4">
          <span className="text-[10px] text-neutral-400 uppercase">
            © 2024 Larissa Antonelli. All rights reserved.
          </span>
          <span className="text-[10px] text-neutral-400 uppercase">
            Design by Larissa Antonelli
          </span>
        </div>
      </div>
    </footer>
  )
}
