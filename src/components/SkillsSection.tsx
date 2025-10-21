import { motion } from 'framer-motion'
import { skills } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'

const SkillsSection = () => (
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
)

export default SkillsSection
