import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile, skills } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'
import { ChatBubbleLeftRightIcon, GlobeAltIcon, SparklesIcon } from '../icons/heroicons'

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const getLogoPath = (label: string) => `/icons/${toSlug(label)}.svg`

const languagesCategory = {
  title: 'Idiomas',
  items: profile.languages,
}

const SkillIcon = ({ label }: { label: string }) => {
  const [failed, setFailed] = useState(false)
  const src = getLogoPath(label)

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
      {failed ? (
        <SparklesIcon className="h-5 w-5 text-primary-200" />
      ) : (
        <img
          src={src}
          alt={label}
          className="h-5 w-5 object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}

const LanguageIcon = ({ language }: { language: string }) => (
  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
    {language.toLowerCase().includes('inglés') ? (
      <GlobeAltIcon className="h-5 w-5 text-primary-200" />
    ) : (
      <ChatBubbleLeftRightIcon className="h-5 w-5 text-primary-200" />
    )}
  </span>
)

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
      {[...skills, languagesCategory].map((category) => (
        <motion.div
          key={category.title}
          variants={fadeInUp}
          whileHover={{ y: -6 }}
          className="glass-panel border border-white/10 px-6 py-8"
        >
          <h3 className="font-display text-xl text-white md:text-2xl text-center">{category.title}</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-primary-100">
            {category.items.map((item) => (
              <div
                key={item}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center"
              >
                {category.title === languagesCategory.title ? (
                  <LanguageIcon language={item} />
                ) : (
                  <SkillIcon label={item} />
                )}
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
)

export default SkillsSection
