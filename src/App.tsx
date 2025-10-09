import type { ReactNode } from 'react'
import {
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
  { label: 'Contacto', href: '#contacto' },
]

const SocialLink = ({ link }: { link: Link }) => (
  <a
    href={link.href}
    className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 px-4 py-2 text-sm font-medium text-primary-800 transition hover:-translate-y-0.5 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-900"
  >
    <span>{link.label}</span>
    <span aria-hidden="true">↗</span>
  </a>
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
  <section id={id} className="scroll-mt-24">
    <div className="container">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl text-dark md:text-4xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base text-slate-600 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  </section>
)

function App() {
  return (
    <div className="relative min-h-screen bg-light">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary-100/70 via-primary-50/40 to-transparent" />

      <header id="inicio" className="relative z-10 bg-transparent">
        <div className="container flex flex-col gap-10 py-8 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-xl font-semibold text-primary-800">
            {profile.name}
          </span>
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-primary-100/60 hover:text-primary-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="container grid gap-12 pb-20 pt-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100/80 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm ring-1 ring-primary-200/70">
              {profile.role}
            </span>
            <h1 className="font-display text-4xl leading-tight text-dark md:text-5xl">
              Hola, soy {profile.name}
            </h1>
            <p className="text-lg text-slate-600">{profile.headline}</p>
            <p className="text-base text-slate-600">{profile.summary}</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
                📍 {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
                ✅ {profile.availability}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-primary-700"
              >
                Ver proyectos destacados
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 shadow-sm ring-1 ring-primary-200 transition hover:-translate-y-0.5 hover:bg-primary-50"
              >
                Hablemos
              </a>
            </div>
          </div>

          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-100 via-primary-200/70 to-primary-300/60 blur-3xl" />
            <div className="w-full rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200/70">
              <h3 className="font-display text-lg text-dark">En qué estoy trabajando</h3>
              <p className="mt-3 text-sm text-slate-600">
                Actualmente investigo cómo combinar analítica de datos en tiempo real
                con patrones de diseño escalables para resolver retos en educación y
                servicios.
              </p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3 rounded-2xl bg-primary-50/80 px-4 py-3">
                  <span className="mt-1 text-lg">✨</span>
                  <p>
                    Mentor de estudiantes en proyectos ágiles y buenas prácticas de
                    desarrollo.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-primary-50/80 px-4 py-3">
                  <span className="mt-1 text-lg">🧪</span>
                  <p>
                    Experimentando con pruebas automatizadas end-to-end y pipelines CI/CD.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-primary-700">
                {['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Scrum'].map(
                  (item) => (
                    <span key={item} className="rounded-full bg-primary-100 px-3 py-1">
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 space-y-24 pb-24">
        <SectionWrapper
          id="sobre-mi"
          eyebrow="Trayectoria"
          title="Sobre mí"
          description="Soy curioso, autodidacta y disfruto resolver problemas complejos construyendo productos que la gente realmente quiera usar."
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-base text-slate-600">
                Durante la carrera he reforzado una visión integral de la ingeniería,
                abarcando desde análisis de requerimientos hasta despliegues en la nube.
                Mi enfoque es construir soluciones escalables que mantengan la calidad
                incluso cuando los equipos o usuarios crecen.
              </p>
              <p className="text-base text-slate-600">
                Combino metodologías ágiles, documentación clara y métricas para medir
                impacto. Me motiva asumir retos donde pueda aprender tecnologías nuevas,
                liderar iniciativas y aportar a equipos que valoran la colaboración.
              </p>
              <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-primary-200/30 ring-1 ring-primary-100/60 sm:grid-cols-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                    Ubicación
                  </span>
                  <p className="mt-2 text-sm font-medium text-dark">{profile.location}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                    Disponibilidad
                  </span>
                  <p className="mt-2 text-sm font-medium text-dark">{profile.availability}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                    Email
                  </span>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="mt-2 block text-sm font-medium text-primary-700 hover:underline"
                  >
                    {profile.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                    Teléfono
                  </span>
                  <p className="mt-2 text-sm font-medium text-dark">{profile.contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-dark px-6 py-8 text-white shadow-xl">
              <h3 className="font-display text-xl">Formación</h3>
              <p className="mt-2 text-sm text-white/80">{education.program}</p>
              <p className="mt-1 text-sm text-white/60">
                {education.school} · {education.period}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {education.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 text-base text-accent">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="habilidades"
          eyebrow="Stack"
          title="Tecnologías y habilidades destacadas"
          description="Me muevo con soltura entre frontend, backend y gestión de proyectos para entregar soluciones end-to-end."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200/70"
              >
                <h3 className="font-display text-lg text-dark">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-primary-50 px-3 py-1 font-medium text-primary-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="experiencia"
          eyebrow="Experiencia"
          title="Experiencias que me han formado"
          description="Liderazgo técnico, mentoría y mucho aprender haciendo. Estas son algunas historias que marcaron mi crecimiento."
        >
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="rounded-3xl bg-white p-8 shadow-lg shadow-primary-100/40 ring-1 ring-primary-100/70"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="font-display text-xl text-dark">{experience.title}</h3>
                    <p className="text-sm font-medium text-primary-700">
                      {experience.organization}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-500">{experience.period}</span>
                </div>
                <p className="mt-4 text-base text-slate-600">{experience.description}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="mt-1 text-lg text-primary-500">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="proyectos"
          eyebrow="Portafolio"
          title="Proyectos que cuentan mi historia"
          description="Seleccioné proyectos académicos y personales donde apliqué ingeniería de software, trabajo en equipo y enfoque en usuarios."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg shadow-primary-100/40 ring-1 ring-primary-100/70 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-display text-2xl text-dark group-hover:text-primary-700">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {project.tags[0]}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 text-lg text-primary-500">☆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-primary-700">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary-100 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-primary-700">
                  {project.link ? <SocialLink link={project.link} /> : null}
                  {project.repo ? <SocialLink link={project.repo} /> : null}
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="contacto"
          eyebrow="Contacto"
          title="Construyamos algo juntos"
          description="¿Buscas a alguien que aporte energía, técnicas modernas y capacidad de aprendizaje rápido a tu equipo? Hablemos."
        >
          <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-xl shadow-primary-100/50 ring-1 ring-primary-100/80 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-base text-slate-600">
                Estoy listo para aportar en prácticas pre profesionales, proyectos de
                consultoría tecnológica o iniciativas freelance. Me comprometo con
                procesos transparentes, feedback constante y resultados que aporten valor.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="text-lg text-primary-500">✉️</span>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="font-medium text-primary-700 hover:underline"
                  >
                    {profile.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg text-primary-500">📱</span>
                  <span className="font-medium text-dark">{profile.contact.phone}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {profile.socials.map((social) => (
                  <SocialLink key={social.href} link={social} />
                ))}
              </div>
            </div>

            <form
              className="space-y-4"
              action={`mailto:${profile.contact.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="nombre" className="text-sm font-medium text-dark">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="¿Cómo te llamas?"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="correo" className="text-sm font-medium text-dark">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="name@empresa.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="text-sm font-medium text-dark">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntame sobre tu proyecto o la oportunidad..."
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-primary-700"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </SectionWrapper>
      </main>

      <footer className="relative z-10 border-t border-slate-200/60 bg-white/80 py-8 backdrop-blur">
        <div className="container flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-primary-700"
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
