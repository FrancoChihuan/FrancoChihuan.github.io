import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations'
import InfoChip from './InfoChip'

type SectionWrapperProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

const SectionWrapper = ({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionWrapperProps) => (
  <motion.section
    id={id}
    className="relative scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
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

export default SectionWrapper
