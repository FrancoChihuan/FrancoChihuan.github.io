import { AnimatePresence, motion } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import { profile } from '../data/profile'
import type { NavItem } from '../types/navigation'

type NavbarProps = {
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

const DesktopLinks = ({ navItems }: { navItems: NavItem[] }) => (
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
)

const MobileMenu = ({ navItems, onClose, open }: { navItems: NavItem[]; onClose: () => void; open: boolean }) => (
  <AnimatePresence>
    {open ? (
      <>
        <motion.div
          key="navbar-overlay"
          className="fixed inset-0 z-[200] bg-black/90 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.aside
          key="navbar-panel"
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
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg transition hover:border-primary-300 hover:text-primary-100"
              aria-label="Cerrar menú"
            >
              X
            </button>
          </div>
          <a
            href="#contacto"
            onClick={onClose}
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
                  onClick={onClose}
                >
                  <span className="text-primary-300">—</span>
                  <span>{item.label}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </>
    ) : null}
  </AnimatePresence>
)

const Navbar = ({ menuOpen, setMenuOpen, navItems }: NavbarProps) => (
  <>
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
          <DesktopLinks navItems={navItems} />
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

    <MobileMenu navItems={navItems} onClose={() => setMenuOpen(false)} open={menuOpen} />
  </>
)

export default Navbar
