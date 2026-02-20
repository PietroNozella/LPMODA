import TitleSecondary from '../ui/TitleSecondary'

export default function AsymmetricGrid({ children, title, reverse = false }) {
  return (
    <section className="mb-32">
      <div className={`grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-center ${reverse ? 'md:grid-cols-[0.8fr_1.2fr]' : ''}`}>
        <div className={`relative z-10 ${reverse ? 'md:order-2' : ''}`}>
          {title && <TitleSecondary className="mb-8">{title}</TitleSecondary>}
          {children}
        </div>
        <div className={`relative md:-mt-24 z-0 ${reverse ? 'md:order-1 md:-mr-12 md:mt-0' : 'md:-ml-12'}`}>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
              alt="Fashion editorial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
