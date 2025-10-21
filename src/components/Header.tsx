import { AnimatePresence, motion } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import { profile } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { InfoChip } from './common'

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
  <>
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

    <header id="inicio" className="relative z-50">
      <div className="container flex flex-col gap-4 py-6">
        <div className="flex items-center justify-between">
          <motion.span
            className="hidden font-display text-2xl font-semibold text-white md:inline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profile.name}
          </motion.span>
          <div className="flex items-center gap-3">
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
          </div>
        </div>

      </div>

      <div className="container relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface/70 px-8 py-14 shadow-[0_40px_120px_rgba(29,95,255,0.24)] backdrop-blur">
        <div className="pointer-events-none absolute -left-10 top-16 h-48 w-48 rounded-full bg-primary-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 top-6 h-32 w-32 rounded-full bg-primary-700/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-4 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary-400/35 blur-2xl" />

        <motion.div
          className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-200 shadow-glow-primary">
              {profile.role}
            </span>
            <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
              Hola, soy {profile.name.split(' ')[0]}
            </h1>
            <p className="text-lg text-slate-300">{profile.summary}</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <InfoChip label={`📍 ${profile.location}`} />
              <InfoChip label={`🚀 ${profile.availability}`} />
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow-primary transition hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver mis proyectos
                <span aria-hidden="true">→</span>
              </motion.a>
              <motion.a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Contactame
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative rounded-3xl border border-white/10 bg-surfaceElevated/80 p-8 shadow-glow-surface backdrop-blur"
          >
            <motion.img
              src="/vite.svg"
              alt=""
              className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <h3 className="font-display text-lg text-white">
              Impulso soluciones tecnológicas escalables
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Me enfoco en crear experiencias robustas y agradables, integrando buenas prácticas
              backend, despliegues en la nube y componentes frontend modernos.
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <motion.div
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-primary-500/10 px-4 py-3"
                whileHover={{ scale: 1.02 }}
              >
                <span className="mt-1 text-lg text-primary-200">🧠</span>
                <p>
                  Desarrollo y mantengo APIs seguras y eficientes con Django REST Framework o NodeJS,
                  integradas con frontend en React y bases de datos relacionales.
                </p>
              </motion.div>
              <motion.div
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-primary-500/10 px-4 py-3"
                whileHover={{ scale: 1.02 }}
              >
                <span className="mt-1 text-lg text-primary-200">⚙️</span>
                <p>
                  Automatizo procesos, optimizo consultas y despliego proyectos en la nube con AWS y
                  Docker, priorizando rendimiento y mantenibilidad.
                </p>
              </motion.div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-primary-200">
              {['Django REST', 'NodeJS', 'MySQL', 'React', 'PostgreSQL', 'AWS', 'Git-GitHub'].map(
                (item) => (
                  <span key={item} className="rounded-full bg-primary-500/15 px-3 py-1">
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  </>
)

export default Header
