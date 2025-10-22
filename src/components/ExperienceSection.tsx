import { motion } from 'framer-motion'
import { experiences } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'

const ExperienceSection = () => (
  <SectionWrapper
    id="experiencia"
    eyebrow="Experiencia"
    title="Experiencias que potencian mi visión"
    description="Lidero iniciativas que unen tecnología y bienestar, y apoyo a pares para elevar el nivel técnico del equipo."
  >
    <motion.div
      className="grid gap-6 md:grid-cols-2"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {experiences.map((experience) => (
        <motion.article
          key={`${experience.title}-${experience.period}`}
          variants={fadeInUp}
          whileHover={{ y: -4 }}
          className="glass-panel flex h-full flex-col border border-white/10 p-8"
        >
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl text-white">{experience.title}</h3>
            <p className="text-sm font-medium text-primary-100">{experience.organization}</p>
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
)

export default ExperienceSection
