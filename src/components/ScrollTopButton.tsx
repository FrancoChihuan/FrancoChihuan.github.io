import useScrollTopButton from '../hooks/useScrollTopButton'

const ScrollTopButton = () => {
  const visible = useScrollTopButton()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`fixed bottom-6 right-5 z-[160] inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-300/70 bg-primary-500 text-lg font-semibold text-white shadow-glow-primary transition duration-200 hover:scale-105 hover:shadow-[0_12px_30px_rgba(26,95,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 md:bottom-8 md:right-10 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Ir al inicio"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

export default ScrollTopButton
