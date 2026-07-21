import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}) {
  const base =
    'group relative inline-flex items-center font-body font-bold text-base transition-all duration-200 rounded-full cursor-pointer'

  const variants = {
    primary:
      'gap-3 bg-coral text-white pl-6 pr-2 py-2 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.25)] hover:brightness-110 active:brightness-95',
    secondary:
      'justify-center bg-transparent text-coral border border-coral px-8 py-3 hover:bg-coral hover:text-white',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {/* Text roll-up */}
      <span className="relative flex items-center h-5 overflow-hidden leading-none">
        <span className="flex items-center h-5 transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-0 left-0 flex items-center h-5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {children}
        </span>
      </span>

      {/* Icon roll-up (primary only) */}
      {variant === 'primary' && (
        <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-paper text-ink overflow-hidden shrink-0">
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
            <ArrowRight size={18} strokeWidth={2.5} />
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
            <ArrowRight size={18} strokeWidth={2.5} />
          </span>
        </span>
      )}
    </button>
  )
}