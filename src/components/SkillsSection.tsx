import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'
import { SparklesIcon } from '../icons/heroicons'

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const getLogoPath = (label: string) => `/icons/${toSlug(label)}.svg`

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

const SkillsSection = () => {
  const categories = skills
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const mobileCategories =
    categories.length > 1
      ? [categories[categories.length - 1], ...categories, categories[0]]
      : categories
  const [activeIndex, setActiveIndex] = useState(0)
  const isInitializingRef = useRef(true)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    isInitializingRef.current = true
    const firstRealCard = carousel.querySelector('[data-role="skill-card"][data-index="0"]') as
      | HTMLElement
      | null
    const totalCards = mobileCategories.length

    if (firstRealCard) {
      carousel.scrollTo({ left: firstRealCard.offsetLeft, behavior: 'instant' as ScrollBehavior })
    }

    const rafId = requestAnimationFrame(() => {
      isInitializingRef.current = false
    })

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft
      const totalWidth = carousel.scrollWidth
      const viewportWidth = carousel.clientWidth
      if (totalCards <= 2) return

      if (scrollLeft <= 0) {
        carousel.scrollLeft = totalWidth - 2 * viewportWidth
        setActiveIndex(categories.length - 1)
        return
      } else if (scrollLeft >= totalWidth - viewportWidth) {
        carousel.scrollLeft = viewportWidth
        setActiveIndex(0)
        return
      }

      const centerPosition = scrollLeft + viewportWidth / 2
      const cards = Array.from(
        carousel.querySelectorAll<HTMLElement>('[data-role="skill-card"]'),
      )
      let closestIndex = 0
      let shortestDistance = Number.POSITIVE_INFINITY

      cards.forEach((card) => {
        const datasetIndex = Number(card.dataset.index)
        if (
          Number.isNaN(datasetIndex) ||
          datasetIndex < 0 ||
          datasetIndex >= categories.length
        ) {
          return
        }
        const cardCenter = card.offsetLeft + card.clientWidth / 2
        const distance = Math.abs(cardCenter - centerPosition)
        if (distance < shortestDistance) {
          shortestDistance = distance
          closestIndex = datasetIndex
        }
      })

      setActiveIndex(closestIndex)
    }

    carousel.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [categories.length, mobileCategories.length])

  const renderCard = (
    category: (typeof categories)[number],
    {
      className = '',
      isMobile = false,
      index,
    }: { className?: string; isMobile?: boolean; index?: number } = {},
  ) => {
    const dataAttrs =
      index === undefined ? {} : ({ 'data-index': index } as const)

    return (
      <motion.div
        key={category.title}
        variants={fadeInUp}
        whileHover={isMobile ? undefined : { y: -6 }}
        className={`${
          isMobile
            ? 'rounded-3xl border border-white/10 bg-transparent px-6 py-8'
            : 'glass-panel border border-white/10 px-6 py-8'
        } ${className}`}
        data-role="skill-card"
        {...dataAttrs}
      >
        <h3 className="font-display text-xl text-white md:text-2xl text-center">
          {category.title}
        </h3>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-primary-100">
          {category.items.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center shadow-[0_0_32px_rgba(29,95,255,0.28)] ring-1 ring-primary-500/10"
            >
              <SkillIcon label={item} />
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <SectionWrapper
      id="habilidades"
      eyebrow="Stack principal"
      title="Tecnologías y habilidades que domino"
      description="Un stack que combina diseño de APIs, bases de datos robustas y experiencias frontend modernas."
    >
      <div className="relative md:hidden">
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {mobileCategories.map((category, idx) =>
            renderCard(category, { className: 'min-w-[75vw] snap-center', isMobile: true, index: idx - 1 }),
          )}
        </div>
        <div className="mt-3 flex justify-center gap-2" aria-hidden="true">
          {categories.map((category, index) => (
            <span
              key={category.title}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-5 bg-white/80' : 'w-2 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="hidden gap-6 md:grid md:grid-cols-2"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((category) => renderCard(category))}
      </motion.div>
    </SectionWrapper>
  )
}

export default SkillsSection
