import { AnimatePresence, motion } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import { profile } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import imagenProfile from '../assets/FotoProfesional.webp'

type NavItem = {
  label: string
  href: string
}

type HeaderProps = {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
  navItems: NavItem[]
}

const mobilePanelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.24, ease: [0.37, 0, 0.63, 1] as const },
  },
}

const mobileListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const mobileListItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const MenuToggleIcon = ({ open }: { open: boolean }) => (
  <span className="relative block h-4 w-5">
    <span
      className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-white transition-transform duration-200 ${
        open ? 'translate-y-2 rotate-45' : ''
      }`}
    />
    <span
      className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-white transition-transform duration-200 ${
        open ? '-translate-y-2 -rotate-45' : ''
      }`}
    />
  </span>
)

const Header = ({ menuOpen, setMenuOpen, navItems }: HeaderProps) => (
  <header id="inicio" className="relative z-50">
    <div className="fixed inset-x-0 top-0 z-[180] border-b border-white/10 bg-dark/80 backdrop-blur md:bg-transparent md:border-none">
      <div className="container flex items-center justify-between py-6">
        <motion.span
          className="font-display text-2xl font-semibold text-white md:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.name}
        </motion.span>
        <div className="flex items-center gap-3">
          <motion.nav
            className="hidden items-center justify-end gap-3 text-sm font-medium text-slate-300 md:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-primary-400/70 hover:bg-primary-400/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-primary-400/70 hover:text-primary-200 md:hidden ${
              menuOpen ? 'opacity-0 pointer-events-none' : ''
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <MenuToggleIcon open={menuOpen} />
          </button>
        </div>
      </div>
    </div>
    <div className="h-[92px] md:h-16 lg:h-20" />
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          key="mobile-overlay"
          className="fixed inset-0 z-[200] bg-black/90 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </AnimatePresence>
    <AnimatePresence>
      {menuOpen ? (
        <motion.aside
          key="mobile-panel"
          className="fixed inset-0 z-[210] flex h-full w-full flex-col overflow-y-auto bg-dark px-6 py-8 text-white shadow-xl transition-transform duration-300 ease-out md:hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobilePanelVariants}
          id="mobile-navigation"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-semibold">{profile.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg transition hover:border-primary-300 hover:text-primary-100"
              aria-label="Cerrar menú"
            >
              X
            </button>
          </div>
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-primary-300/70 bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow-primary transition hover:-translate-y-0.5 hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200"
          >
            ¡Hablemos!
          </a>
          <motion.ul
            className="mt-10 flex flex-col gap-5 text-base font-semibold text-slate-100"
            variants={mobileListVariants}
          >
            {navItems.map((item) => (
              <motion.li key={item.href} variants={mobileListItem}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-primary-400/70 hover:bg-primary-500/10"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-primary-300">—</span>
                  <span>{item.label}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-auto space-y-5 pt-12 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <span className="text-2xl text-primary-200">💬</span>
              <div>
                <p className="font-semibold text-white">Contacto directo</p>
                <p>{profile.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-5 py-3 text-sm">
              <span className="text-2xl text-primary-200">📞</span>
              <span>{profile.contact.phone}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 transition hover:border-primary-300 hover:text-primary-100"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
    <div className="container relative flex justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface/70 px-6 py-20 shadow-[0_40px_120px_rgba(29,95,255,0.24)] backdrop-blur md:px-16 lg:px-24">
        <div className="pointer-events-none absolute -left-10 top-16 h-48 w-48 rounded-full bg-primary-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 top-6 h-32 w-32 rounded-full bg-primary-700/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-4 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary-400/35 blur-2xl" />

        <motion.div
          className="flex max-w-3xl flex-col items-center gap-12 text-center"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-200 shadow-glow-primary">
              {profile.role}
            </span>
            <motion.div variants={fadeInUp} className="max-w-md rounded-[2rem] p-6">
              <div className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72">
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-primary-500/35 to-primary-700/15 blur-2xl" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary-400/50 shadow-[0_20px_45px_rgba(29,95,255,0.35)]">
                  <img
                    src={imagenProfile}
                    alt="Foto de Franco Chihuan"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
              Hola, soy {profile.name.split(' ')[0]}
            </h1>
            <p className="text-lg text-slate-300">
              Tengo conocimientos sólidos en desarrollo full stack con Django Rest Framework, bases
              de datos (MySQL, SQL Server), React y Tailwind. Soy proactivo, aprendo rápido, me
              adapto con facilidad a nuevos entornos y disfruto trabajar en equipo. Me motiva asumir
              retos que me permitan crecer profesionalmente y aportar soluciones prácticas dentro
              del área de tecnología. Actualmente en busca de prácticas preprofesionales como
              developer junior.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
                Surquillo, Lima | Bellavista, Callao.
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
                En busca de prácticas pre profesionales como Developer junior.
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-4">
              <motion.a
                href="#contacto"
                className="md:order-1 inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 md:w-auto md:max-w-none"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Contactame
              </motion.a>
              <motion.a
                href="#proyectos"
                className="md:order-2 inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 md:w-auto md:max-w-none"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver mis proyectos
                <span aria-hidden="true">→</span>
              </motion.a>
              <motion.a
                href="/miPDF/Curriculum_Vitae.pdf"
                download
                className="md:order-3 inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 md:w-auto md:max-w-none"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Currículum
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
)

export default Header
