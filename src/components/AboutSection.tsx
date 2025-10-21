import { motion } from 'framer-motion'
import { education, profile } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'

const AboutSection = () => (
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
            <p className="mt-2 text-sm font-medium text-white">{profile.languages.join(' · ')}</p>
          </div>
          {/* <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
              Enfoque actual
            </span>
            <p className="mt-2 text-sm font-medium text-white">
              Backend con Python, despliegues en AWS y analítica deportiva aplicada.
            </p>
          </div> */}
        </motion.div>
      </motion.div>

      <motion.div variants={fadeInUp} className="glass-panel border border-white/10 p-8 text-slate-200">
        <h3 className="font-display text-xl text-white">Formación</h3>
        <p className="mt-2 text-sm text-primary-100">{education.program}</p>
        <p className="mt-1 text-sm text-slate-300">{education.school}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.32em] text-primary-200">{education.period}</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          {education.details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-1 text-lg text-primary-200">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </SectionWrapper>
)

export default AboutSection
