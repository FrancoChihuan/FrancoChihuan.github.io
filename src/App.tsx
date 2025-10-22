import { useState } from 'react'
import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  ExperienceSection,
  Footer,
  Hero,
  Navbar,
  ProjectsSection,
  ScrollTopButton,
  SkillsSection,
} from './components'

import useLockBodyScroll from './hooks/useLockBodyScroll'
import type { NavItem } from './types/navigation'

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useLockBodyScroll(menuOpen)

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark text-slate-200">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-pattern bg-[length:22px_22px] opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-[-20%] -z-10 h-[520px] bg-radial-glow opacity-80" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-16 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute -right-20 top-32 h-72 w-72 rounded-full bg-primary-700/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-900/25 blur-3xl" />
      </div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navItems={navItems} />
      <Hero />

      <main className="relative z-10 space-y-24 pb-32 pt-16">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer navItems={navItems} />
      <ScrollTopButton />
    </div>
  )
}

export default App
