import { useState, type FormEvent } from 'react'
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
  { label: 'Sobre mí', href: '#sobre-mi' },
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
    </div>
  )
}

export default App
