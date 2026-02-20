export default function Container({ children, className = '' }) {
  return (
    <div className={`relative min-h-screen overflow-visible max-w-7xl mx-auto px-6 md:px-12 py-24 ${className}`}>
      {children}
    </div>
  )
}
