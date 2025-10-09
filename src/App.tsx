import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skills,
  type Link,
} from './data/profile'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const SocialLink = ({ link }: { link: Link }) => (
  <motion.a
    href={link.href}
    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-primary-400/60 hover:bg-primary-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.96 }}
  >
    <span>{link.label}</span>
    <span aria-hidden="true">↗</span>
  </motion.a>
)

const InfoChip = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
    {label}
  </span>
)

const SectionWrapper = ({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) => (
  <motion.section
    id={id}
    className="relative scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
  >
    <div className="container relative">
      <div className="mb-10 flex flex-col gap-3">
        <InfoChip label={eyebrow} />
        <h2 className="font-display text-3xl text-white md:text-4xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base text-slate-300 md:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  </motion.section>
)

function App() {
  const email =
    profile.contact.email && !profile.contact.email.includes('actualiza')
      ? profile.contact.email
      : undefined
  const phone =
    profile.contact.phone && !profile.contact.phone.toLowerCase().includes('actualiza')
      ? profile.contact.phone
      : undefined

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark text-slate-200">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-pattern bg-[length:22px_22px] opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-[-20%] -z-10 h-[520px] bg-radial-glow opacity-80" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-16 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute -right-20 top-32 h-72 w-72 rounded-full bg-primary-700/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-900/25 blur-3xl" />
      </div>

      <header id="inicio" className="relative z-10">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <motion.span
            className="font-display text-2xl font-semibold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profile.name}
          </motion.span>
          <motion.nav
            className="flex flex-wrap justify-end gap-3 text-sm font-medium text-slate-300"
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
                  Ver proyectos destacados
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
                Me enfoco en crear experiencias robustas y agradables, integrando buenas
                prácticas backend, despliegues en la nube y componentes frontend modernos.
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
                    Automatizo procesos, optimizo consultas y despliego proyectos en la nube con AWS y Docker, 
                    priorizando rendimiento y mantenibilidad.
                  </p>
                </motion.div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-primary-200">
                {['Django REST', 'NodeJS', 'MySQL', 'React', 'PostgreSQL', 'AWS', 'Git-GitHub'].map((item) => (
                  <span key={item} className="rounded-full bg-primary-500/15 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 space-y-24 pb-32 pt-16">
        <SectionWrapper
          id="sobre-mi"
          eyebrow="Trayectoria"
          title="Sobre mí"
          description="Soy estudiante de Ingeniería de Sistemas con enfoque en el desarrollo backend y arquitecturas escalables. Me apasiona construir soluciones eficientes combinando Python (Django REST Framework), React y bases de datos como MySQL, SQL Server y PostgreSQL."
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              className="space-y-6 text-base text-slate-300"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                'Aplico buenas prácticas de control de versiones con Git/GitHub, despliegue en la nube con AWS y Docker, y automatización de flujos CI/CD para asegurar calidad y rendimiento.',
                'Disfruto trabajar en proyectos colaborativos, aprender nuevas tecnologías y transformar ideas en productos funcionales. Actualmente busco prácticas preprofesionales en desarrollo de software o TI para seguir creciendo y aportar valor real a los equipos donde participe.',
              ].map((paragraph) => (
                <motion.p key={paragraph} variants={fadeInUp}>
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                variants={fadeInUp}
                className="grid gap-4 rounded-3xl border border-white/10 bg-surfaceElevated/80 p-6 shadow-inner shadow-black/40 backdrop-blur"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
                    Idiomas
                  </span>
                  <p className="mt-2 text-sm font-medium text-white">
                    {profile.languages.join(' · ')}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
                    Enfoque actual
                  </span>
                  <p className="mt-2 text-sm font-medium text-white">
                    Backend con Python, despliegues en AWS y analítica deportiva aplicada.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass-panel border border-white/10 p-8 text-slate-200"
            >
              <h3 className="font-display text-xl text-white">Formación</h3>
              <p className="mt-2 text-sm text-primary-100">{education.program}</p>
              <p className="mt-1 text-sm text-slate-300">
                {education.school} · {education.period}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {education.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 text-base text-primary-200">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="habilidades"
          eyebrow="Stack principal"
          title="Tecnologías y habilidades que domino"
          description="Un stack que combina diseño de APIs, bases de datos robustas y experiencias frontend modernas."
        >
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="glass-panel border border-white/10 p-6"
              >
                <h3 className="font-display text-lg text-white">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-primary-100">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full bg-primary-500/10 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        <SectionWrapper
          id="experiencia"
          eyebrow="Experiencia"
          title="Experiencias que potencian mi visión"
          description="Lidero iniciativas que unen tecnología y bienestar, y apoyo a pares para elevar el nivel técnico del equipo."
        >
          <motion.div
            className="space-y-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {experiences.map((experience) => (
              <motion.article
                key={experience.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-panel border border-white/10 p-8"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white">{experience.title}</h3>
                    <p className="text-sm font-medium text-primary-100">
                      {experience.organization}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-400">{experience.period}</span>
                </div>
                <p className="mt-4 text-base text-slate-300">{experience.description}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="mt-1 text-lg text-primary-200">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </SectionWrapper>

        <SectionWrapper
          id="proyectos"
          eyebrow="Portafolio"
          title="Proyectos que cuentan mi historia"
          description="Casos donde apliqué Python, Django y visualización de datos para resolver necesidades reales."
        >
          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-surfaceElevated/70 p-8 shadow-xl shadow-primary-500/10 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-display text-2xl text-white transition group-hover:text-primary-200">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                  </div>
                  <span className="rounded-full bg-primary-500/15 px-3 py-1 text-xs font-semibold text-primary-100">
                    {project.tags[0]}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 text-lg text-primary-200">☆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-primary-100">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-primary-100">
                  {project.link ? <SocialLink link={project.link} /> : null}
                  {project.repo ? <SocialLink link={project.repo} /> : null}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </SectionWrapper>

        <SectionWrapper
          id="certificaciones"
          eyebrow="Aprendizaje continuo"
          title="Certificaciones relevantes"
          description="Formación complementaria que refuerza mi enfoque backend y manejo de versiones."
        >
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="glass-panel border border-white/10 p-6"
              >
                <h3 className="font-display text-lg text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-primary-100">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.credentialId ? (
                  <p className="mt-2 text-xs text-slate-400">ID: {cert.credentialId}</p>
                ) : null}
                {cert.link ? (
                  <div className="mt-4">
                    <SocialLink link={cert.link} />
                  </div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        <SectionWrapper
          id="contacto"
          eyebrow="Contacto"
          title="Construyamos algo poderoso"
          description="¿Te interesa integrar APIs robustas o necesitas apoyo en despliegues backend? Estoy listo para aportar."
        >
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-surface/80 p-10 shadow-glow-surface backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="space-y-6 text-sm text-slate-300"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={fadeInUp}>
                Busco oportunidades para unirme a equipos ágiles, impulsar productos digitales
                y seguir creciendo como backend developer. Me motiva aprender, documentar y
                entregar valor continuo.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {email ? (
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-primary-200">✉️</span>
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-primary-100 transition hover:text-white"
                    >
                      {email}
                    </a>
                  </div>
                ) : null}
                {phone ? (
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-primary-200">📱</span>
                    <span className="font-medium text-primary-100">{phone}</span>
                  </div>
                ) : null}
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                {profile.socials.map((social) => (
                  <SocialLink key={social.href} link={social} />
                ))}
              </motion.div>
            </motion.div>

            <motion.form
              className="space-y-4"
              action={email ? `mailto:${email}` : undefined}
              method={email ? 'post' : undefined}
              encType={email ? 'text/plain' : undefined}
              variants={fadeInUp}
            >
              <div>
                <label htmlFor="nombre" className="text-sm font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="¿Cómo te llamas?"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
                  required
                />
              </div>
              <div>
                <label htmlFor="correo" className="text-sm font-medium text-white">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="name@empresa.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
                  required
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="text-sm font-medium text-white">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntame sobre tu proyecto o la oportunidad..."
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full rounded-2xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-glow-primary transition hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar mensaje
              </motion.button>
            </motion.form>
          </div>
        </SectionWrapper>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/40 py-8 backdrop-blur">
        <div className="container flex flex-col items-start gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Construido con React, TypeScript y Tailwind
            CSS.
          </p>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-primary-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
