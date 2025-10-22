import { motion } from 'framer-motion'
import { education } from '../data/profile'
import { fadeInUp } from './animations'
import { SectionWrapper } from './common'

const EducationSection = () => (
  <SectionWrapper
    id="educacion"
    eyebrow="Formación"
    title="Formación académica"
  >
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
  </SectionWrapper>
)

export default EducationSection
