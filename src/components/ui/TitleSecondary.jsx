export default function TitleSecondary({ children, as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`font-['Playfair_Display'] font-medium text-black text-2xl md:text-4xl ${className}`}>
      {children}
    </Tag>
  )
}
