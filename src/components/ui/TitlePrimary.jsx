export default function TitlePrimary({ children, as: Tag = 'h1', className = '' }) {
  return (
    <Tag className={`font-['Bebas_Neue'] font-normal uppercase tracking-[0.2em] text-black text-5xl md:text-8xl leading-none ${className}`}>
      {children}
    </Tag>
  )
}
