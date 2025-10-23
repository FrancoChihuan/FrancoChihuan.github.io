import { motion } from 'framer-motion'
import { experiences, type ExperienceActionIcon } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'
import {
  ArrowUpRightIcon,
  FolderIcon,
  GlobeAltIcon,
  InstagramIcon,
  WhatsappIcon,
} from '../icons/heroicons'

const iconMap: Record<ExperienceActionIcon, typeof GlobeAltIcon> = {
  globe: GlobeAltIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsappIcon,
  external: ArrowUpRightIcon,
  folder: FolderIcon,
}

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
      viewport={{ once: true, amount: 0.12 }}
    >
      {experiences.map((experience) => {
        const actions = experience.actions ?? []
        const hasMultipleActions = actions.length > 1

        return (
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
            {actions.length ? (
              <div
                className={`mt-6 flex w-full flex-wrap gap-2 sm:gap-3 md:flex-nowrap ${
                  hasMultipleActions ? '' : 'md:justify-start'
                }`}
              >
                {actions.map((action) => {
                  const Icon = iconMap[action.icon]
                  const targetProps = action.newTab
                    ? { target: '_blank', rel: 'noreferrer' as const }
                    : {}
                  const downloadProp = action.download ? { download: '' } : {}
                  const sizeClasses = hasMultipleActions
                    ? 'flex-1 min-w-0 justify-center whitespace-nowrap px-3 py-1.5 text-xs font-medium sm:text-sm sm:px-3 md:flex-initial md:px-4 md:py-2'
                    : 'px-4 py-2 text-sm font-medium'

                  return (
                    <a
                      key={`${experience.title}-${action.label}`}
                      href={action.href}
                      {...targetProps}
                      {...downloadProp}
                      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 font-medium text-slate-100 transition hover:border-primary-400/60 hover:bg-primary-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 ${sizeClasses}`}
                    >
                      <Icon className="h-4 w-4 text-primary-200" />
                      <span>{action.label}</span>
                    </a>
                  )
                })}
              </div>
            ) : null}
          </motion.article>
        )
      })}
    </motion.div>
  </SectionWrapper>
)

export default ExperienceSection
