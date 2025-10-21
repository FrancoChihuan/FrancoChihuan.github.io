import { profile } from '../data/profile'

type NavItem = {
  label: string
  href: string
}

type FooterProps = {
  navItems: NavItem[]
}

const Footer = ({ navItems }: FooterProps) => (
  <footer className="relative z-10 border-t border-white/10 bg-black/40 py-8 backdrop-blur">
    <div className="container flex flex-col items-start gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}. Construido con React, TypeScript y Tailwind CSS.
      </p>
      <div className="flex flex-wrap gap-3">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-primary-200">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
