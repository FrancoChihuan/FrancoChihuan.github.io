import { motion } from 'framer-motion'
import usilLogo from '../assets/usil-logo.svg'
import { education } from '../data/profile'
import { fadeInUp } from './animations'
import { SectionWrapper } from './common'

const EducationSection = () => (
  <SectionWrapper
    id="educacion"
    eyebrow="Formación"
    title="Formación académica"
  >
    <motion.article
      variants={fadeInUp}
      className="glass-panel border border-white/10 p-6 text-slate-200 shadow-2xl shadow-primary-900/20 sm:p-8"
    >
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-6 md:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 p-3 ring-1 ring-white/30 backdrop-blur md:h-24 md:w-24">
            <img src={usilLogo} alt="Logo Universidad San Ignacio de Loyola" className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-primary-200">{education.period}</p>
            <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">{education.program}</h3>
            <p className="mt-2 text-sm text-slate-300 md:text-base">{education.school}</p>
          </div>
        </div>
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-primary-100 backdrop-blur-sm md:ml-auto">
          USIL
        </span>
      </div>
      <div className="mt-6 w-full rounded-2xl border border-white/5 bg-primary-900/20 p-6 backdrop-blur-sm">
        <h4 className="text-xs uppercase tracking-[0.24em] text-primary-200">Competencias destacadas</h4>
        <ul className="mt-4 space-y-3 text-sm text-slate-200 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4 md:space-y-0">
          {education.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary-300" aria-hidden="true" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  </SectionWrapper>
)

export default EducationSection
