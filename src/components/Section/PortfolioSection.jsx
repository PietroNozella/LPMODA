export default function PortfolioSection() {
  return (
    <section className="relative mb-32 overflow-hidden py-12 bg-white">
      <h2 className="text-center text-lg md:text-xl text-neutral-500 font-['Helvetica_Neue'] uppercase tracking-widest mb-12">
        BROWSE MY WORK
      </h2>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative grid grid-cols-4 md:grid-cols-6 auto-rows-[120px] md:auto-rows-[140px] gap-0 max-w-6xl mx-auto">
        <div className="col-span-2 row-span-3 md:col-span-2 md:row-span-4 relative">
          <img
            src="/images/img-7.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <svg className="absolute top-2 left-2 w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </div>
        <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-3 relative">
          <img
            src="/images/img-8.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <svg className="absolute bottom-2 right-2 w-10 h-10 text-red-600 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </div>
        <div className="col-span-4 row-span-2 md:col-span-2 md:row-span-5 flex items-end justify-end p-4 md:p-6 bg-white -m-px z-10">
          <span className="font-['Helvetica_Neue'] font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-[-2px] text-black text-right leading-tight">
            RAW
          </span>
        </div>
        <div className="col-span-2 row-span-3 md:col-span-2 md:row-span-3 relative">
          <img
            src="/images/img-9.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <svg className="absolute top-3 right-2 w-6 h-6 text-red-600 -rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </div>
        <div className="col-span-2 row-span-2 relative hidden md:block">
          <svg className="absolute -left-8 top-1/2 w-24 h-24 text-red-600 opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 50 Q 30 20, 60 50 T 100 50" strokeLinecap="round" />
          </svg>
          <img
            src="/images/img-10.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-4 relative">
          <img
            src="/images/img-11.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <svg className="absolute top-2 right-2 w-7 h-7 text-red-600 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </div>
        <div className="col-span-4 row-span-2 md:col-span-2 md:row-span-3 flex items-center justify-end p-4 md:p-6 bg-white -m-px z-10">
          <span className="font-['Helvetica_Neue'] font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-[-1px] text-black text-right leading-tight">
            VISION
          </span>
        </div>
        <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-3 relative">
          <svg className="absolute -bottom-4 -right-4 w-20 h-20 text-red-600 opacity-70 -rotate-45 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 90 Q 40 40, 90 10" strokeLinecap="round" />
          </svg>
          <img
            src="/images/img-13.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
