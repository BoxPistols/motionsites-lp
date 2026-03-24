interface BadgeProps {
  children: React.ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className="liquid-glass rounded-full inline-block mb-4"
      style={{
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 500,
        color: '#fff',
        fontSize: '0.75rem',
        padding: '0.25rem 0.875rem',
      }}
    >
      {children}
    </span>
  )
}
