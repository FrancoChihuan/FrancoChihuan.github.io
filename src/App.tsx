import { useEffect, useState, type FormEvent } from 'react'
import { profile } from './data/profile'
import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  ExperienceSection,
  Footer,
  Header,
  ProjectsSection,
  SkillsSection,
} from './components'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const email = profile.contact.email?.trim() ? profile.contact.email : undefined
  const phone = profile.contact.phone?.trim() ? profile.contact.phone : undefined
  const formEndpoint = 'https://formsubmit.co/ajax/francochisan31@gmail.com'
  const [showScrollTop, setShowScrollTop] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('_captcha', 'false')
    formData.append('_subject', 'Nuevo mensaje desde el portafolio')
    if (email) {
      formData.append('_cc', email)
    }

    try {
      setFormStatus('loading')
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      setFormStatus('success')
      form.reset()
    } catch (error) {
      console.error('Form submission error', error)
      setFormStatus('error')
    }
  }

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark text-slate-200">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-pattern bg-[length:22px_22px] opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-[-20%] -z-10 h-[520px] bg-radial-glow opacity-80" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-16 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute -right-20 top-32 h-72 w-72 rounded-full bg-primary-700/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-900/25 blur-3xl" />
      </div>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} navItems={navItems} />

      <main className="relative z-10 space-y-24 pb-32 pt-16">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection
          formStatus={formStatus}
          onSubmit={handleSubmit}
          email={email}
          phone={phone}
          socials={profile.socials}
        />
      </main>

      <Footer navItems={navItems} />
      <button
        type="button"
        onClick={handleScrollTop}
        className={`fixed bottom-6 right-5 z-[160] inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-300/70 bg-primary-500 text-lg font-semibold text-white shadow-glow-primary transition duration-200 hover:scale-105 hover:shadow-[0_12px_30px_rgba(26,95,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 md:bottom-8 md:right-10 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
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
    </div>
  )
}

export default App
