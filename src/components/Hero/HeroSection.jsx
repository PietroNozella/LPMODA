export default function HeroSection({
  brandName = 'LARISSA ANTONELLI ARTISTRY.',
  location = 'SEATTLE BASED',
}) {
  return (
    <section className="grid grid-cols-2 h-[100vh] gap-0">
      <div className="relative overflow-hidden">
        <img
          src="/images/img-1.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 right-10 z-10 text-left">
          <h1 className="font-sans font-bold text-white text-5xl md:text-6xl uppercase">
            {brandName}
          </h1>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-white">
        <div className="flex items-center gap-6 md:gap-8 px-8">
          <p className="font-['Playfair_Display'] font-extralight text-sm md:text-base text-neutral-600 uppercase tracking-widest shrink-0">
            {location}
          </p>
          <div className="relative shrink-0">
            <div className="relative -mt-12 -mr-8">
              <img
                src="/images/img-2.png"
                alt=""
                className="w-64 md:w-80 aspect-[3/4] object-cover grayscale"
              />
            </div>
            <img
              src="/images/image_5.png"
              alt=""
              className="absolute -left-12 -bottom-12 w-40 md:w-48 aspect-[3/4] object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
